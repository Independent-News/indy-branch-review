/**
 * @jest-environment jsdom
 */

import {
  CLASS_NOTIFICATION_PROMPT,
  CLASS_NOTIFICATION_PROMPT_DENY,
  CLASS_NOTIFICATION_PROMPT_SHOW,
} from '#app/constants/classNames';
import { BRAZE_WEB_PRIMER_EXPIRY_DATE } from '#app/constants/localStorage';

import * as helpers from '../../../helpers/nativePushNotificationsPrompt';
import initBrazeInAppMessage from '../initBrazeInAppMessage';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');

describe('initBrazeInAppMessage()', () => {
  beforeAll(() => {
    global.braze = {
      logCustomEvent: jest.fn(),
      isPushSupported: jest.fn(),
      isPushPermissionGranted: jest.fn(),
      isPushBlocked: jest.fn(),
    };

    Object.defineProperty(window, 'sessionStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      writable: true,
    });

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.useRealTimers();
  });

  afterAll(() => {
    delete global.braze;
  });

  describe('unit test', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div class="${CLASS_NOTIFICATION_PROMPT}"></div>
      `;
      jest.spyOn(helpers, 'shouldSuppressPrompt');
    });

    afterAll(() => {
      jest.restoreAllMocks();
      document.body.innerHTML = '';
    });

    it('will not display the native prompt if Braze SDK initialization fails', async () => {
      initBrazeSDK.mockResolvedValueOnce(false);
      await initBrazeInAppMessage();
      expect(initBrazeSDK).toHaveBeenCalledTimes(1);
      expect(
        document
          .querySelector(`.${CLASS_NOTIFICATION_PROMPT}`)
          .classList.contains(CLASS_NOTIFICATION_PROMPT_SHOW),
      ).toBe(false);
    });

    it('will not display the native prompt if the prompt should be suppressed', async () => {
      helpers.shouldSuppressPrompt.mockReturnValueOnce(true);
      initBrazeSDK.mockResolvedValueOnce(true);
      await initBrazeInAppMessage();
      expect(initBrazeSDK).toHaveBeenCalledTimes(1);
      expect(
        document
          .querySelector(`.${CLASS_NOTIFICATION_PROMPT}`)
          .classList.contains(CLASS_NOTIFICATION_PROMPT_SHOW),
      ).toBe(false);
    });

    it('will display the native prompt if Braze SDK initialization is successful and the prompt should not be suppressed', async () => {
      initBrazeSDK.mockResolvedValueOnce(true);
      helpers.shouldSuppressPrompt.mockReturnValueOnce(false);
      await initBrazeInAppMessage();
      expect(initBrazeSDK).toHaveBeenCalledTimes(1);
      expect(
        document
          .querySelector(`.${CLASS_NOTIFICATION_PROMPT}`)
          .classList.contains(CLASS_NOTIFICATION_PROMPT_SHOW),
      ).toBe(true);
    });
  });

  describe('Displaying the native prompt around denial choice expiration', () => {
    const mockBrazeMethodsToFocusOnDenialExpiration = () => {
      global.braze.isPushSupported.mockReturnValue(true);
      global.braze.isPushPermissionGranted.mockReturnValue(false);
      global.braze.isPushBlocked.mockReturnValue(false);
    };

    beforeEach(() => {
      initBrazeSDK.mockResolvedValue(true);
      mockBrazeMethodsToFocusOnDenialExpiration();
      document.body.innerHTML = `
        <div class="${CLASS_NOTIFICATION_PROMPT}"></div>
      `;
    });

    afterAll(() => {
      document.body.innerHTML = '';
    });

    it('will not display the native prompt if user has denied the prompt in this session', async () => {
      window.sessionStorage.getItem.mockReturnValueOnce('true');
      await initBrazeInAppMessage();
      expect(
        document
          .querySelector(`.${CLASS_NOTIFICATION_PROMPT}`)
          .classList.contains(CLASS_NOTIFICATION_PROMPT_SHOW),
      ).toBe(false);
    });

    it('will not display the native prompt if user prompt denial choice has not expired yet', async () => {
      window.sessionStorage.getItem.mockReturnValueOnce('false');
      window.localStorage.getItem.mockReturnValueOnce(
        JSON.stringify(Date.now() + 1000),
      );
      await initBrazeInAppMessage();
      expect(
        document
          .querySelector(`.${CLASS_NOTIFICATION_PROMPT}`)
          .classList.contains(CLASS_NOTIFICATION_PROMPT_SHOW),
      ).toBe(false);
    });

    it('will display the native prompt if user prompt denial choice has expired', async () => {
      window.sessionStorage.getItem.mockReturnValueOnce('false');
      window.localStorage.getItem.mockReturnValueOnce(
        JSON.stringify(Date.now() - 1000),
      );
      await initBrazeInAppMessage();
      expect(
        document
          .querySelector(`.${CLASS_NOTIFICATION_PROMPT}`)
          .classList.contains(CLASS_NOTIFICATION_PROMPT_SHOW),
      ).toBe(true);
    });

    it('will display the deny button within the prompt which will cache the correct data in both local and session storage on click', async () => {
      document.body.innerHTML = `
        <button class="${CLASS_NOTIFICATION_PROMPT_DENY}"></button>
        `;
      window.sessionStorage.getItem.mockReturnValueOnce('false');
      window.localStorage.getItem.mockReturnValueOnce(null);
      await initBrazeInAppMessage();
      const denyButton = document.querySelector(
        `.${CLASS_NOTIFICATION_PROMPT_DENY}`,
      );
      denyButton.click();
      expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
        'promptDenied',
        'true',
      );
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        BRAZE_WEB_PRIMER_EXPIRY_DATE,
        expect.any(Number),
      );
    });

    it('will display the native prompt again to the user a month after their prompt denied choice was originally made', async () => {
      const setupUnMutatedHTML = () => {
        document.body.innerHTML = `
        <div class="${CLASS_NOTIFICATION_PROMPT}">
          <button class="${CLASS_NOTIFICATION_PROMPT_DENY}"></button>
        </div>
          `;
      };
      setupUnMutatedHTML();
      window.sessionStorage.getItem.mockReturnValue('false');
      window.localStorage.getItem.mockReturnValueOnce(null);

      await initBrazeInAppMessage();
      const denyButton = document.querySelector(
        `.${CLASS_NOTIFICATION_PROMPT_DENY}`,
      );
      denyButton.click();

      setupUnMutatedHTML();
      const [[, oneMonthLaterTimestamp]] =
        window.localStorage.setItem.mock.calls;
      window.localStorage.getItem.mockReturnValueOnce(
        JSON.stringify(oneMonthLaterTimestamp),
      );
      jest.useFakeTimers().setSystemTime(oneMonthLaterTimestamp + 1000);

      await initBrazeInAppMessage();
      expect(
        document
          .querySelector(`.${CLASS_NOTIFICATION_PROMPT}`)
          .classList.contains(CLASS_NOTIFICATION_PROMPT_SHOW),
      ).toBe(true);
    });
  });
});

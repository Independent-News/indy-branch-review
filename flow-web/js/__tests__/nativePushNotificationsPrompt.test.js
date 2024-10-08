/**
 * @jest-environment jsdom
 */

import {
  CLASS_NOTIFICATION_PROMPT,
  CLASS_NOTIFICATION_PROMPT_SHOW,
} from '#app/constants/classNames';
import { BRAZE_WEB_PRIMER_EXPIRY_DATE } from '#app/constants/localStorage';

import {
  shouldSuppressPrompt,
  displayNativePrompt,
  handleDenyButton,
  setupNotificationsPrompt,
  grabPromptDeniedExpiryDate,
  setPromptDeniedExpiryDate,
  expirePromptDeniedInOneMonth,
} from '../helpers/nativePushNotificationsPrompt';
import * as thatModule from '../helpers/nativePushNotificationsPrompt';

describe('nativePushNotificationsPrompt', () => {
  let mockAddEventListener;
  const originalDocumentQuerySelector = document.querySelector;

  beforeEach(() => {
    mockAddEventListener = jest.fn((_, handler) => handler());

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

    document.querySelector = jest.fn().mockImplementation(() => {
      return {
        classList: {
          add: jest.fn(),
          remove: jest.fn(),
        },
        addEventListener: mockAddEventListener,
      };
    });

    global.braze = {
      openSession: jest.fn(),
      isPushSupported: jest.fn(),
      isPushPermissionGranted: jest.fn(),
      isPushBlocked: jest.fn(),
    };

    global.Notification = {
      requestPermission: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    document.querySelector = originalDocumentQuerySelector;

    delete global.braze;
    delete global.Notification;
  });

  describe('handleDenyButton', () => {
    it('should bind click event to deny button and set prompt denied status in session storage with expiry date in local storage', () => {
      jest.spyOn(thatModule, 'expirePromptDeniedInOneMonth');
      handleDenyButton();

      expect(mockAddEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
      );
      expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
        'promptDenied',
        'true',
      );
      expect(window.sessionStorage.setItem).toHaveBeenCalledTimes(1);
      expect(thatModule.expirePromptDeniedInOneMonth).toHaveBeenCalledTimes(1);
      thatModule.expirePromptDeniedInOneMonth.mockRestore();
    });
  });

  describe('displayNativePrompt', () => {
    it('should add show class to native prompt element', () => {
      const mockClassListAdd = jest.fn();
      document.querySelector.mockImplementation((selector) => {
        if (selector === `.${CLASS_NOTIFICATION_PROMPT}`) {
          return {
            classList: {
              add: mockClassListAdd,
              remove: jest.fn(),
            },
            addEventListener: jest.fn(),
          };
        }
      });

      displayNativePrompt();

      expect(mockClassListAdd).toHaveBeenCalledWith(
        CLASS_NOTIFICATION_PROMPT_SHOW,
      );
    });
  });

  describe('shouldSuppressPrompt', () => {
    beforeEach(() => {
      jest.spyOn(thatModule, 'hasPromptDeniedExpired');
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('should return true if Braze push notifications is not supported', () => {
      global.braze.isPushSupported.mockReturnValueOnce(false);
      const result = shouldSuppressPrompt();
      expect(result).toBe(true);
    });

    it('should return true if Braze push permissions are already granted', () => {
      global.braze.isPushSupported.mockReturnValueOnce(true);
      global.braze.isPushPermissionGranted.mockReturnValueOnce(true);
      const result = shouldSuppressPrompt();
      expect(result).toBe(true);
    });

    it('should return true if Braze push notifications are already blocked', () => {
      global.braze.isPushSupported.mockReturnValueOnce(true);
      global.braze.isPushPermissionGranted.mockReturnValueOnce(false);
      global.braze.isPushBlocked.mockReturnValueOnce(true);
      const result = shouldSuppressPrompt();
      expect(result).toBe(true);
    });

    it('should return true if user has previously denied the prompt in the same session', () => {
      global.braze.isPushSupported.mockReturnValueOnce(true);
      global.braze.isPushPermissionGranted.mockReturnValueOnce(false);
      global.braze.isPushBlocked.mockReturnValueOnce(false);
      window.sessionStorage.getItem.mockReturnValue('true');
      const result = shouldSuppressPrompt();
      expect(result).toBe(true);
    });

    it('should return true if user prompt denial choice has not expired yet', () => {
      global.braze.isPushSupported.mockReturnValueOnce(true);
      global.braze.isPushPermissionGranted.mockReturnValueOnce(false);
      global.braze.isPushBlocked.mockReturnValueOnce(false);
      window.sessionStorage.getItem.mockReturnValue('false');
      thatModule.hasPromptDeniedExpired.mockReturnValueOnce(false);
      const result = shouldSuppressPrompt();
      expect(result).toBe(true);
    });

    it('should return false if user prompt denial choice has expired yet', () => {
      global.braze.isPushSupported.mockReturnValueOnce(true);
      global.braze.isPushPermissionGranted.mockReturnValueOnce(false);
      global.braze.isPushBlocked.mockReturnValueOnce(false);
      window.sessionStorage.getItem.mockReturnValue('false');
      thatModule.hasPromptDeniedExpired.mockReturnValueOnce(true);
      const result = shouldSuppressPrompt();
      expect(result).toBe(false);
    });
  });

  describe('setupNotificationsPrompt', () => {
    it('should setup event listeners for accept and deny buttons', () => {
      setupNotificationsPrompt();
      // Since we're not specifically checking which buttons have the listeners, this assertion is simplified
      expect(mockAddEventListener).toHaveBeenCalledTimes(2);
    });
  });

  describe('grabPromptDeniedExpiryDate', () => {
    it('will retrieve the stored expiry date from localStorage', () => {
      const mockExpiryDate = '12345';
      window.localStorage.getItem.mockReturnValue(mockExpiryDate);
      const result = grabPromptDeniedExpiryDate();
      expect(result).toBe(JSON.parse(mockExpiryDate));
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.getItem).toHaveBeenCalledWith(
        BRAZE_WEB_PRIMER_EXPIRY_DATE,
      );
    });

    it('will return null if no expiry date is stored in localStorage', () => {
      const mockExpiryDate = null;
      window.localStorage.getItem.mockReturnValue(mockExpiryDate);
      const result = grabPromptDeniedExpiryDate();
      expect(result).toBeNull();
    });
  });

  describe('setPromptDeniedExpiryDate', () => {
    it('will set the provided expiry date in localStorage', () => {
      const mockExpiryDate = '12345';
      setPromptDeniedExpiryDate(mockExpiryDate);
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        BRAZE_WEB_PRIMER_EXPIRY_DATE,
        mockExpiryDate,
      );
    });
  });

  describe('expirePromptDeniedInOneMonth', () => {
    const expectedExpiryDate = Date.now() + thatModule.ONE_MONTH_IN_MS;
    const assertExpiryDateIgnoringTestExecutionTime = (expiryDate) =>
      expect(expiryDate).toBeGreaterThanOrEqual(expectedExpiryDate);

    describe('unit test', () => {
      it('will set the prompt expiry date to be one month from now in local storage', () => {
        jest
          .spyOn(thatModule, 'setPromptDeniedExpiryDate')
          .mockImplementation();
        expirePromptDeniedInOneMonth();
        expect(thatModule.setPromptDeniedExpiryDate).toHaveBeenCalledTimes(1);
        expect(thatModule.setPromptDeniedExpiryDate).toHaveBeenCalledWith(
          expect.any(Number),
        );

        const [[expiryDate]] = thatModule.setPromptDeniedExpiryDate.mock.calls;
        assertExpiryDateIgnoringTestExecutionTime(expiryDate);
        thatModule.setPromptDeniedExpiryDate.mockRestore();
      });
    });

    describe('integration test', () => {
      it('will set the prompt expiry date to one month from now in local storage', () => {
        expirePromptDeniedInOneMonth();
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(window.localStorage.setItem).toHaveBeenCalledWith(
          BRAZE_WEB_PRIMER_EXPIRY_DATE,
          expect.any(Number),
        );

        const [[, expiryDate]] = window.localStorage.setItem.mock.calls;
        assertExpiryDateIgnoringTestExecutionTime(expiryDate);
      });
    });
  });

  describe('hasPromptDeniedExpired', () => {
    const mockPastExpiryDate = Date.now() - 10000;
    const mockFutureExpiryDate = Date.now() + 10000;

    describe('unit test', () => {
      beforeEach(() => {
        jest.spyOn(thatModule, 'grabPromptDeniedExpiryDate');
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it('will assume the prompt has expired if no expiry date is stored in local storage', () => {
        thatModule.grabPromptDeniedExpiryDate.mockReturnValueOnce(null);
        const result = thatModule.hasPromptDeniedExpired();
        expect(result).toBe(true);
        expect(thatModule.grabPromptDeniedExpiryDate).toHaveBeenCalledTimes(1);
      });

      it('will return true if stored prompt expiry date is in the past', () => {
        thatModule.grabPromptDeniedExpiryDate.mockReturnValueOnce(
          mockPastExpiryDate,
        );
        const result = thatModule.hasPromptDeniedExpired();
        expect(result).toBe(true);
      });

      it('will return false if stored prompt expiry date is in the future', () => {
        thatModule.grabPromptDeniedExpiryDate.mockReturnValueOnce(
          mockFutureExpiryDate,
        );
        const result = thatModule.hasPromptDeniedExpired();
        expect(result).toBe(false);
      });
    });

    describe('integration test', () => {
      it('will assume the prompt has expired if no expiry date is stored in local storage', () => {
        window.localStorage.getItem.mockReturnValueOnce(null);
        const result = thatModule.hasPromptDeniedExpired();
        expect(result).toBe(true);
        expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
        expect(window.localStorage.getItem).toHaveBeenCalledWith(
          BRAZE_WEB_PRIMER_EXPIRY_DATE,
        );
      });

      it('will return true if stored prompt expiry date is in the past', () => {
        window.localStorage.getItem.mockReturnValueOnce(
          JSON.stringify(mockPastExpiryDate),
        );
        const result = thatModule.hasPromptDeniedExpired();
        expect(result).toBe(true);
      });

      it('will return false if stored prompt expiry date is in the future', () => {
        window.localStorage.getItem.mockReturnValueOnce(
          JSON.stringify(mockFutureExpiryDate),
        );
        const result = thatModule.hasPromptDeniedExpired();
        expect(result).toBe(false);
      });
    });
  });
});

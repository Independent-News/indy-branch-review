/**
 * @jest-environment jsdom
 */

import { COOKIE_SUBSCRIBER } from '#app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import { CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL } from '#app/constants/localStorage';
import {
  SUBSCRIPTION_TRACKING_NAME_ONE_OFF_DONATION,
  SUBSCRIPTION_TRACKING_NAME_RECURRING_DONATION,
} from '#app/constants/subscription';

import {
  handleAlreadyHasAccessForSubscriptions,
  handleCheckoutCompleteForSubscriptions,
} from '#app/public/js/piano';

import { setCookie } from '../modules/cookie';
import { dispatchPaymentDetailsSuccess } from '../modules/custom-event-dispatchers';
import {
  getDigitalDataByKeys,
  removeDigitalDataByKeys,
} from '../modules/digital-data/digital-data-session';
import { error } from '../modules/log';
import * as thatModule from '../piano';
import { redirect } from '../utils/redirect';

jest.mock('../utils/redirect');
jest.mock('../modules/cookie');
jest.mock('../modules/digital-data/digital-data-session');
jest.mock('../modules/custom-event-dispatchers');
jest.mock('../modules/taboola');
jest.mock('../utils/internalApi');
jest.mock('../modules/log');

describe('Piano public JS methods', () => {
  beforeEach(() => {
    window.tp = [];
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.useRealTimers();
  });

  afterAll(() => {
    delete window.tp;
    delete global.fetch;
    jest.restoreAllMocks();
  });

  describe('setSubscriberCookieAndRedirectToConfirmationPage()', () => {
    it('should set subscriber cookie with correct expiry date and redirect to confirmation page', async () => {
      thatModule.setSubscriberCookieAndRedirectToConfirmationPage();
      expect(setCookie).toHaveBeenCalledTimes(1);
      expect(setCookie).toHaveBeenCalledWith(COOKIE_SUBSCRIBER, true, {
        days: thatModule.EXPIRE_DAYS,
      });
      jest.advanceTimersByTime(100);
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith('/subscribe/confirmation');
    });
  });

  describe('handleCheckoutCompleteForSubscriptions()', () => {
    beforeAll(() => {
      jest
        .spyOn(thatModule, 'setSubscriberCookieAndRedirectToConfirmationPage')
        .mockImplementation();
    });

    afterAll(() => {
      thatModule.setSubscriberCookieAndRedirectToConfirmationPage.mockRestore();
    });

    it('should expose correct checkout complete event handler to Piano SDK which sets subscriber cookie and redirects to confirmation page', () => {
      handleCheckoutCompleteForSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "checkoutComplete",
            [MockFunction],
          ],
        ]
      `);
      const checkoutCompleteHandle = window.tp[0][2];
      checkoutCompleteHandle();
      expect(
        thatModule.setSubscriberCookieAndRedirectToConfirmationPage,
      ).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleAlreadyHasAccessForSubscriptions()', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(),
          removeItem: jest.fn(),
        },
        writable: true,
      });
    });

    it('will do nothing if a different event is emitted to that of already has access', () => {
      handleAlreadyHasAccessForSubscriptions();
      const customEventHandler = window.tp[0][2];
      customEventHandler({ eventName: 'some-other-event' });
      expect(redirect).not.toHaveBeenCalled();
      expect(removeDigitalDataByKeys).not.toHaveBeenCalled();
      expect(window.localStorage.getItem).not.toHaveBeenCalled();
      expect(window.localStorage.removeItem).not.toHaveBeenCalled();
    });

    it('will expose correct custom event handler to Piano SDK which removes relevant digital data and redirects to subscribe page on has access close event if no consent or pay original url is cached', () => {
      window.localStorage.getItem.mockReturnValueOnce(null);
      handleAlreadyHasAccessForSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "customEvent",
            [Function],
          ],
        ]
      `);
      const customEventHandler = window.tp[0][2];
      customEventHandler({ eventName: 'close-has-access' });
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith('/subscribe');
      expect(removeDigitalDataByKeys).toHaveBeenCalledTimes(1);
      expect(removeDigitalDataByKeys).toHaveBeenCalledWith(
        TRACKING_PAYMENT_KEYS,
      );
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.getItem).toHaveBeenCalledWith(
        CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL,
      );
      expect(window.localStorage.removeItem).not.toHaveBeenCalled();
    });

    it('will remove relevant digital data and redirect to consent or pay original url if cached in local storage', () => {
      const mockCachedUrl = '/some-url';
      window.localStorage.getItem.mockReturnValueOnce(mockCachedUrl);
      handleAlreadyHasAccessForSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "customEvent",
            [Function],
          ],
        ]
      `);
      const customEventHandler = window.tp[0][2];
      customEventHandler({ eventName: 'close-has-access' });
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith(mockCachedUrl);
      expect(removeDigitalDataByKeys).toHaveBeenCalledTimes(1);
      expect(removeDigitalDataByKeys).toHaveBeenCalledWith(
        TRACKING_PAYMENT_KEYS,
      );
      expect(window.localStorage.removeItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.removeItem).toHaveBeenCalledWith(
        CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL,
      );
    });

    it.each([
      SUBSCRIPTION_TRACKING_NAME_ONE_OFF_DONATION,
      SUBSCRIPTION_TRACKING_NAME_RECURRING_DONATION,
    ])(
      'will remove relevant digital data and redirect to donations page if tracking name is %s',
      (trackingName) => {
        jest
          .spyOn(thatModule, 'getResourceTrackingName')
          .mockReturnValueOnce(trackingName);

        window.localStorage.getItem.mockReturnValueOnce(null);

        handleAlreadyHasAccessForSubscriptions();

        expect(window.tp).toMatchInlineSnapshot(`
          [
            [
              "addHandler",
              "customEvent",
              [Function],
            ],
          ]
        `);
        const customEventHandler = window.tp[0][2];
        customEventHandler({ eventName: 'close-has-access' });

        expect(redirect).toHaveBeenNthCalledWith(1, '/donate');
      },
    );
  });

  describe('handleCheckoutComplete()', () => {
    it('will expose correct checkout complete callback to Piano SDK', () => {
      thatModule.handleCheckoutComplete();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "checkoutComplete",
            [Function],
          ],
        ]
      `);
      const [[, , callback]] = window.tp;
      callback();
      jest.advanceTimersByTime(100);
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith(
        '/subscribe/confirmation?save_offer=true',
      );
    });
  });

  describe('showPianoOffer()', () => {
    beforeEach(() => {
      window.tp.offer = {
        show: jest.fn(),
      };
      jest.spyOn(thatModule, 'addHandlers').mockImplementation();
    });

    it('will add handlers to Piano SDK and expose correct show offer callback to be called once initialised', () => {
      thatModule.showPianoOffer({
        offerId: 'offerId',
        termId: 'termId',
        trackingData: 'trackingData',
        promoCode: 'promoCode',
        showCloseButton: false,
      });
      expect(window.tp).toMatchSnapshot();
      const [[, callback]] = window.tp;
      callback();
      expect(window.tp.offer.show).toHaveBeenCalledTimes(1);
      expect(window.tp.offer.show).toHaveBeenCalledWith({
        offerId: 'offerId',
        termId: 'termId',
        showCloseButton: false,
        promoCode: 'promoCode',
      });
    });
  });

  describe('handleCheckoutCompleteForDonations()', () => {
    const originalFetch = global.fetch;

    beforeAll(() => {
      global.fetch = jest.fn();
    });

    afterAll(() => {
      global.fetch = originalFetch;
    });

    it('will expose correct checkout complete event handler to Piano SDK which tracks successful payment, updates logged in cookies and redirects to donations page', async () => {
      const mockTrackingData = 'some-tracking-data';
      getDigitalDataByKeys.mockReturnValueOnce(mockTrackingData);
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({}),
      });
      thatModule.handleCheckoutCompleteForDonations();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "checkoutComplete",
            [Function],
          ],
        ]
      `);
      const checkoutCompleteHandler = window.tp[0][2];
      await checkoutCompleteHandler();
      expect(getDigitalDataByKeys).toHaveBeenCalledTimes(1);
      expect(getDigitalDataByKeys).toHaveBeenCalledWith(TRACKING_PAYMENT_KEYS);
      expect(dispatchPaymentDetailsSuccess).toHaveBeenCalledTimes(1);
      expect(dispatchPaymentDetailsSuccess).toHaveBeenCalledWith(
        mockTrackingData,
      );
      expect(error).not.toHaveBeenCalled();
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith('/donate/thank-you');
    });

    it("will only console error but still execute remaining functionality if fails to update user's logged in cookies", async () => {
      const mockErrorMessage = 'some-error-message';
      global.fetch.mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValueOnce({
          message: mockErrorMessage,
        }),
      });
      thatModule.handleCheckoutCompleteForDonations();
      const checkoutCompleteHandler = window.tp[0][2];
      await checkoutCompleteHandler();
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        "Error: failed to update donator's logged in cookies,",
        new Error(mockErrorMessage),
      );
      expect(getDigitalDataByKeys).toHaveBeenCalledTimes(1);
      expect(dispatchPaymentDetailsSuccess).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith('/donate/thank-you');
    });
  });
});

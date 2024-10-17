/**
 * @jest-environment jsdom
 */

import { CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL } from '#app/constants/localStorage';

import appendAdFreeSuccessQueryParam from '#app/util/appendAdFreeSuccessMessageParam';

import { dispatchPaymentDetailsSuccess } from '../modules/custom-event-dispatchers';
import { getDigitalDataByKeys } from '../modules/digital-data/digital-data-session';
import { error } from '../modules/log';
import { setSubscriberCookieAndRedirectToConfirmationPage } from '../piano';
import * as thatModule from '../pianoAdFreeHandlers';
import { identifyAdFreeUserAsRejectAll } from '../sourcePointPublic';
import { redirect } from '../utils/redirect';

jest.mock('#app/util/appendAdFreeSuccessMessageParam');
jest.mock('../utils/redirect');
jest.mock('../modules/log');
jest.mock('../modules/digital-data/digital-data-session');
jest.mock('../piano');
jest.mock('../sourcePointPublic');
jest.mock('../modules/custom-event-dispatchers');
jest.mock('../modules/digital-data/digital-data-session');

const mockTrackingData = {
  subscription_length: 'subscription_length',
  subscription_price: 'subscription_price',
  subscription_package: 'subscription_package',
  marketing_opt_in: 'marketing_opt_in',
};

describe('Piano ad free handlers', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
      },
    });
  });

  beforeEach(() => {
    window.tp = [];
    identifyAdFreeUserAsRejectAll.mockImplementationOnce((onSuccessCallback) =>
      onSuccessCallback(),
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    delete window.tp;
    delete global.fetch;
    jest.restoreAllMocks();
  });

  describe('updateUserAdFreeStatusFromClient()', () => {
    const mockServerError = 'some-server-error';
    const mockFetchJson = jest.fn();

    it('will attempt to update user ad-free status via API and not throw or console error on successful request', async () => {
      global.fetch.mockResolvedValue({ ok: true });
      await thatModule.updateUserAdFreeStatusFromClient();
      expect(global.fetch).toHaveBeenCalledTimes(2);
      expect(global.fetch).toHaveBeenNthCalledWith(
        1,
        '/api/user/logged-in-cookies/update',
        {
          method: 'POST',
        },
      );
      expect(global.fetch).toHaveBeenNthCalledWith(
        2,
        '/api/user/ad-free-access/enable',
        {
          method: 'POST',
        },
      );
      expect(error).not.toHaveBeenCalled();
    });

    it('will console error and re-throw error on unsuccessful request to update user logged in cookies', async () => {
      global.fetch
        .mockResolvedValueOnce({
          ok: false,
          json: mockFetchJson.mockResolvedValueOnce(mockServerError),
        })
        .mockResolvedValueOnce({ ok: true });
      await expect(() =>
        thatModule.updateUserAdFreeStatusFromClient(),
      ).rejects.toThrow(new Error(mockServerError));
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        'Error updating ad free status:',
        mockServerError,
      );
    });

    it('will console error and re-throw error on unsuccessful request to update user ad-free access status in Piano', async () => {
      global.fetch.mockResolvedValueOnce({ ok: true }).mockResolvedValueOnce({
        ok: false,
        json: mockFetchJson.mockResolvedValueOnce(mockServerError),
      });
      await expect(() =>
        thatModule.updateUserAdFreeStatusFromClient(),
      ).rejects.toThrow(new Error(mockServerError));
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        'Error updating ad free status:',
        mockServerError,
      );
    });

    it('will console error and re-throw error if fetch fails due to no internet connection', async () => {
      global.fetch.mockRejectedValue(new Error(mockServerError));
      await expect(() =>
        thatModule.updateUserAdFreeStatusFromClient(),
      ).rejects.toThrow(new Error(mockServerError));
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        'Error updating ad free status:',
        mockServerError,
      );
    });
  });

  describe('handleCheckoutCompleteForAdFreeSubscriptions()', () => {
    beforeEach(() => {
      jest.spyOn(thatModule, 'updateUserAdFreeStatusFromClient');
    });

    it('should expose correct checkout complete event handler to Piano SDK which redirects to saved url in local storage on successful ad free status update', async () => {
      const mockUrl = '/some-url';
      const mockAdFreeSuccessUrl = `${mockUrl}?adFreeSuccess=true`;
      window.localStorage.getItem.mockReturnValueOnce(mockUrl);
      appendAdFreeSuccessQueryParam.mockReturnValueOnce(mockAdFreeSuccessUrl);
      thatModule.updateUserAdFreeStatusFromClient.mockResolvedValueOnce(null);
      thatModule.handleCheckoutCompleteForAdFreeSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
      [
        [
          "addHandler",
          "checkoutComplete",
          [Function],
        ],
      ]
    `);
      const checkoutCompleteHandle = window.tp[0][2];
      await checkoutCompleteHandle();
      expect(thatModule.updateUserAdFreeStatusFromClient).toHaveBeenCalledTimes(
        1,
      );
      expect(identifyAdFreeUserAsRejectAll).toHaveBeenCalledTimes(1);
      expect(identifyAdFreeUserAsRejectAll).toHaveBeenCalledWith(
        expect.any(Function),
      );
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.getItem).toHaveBeenCalledWith(
        CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL,
      );
      expect(appendAdFreeSuccessQueryParam).toHaveBeenCalledTimes(1);
      expect(appendAdFreeSuccessQueryParam).toHaveBeenCalledWith(mockUrl);
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith(mockAdFreeSuccessUrl);
    });

    it('should redirect to homepage with ad free success query param if no saved url is detected in local storage on successful request', async () => {
      const mockAdFreeSuccessUrl = `/?adFreeSuccess=true`;
      window.localStorage.getItem.mockReturnValueOnce(null);
      thatModule.updateUserAdFreeStatusFromClient.mockResolvedValueOnce(null);
      appendAdFreeSuccessQueryParam.mockReturnValueOnce(mockAdFreeSuccessUrl);
      thatModule.handleCheckoutCompleteForAdFreeSubscriptions();
      const checkoutCompleteHandle = window.tp[0][2];
      await checkoutCompleteHandle();
      expect(appendAdFreeSuccessQueryParam).toHaveBeenCalledWith('/');
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith(mockAdFreeSuccessUrl);
    });

    it('should not check saved url or redirect but console error if fails to update user ad free status', async () => {
      const mockError = new Error('some-error');
      thatModule.updateUserAdFreeStatusFromClient.mockRejectedValueOnce(
        mockError,
      );
      thatModule.handleCheckoutCompleteForAdFreeSubscriptions();
      const checkoutCompleteHandle = window.tp[0][2];
      await checkoutCompleteHandle();
      expect(window.localStorage.getItem).not.toHaveBeenCalled();
      expect(appendAdFreeSuccessQueryParam).not.toHaveBeenCalled();
      expect(redirect).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        'Error handling checkout for ad-free subscription:',
        mockError.message,
      );
    });

    it('should track payment details success in adobe', () => {
      thatModule.handleCheckoutCompleteForAdFreeSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "checkoutComplete",
            [Function],
          ],
        ]
      `);
      getDigitalDataByKeys.mockReturnValueOnce(mockTrackingData);
      const checkoutCompleteHandle = window.tp[0][2];
      checkoutCompleteHandle();
      expect(dispatchPaymentDetailsSuccess).toHaveBeenCalledTimes(1);
      expect(dispatchPaymentDetailsSuccess).toHaveBeenCalledWith(
        mockTrackingData,
      );
    });
  });

  describe('handleCheckoutCompleteForAdFreeAndPremiumSubscriptions()', () => {
    beforeEach(() => {
      jest.spyOn(thatModule, 'updateUserAdFreeStatusFromClient');
    });

    it('should expose correct checkout complete event handler to Piano SDK which redirects to confirmation page on successful ad-free status update', async () => {
      thatModule.updateUserAdFreeStatusFromClient.mockResolvedValueOnce(null);
      setSubscriberCookieAndRedirectToConfirmationPage.mockReturnValueOnce(
        null,
      );
      thatModule.handleCheckoutCompleteForAdFreeAndPremiumSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "checkoutComplete",
            [Function],
          ],
        ]
      `);
      const checkoutCompleteHandle = window.tp[0][2];
      await checkoutCompleteHandle();
      expect(thatModule.updateUserAdFreeStatusFromClient).toHaveBeenCalledTimes(
        1,
      );
      expect(identifyAdFreeUserAsRejectAll).toHaveBeenCalledTimes(1);
      expect(identifyAdFreeUserAsRejectAll).toHaveBeenCalledWith(
        expect.any(Function),
      );
      expect(
        setSubscriberCookieAndRedirectToConfirmationPage,
      ).toHaveBeenCalledTimes(1);
    });

    it('should console error and not attempt to set subscriber cookie or redirect on unsuccessful ad-free status update', async () => {
      const mockError = new Error('some-error');
      thatModule.updateUserAdFreeStatusFromClient.mockRejectedValueOnce(
        mockError,
      );
      thatModule.handleCheckoutCompleteForAdFreeAndPremiumSubscriptions();
      const checkoutCompleteHandle = window.tp[0][2];
      await checkoutCompleteHandle();
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        'Error handling checkout for ad-free and premium subscription:',
        mockError.message,
      );
      expect(
        setSubscriberCookieAndRedirectToConfirmationPage,
      ).not.toHaveBeenCalled();
    });

    it('should console error unsuccessful subscriber cookie set or redirect', async () => {
      const mockError = new Error('some-error');
      thatModule.updateUserAdFreeStatusFromClient.mockResolvedValueOnce(null);
      setSubscriberCookieAndRedirectToConfirmationPage.mockImplementationOnce(
        () => {
          throw mockError;
        },
      );
      thatModule.handleCheckoutCompleteForAdFreeAndPremiumSubscriptions();
      const checkoutCompleteHandle = window.tp[0][2];
      await checkoutCompleteHandle();
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        'Error handling checkout for ad-free and premium subscription:',
        mockError.message,
      );
    });

    it('should track payment details success in adobe', () => {
      thatModule.handleCheckoutCompleteForAdFreeSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "checkoutComplete",
            [Function],
          ],
        ]
      `);
      getDigitalDataByKeys.mockReturnValueOnce(mockTrackingData);
      const checkoutCompleteHandle = window.tp[0][2];
      checkoutCompleteHandle();
      expect(dispatchPaymentDetailsSuccess).toHaveBeenCalledTimes(1);
      expect(dispatchPaymentDetailsSuccess).toHaveBeenCalledWith(
        mockTrackingData,
      );
    });
  });
});

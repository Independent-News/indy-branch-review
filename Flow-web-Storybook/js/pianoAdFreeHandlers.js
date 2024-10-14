import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import { CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL } from '#app/constants/localStorage';

import appendAdFreeSuccessMessageParam from '#app/util/appendAdFreeSuccessMessageParam';

import { dispatchPaymentDetailsSuccess } from './modules/custom-event-dispatchers';
import { getDigitalDataByKeys } from './modules/digital-data/digital-data-session';
import { error } from './modules/log';
import { setSubscriberCookieAndRedirectToConfirmationPage } from './piano';
import * as thisModule from './pianoAdFreeHandlers';
import { identifyAdFreeUserAsRejectAll } from './sourcePointPublic';
import { redirect } from './utils/redirect';

export const updateUserAdFreeStatusFromClient = async () => {
  try {
    const responses = await Promise.all([
      fetch('/api/user/logged-in-cookies/update', {
        method: 'POST',
      }),
      fetch('/api/user/ad-free-access/enable', {
        method: 'POST',
      }),
    ]);
    const firstRejectedResponse = responses.find(({ ok }) => !ok);
    if (!firstRejectedResponse) {
      return;
    }
    const rejectedReason = await firstRejectedResponse.json();
    throw new Error(rejectedReason);
  } catch (e) {
    error('Error updating ad free status:', e.message);
    throw e;
  }
};

export const handleCheckoutCompleteForAdFreeSubscriptions = () => {
  window.tp.push([
    'addHandler',
    'checkoutComplete',
    async () => {
      try {
        const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
        dispatchPaymentDetailsSuccess(trackingData);
        await thisModule.updateUserAdFreeStatusFromClient();
        const sourcePointCallback = () => {
          const savedUrl =
            localStorage.getItem(CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL) ||
            '/';
          const redirectUrl = appendAdFreeSuccessMessageParam(savedUrl);
          redirect(redirectUrl);
        };
        identifyAdFreeUserAsRejectAll(sourcePointCallback);
      } catch (e) {
        error('Error handling checkout for ad-free subscription:', e.message);
      }
    },
  ]);
};

export const handleCheckoutCompleteForAdFreeAndPremiumSubscriptions = () => {
  window.tp.push([
    'addHandler',
    'checkoutComplete',
    async () => {
      try {
        const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
        dispatchPaymentDetailsSuccess(trackingData);
        await thisModule.updateUserAdFreeStatusFromClient();
        const sourcePointCallback =
          setSubscriberCookieAndRedirectToConfirmationPage;
        identifyAdFreeUserAsRejectAll(sourcePointCallback);
      } catch (e) {
        error(
          'Error handling checkout for ad-free and premium subscription:',
          e.message,
        );
      }
    },
  ]);
};

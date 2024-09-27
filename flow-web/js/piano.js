import { COOKIE_SUBSCRIBER } from '#app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import {
  ID_MY_ACCOUNT,
  ID_SUBSCRIPTION_PAYMENT_PAGE_CONTAINER,
} from '#app/constants/ids';
import { CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL } from '#app/constants/localStorage';
import {
  SUBSCRIPTION_TRACKING_NAME_ONE_OFF_DONATION,
  SUBSCRIPTION_TRACKING_NAME_PREMIUM_AND_TIDE,
  SUBSCRIPTION_TRACKING_NAME_RECURRING_DONATION,
} from '#app/constants/subscription';

import {
  getDonationConfirmationRedirect,
  getDonationsRedirect,
} from '#app/util/redirects';

import { setCookie } from './modules/cookie';
import {
  dispatchPaymentDetailsFailed,
  dispatchPaymentDetailsSuccess,
  dispatchPaymentFormLoaded,
} from './modules/custom-event-dispatchers';
import {
  getDigitalDataByKeys,
  removeDigitalDataByKeys,
} from './modules/digital-data/digital-data-session';
import { error } from './modules/log';
import { trackSubscriptionCause } from './modules/taboola';
import * as thisModule from './piano';
import { InternalApi } from './utils/internalApi';
import { redirect } from './utils/redirect';

export const EXPIRE_DAYS = 3650; // 10 years

/**
 * Retrieves the resource tracking name from the payment page container
 * @returns {string} the resource tracking name
 */
export const getResourceTrackingName = () => {
  const paymentPageContainer = document.getElementById(
    ID_SUBSCRIPTION_PAYMENT_PAGE_CONTAINER,
  );

  return (
    paymentPageContainer?.dataset?.subscriptionResourceTrackingName ||
    SUBSCRIPTION_TRACKING_NAME_PREMIUM_AND_TIDE
  );
};

export const setSubscriberCookieAndRedirectToConfirmationPage = () => {
  setCookie(COOKIE_SUBSCRIBER, true, { days: EXPIRE_DAYS });
  // set timeout to make the redirection happens in the next execution cycle.
  // it's to make sure other `checkoutComplete` handler will be triggered before redirection
  setTimeout(() => {
    redirect('/subscribe/confirmation');
  });
};

export const handleCheckoutCompleteForSubscriptions = () => {
  window.tp.push([
    'addHandler',
    'checkoutComplete',
    thisModule.setSubscriberCookieAndRedirectToConfirmationPage,
  ]);
};

export const handleCheckoutCompleteForDonations = () => {
  window.tp.push([
    'addHandler',
    'checkoutComplete',
    async () => {
      const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
      dispatchPaymentDetailsSuccess(trackingData);
      try {
        const res = await fetch('/api/user/logged-in-cookies/update', {
          method: 'POST',
        });
        if (!res.ok) {
          const resJson = await res.json();
          throw new Error(resJson.message);
        }
      } catch (e) {
        error("Error: failed to update donator's logged in cookies,", e);
      }
      redirect(getDonationConfirmationRedirect());
    },
  ]);
};

export const handleAlreadyHasAccessForSubscriptions = () => {
  window.tp.push([
    'addHandler',
    'customEvent',
    ({ eventName }) => {
      if (eventName !== 'close-has-access') {
        return;
      }

      const trackingName = thisModule.getResourceTrackingName();

      const consentOrPayOriginalUrl = localStorage.getItem(
        CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL,
      );
      const hasConsentOrPayRedirect = !!consentOrPayOriginalUrl;

      const isDonation = [
        SUBSCRIPTION_TRACKING_NAME_ONE_OFF_DONATION,
        SUBSCRIPTION_TRACKING_NAME_RECURRING_DONATION,
      ].includes(trackingName);

      removeDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

      if (isDonation) {
        redirect(getDonationsRedirect());
        return;
      }

      if (hasConsentOrPayRedirect) {
        localStorage.removeItem(CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL);
        redirect(consentOrPayOriginalUrl);
        return;
      }

      redirect('/subscribe');
    },
  ]);
};

export const addHandlers = (trackingData = {}, isPaymentFlow) => {
  const trackingDataKeys = Object.keys(trackingData);

  window.tp = window.tp || [];

  window.tp.push([
    'addHandler',
    'startCheckout',
    () => dispatchPaymentFormLoaded(trackingData),
  ]);

  !isPaymentFlow &&
    window.tp.push([
      'addHandler',
      'checkoutComplete',
      () => {
        dispatchPaymentDetailsSuccess(trackingData);
        trackSubscriptionCause();
        removeDigitalDataByKeys(trackingDataKeys);
      },
    ]);

  window.tp.push([
    'addHandler',
    'checkoutError',
    () => {
      removeDigitalDataByKeys(trackingDataKeys);
      dispatchPaymentDetailsFailed(trackingData);
    },
  ]);
};

export const showPianoOffer = ({
  offerId = '',
  termId = '',
  trackingData = {},
  isPaymentFlow = false,
  promoCode = '',
  showCloseButton = true,
} = {}) => {
  thisModule.addHandlers(trackingData, isPaymentFlow);

  window.tp = window.tp || [];
  window.tp.push([
    'init',
    () => {
      window.tp.offer.show({
        offerId,
        termId,
        showCloseButton,
        ...(promoCode && { promoCode }),
      });
    },
  ]);
};

export const showMyAccount = () => {
  window.tp = window.tp || [];
  window.tp.push([
    'init',
    () => {
      window.tp.myaccount.show({
        displayMode: 'inline',
        containerSelector: `#${ID_MY_ACCOUNT}`,
      });
    },
  ]);
};

export const updateDefaultPaymentMethodOnEvent = () => {
  window.tp = window.tp || [];
  window.tp.push([
    'addHandler',
    'customEvent',
    async ({ eventName, params }) => {
      if (eventName === 'default-payment-method') {
        const desiredPaymentMethodId = params.method;
        const res = await InternalApi.post(
          'profile/set-default-payment-method',
          { desiredPaymentMethodId },
        );

        if (res.ok) {
          // re-mount Piano experience to showcase updated ui
          thisModule.showMyAccount();
          return;
        }

        console.warn('Warning: failed to update default payment method.');
      }
    },
  ]);
};

export const handleCheckoutComplete = () => {
  window.tp = window.tp || [];
  window.tp.push([
    'addHandler',
    'checkoutComplete',
    () => {
      // set timeout to make the redirection happens in the next execution cycle.
      // it's to make sure other `checkoutComplete` handler will be triggered before redirection
      setTimeout(() => {
        redirect('/subscribe/confirmation?save_offer=true');
      });
    },
  ]);
};

import {
  CLASS_PAYMENT_METHODS,
  CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
} from '#app/constants/classNames';
import { ID_SUBSCRIPTION_PAYMENT_PAGE_CONTAINER } from '#app/constants/ids';
import {
  SUBSCRIPTION_TRACKING_NAME_AD_FREE_AND_PREMIUM,
  SUBSCRIPTION_TRACKING_NAME_AD_FREE_ONLY,
  SUBSCRIPTION_TRACKING_NAME_ONE_OFF_DONATION,
  SUBSCRIPTION_TRACKING_NAME_PREMIUM_AND_TIDE,
  SUBSCRIPTION_TRACKING_NAME_RECURRING_DONATION,
} from '#app/constants/subscription';

import {
  showPianoOffer,
  handleAlreadyHasAccessForSubscriptions,
  handleCheckoutCompleteForSubscriptions,
  handleCheckoutCompleteForDonations,
} from '../piano';
import {
  handleCheckoutCompleteForAdFreeAndPremiumSubscriptions,
  handleCheckoutCompleteForAdFreeSubscriptions,
} from '../pianoAdFreeHandlers';

import * as thisModule from './add-piano-handlers';

const IS_PAYMENT_FLOW = true;

/**
 *
 * @param {string} trackingName
 * @returns {Function} a checkout handler function
 */
const getHandlerByName = (trackingName = '') => {
  switch (trackingName) {
    case SUBSCRIPTION_TRACKING_NAME_AD_FREE_ONLY:
      return handleCheckoutCompleteForAdFreeSubscriptions;

    case SUBSCRIPTION_TRACKING_NAME_AD_FREE_AND_PREMIUM:
      return handleCheckoutCompleteForAdFreeAndPremiumSubscriptions;

    case SUBSCRIPTION_TRACKING_NAME_RECURRING_DONATION:
    case SUBSCRIPTION_TRACKING_NAME_ONE_OFF_DONATION:
      return handleCheckoutCompleteForDonations;

    default:
      return handleCheckoutCompleteForSubscriptions;
  }
};

export const determineCheckoutSuccessHandler = () => {
  const paymentPageContainer = document.getElementById(
    ID_SUBSCRIPTION_PAYMENT_PAGE_CONTAINER,
  );

  const selectedResourceTrackingName =
    paymentPageContainer?.dataset?.subscriptionResourceTrackingName ||
    SUBSCRIPTION_TRACKING_NAME_PREMIUM_AND_TIDE;

  return getHandlerByName(selectedResourceTrackingName);
};

export const addPianoHandlers = (
  offerId: string,
  termId: string,
  trackingData: Record<string, unknown>,
  shouldSkipOfferRenderOnMount = false,
) => {
  const chooseButton = document
    .getElementsByClassName(CLASS_CHOOSE_PAYMENT_METHOD_BUTTON)
    .item(0);

  const startCheckout = () => {
    showPianoOffer({
      offerId,
      termId,
      trackingData,
      isPaymentFlow: IS_PAYMENT_FLOW,
    });
  };

  chooseButton?.addEventListener('click', () => {
    startCheckout();

    const paymentMethodsElem = document
      .getElementsByClassName(CLASS_PAYMENT_METHODS)
      .item(0);

    paymentMethodsElem?.classList.add('hide');
  });

  window.tp = window.tp || [];
  const checkoutSuccessHandler = thisModule.determineCheckoutSuccessHandler();
  checkoutSuccessHandler();
  handleAlreadyHasAccessForSubscriptions();

  if (shouldSkipOfferRenderOnMount) {
    return;
  }
  startCheckout();
};

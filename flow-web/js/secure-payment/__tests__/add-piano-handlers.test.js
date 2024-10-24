/**
 * @jest-environment jsdom
 */
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
} from '#app/public/js/piano';

import {
  handleCheckoutCompleteForAdFreeAndPremiumSubscriptions,
  handleCheckoutCompleteForAdFreeSubscriptions,
} from '../../pianoAdFreeHandlers';
import * as thatModule from '../add-piano-handlers';

jest.mock('#app/public/js/piano');

describe('add-piano-handlers script', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  describe('determineCheckoutSuccessHandler()', () => {
    beforeEach(() => {
      jest.spyOn(document, 'getElementById');
    });

    it.each([
      [
        SUBSCRIPTION_TRACKING_NAME_AD_FREE_ONLY,
        handleCheckoutCompleteForAdFreeSubscriptions,
      ],
      [
        SUBSCRIPTION_TRACKING_NAME_AD_FREE_AND_PREMIUM,
        handleCheckoutCompleteForAdFreeAndPremiumSubscriptions,
      ],
      [
        SUBSCRIPTION_TRACKING_NAME_PREMIUM_AND_TIDE,
        handleCheckoutCompleteForSubscriptions,
      ],
      [
        SUBSCRIPTION_TRACKING_NAME_RECURRING_DONATION,
        handleCheckoutCompleteForDonations,
      ],
      [
        SUBSCRIPTION_TRACKING_NAME_ONE_OFF_DONATION,
        handleCheckoutCompleteForDonations,
      ],
      ['some-other-resource', handleCheckoutCompleteForSubscriptions],
      [null, handleCheckoutCompleteForSubscriptions],
    ])(
      'will select payment page checkout container and use selected subscription resource to return correct success handler when selected subscription resource is %s',
      (selectedSubscriptionResource, expectedSuccessCheckoutHandler) => {
        document.getElementById.mockReturnValueOnce({
          dataset: {
            subscriptionResourceTrackingName: selectedSubscriptionResource,
          },
        });
        const successCheckoutHandler =
          thatModule.determineCheckoutSuccessHandler();
        expect(successCheckoutHandler).toBe(expectedSuccessCheckoutHandler);
        expect(document.getElementById).toHaveBeenCalledTimes(1);
        expect(document.getElementById).toHaveBeenCalledWith(
          ID_SUBSCRIPTION_PAYMENT_PAGE_CONTAINER,
        );
      },
    );
  });

  describe('addPianoHandlers()', () => {
    const trackingData = {
      subscription_package: 'test-package',
      subscription_price: 'test-price',
    };
    const offerId = 'offerId';
    const termId = 'termId';
    const chooseButton = document.getElementsByClassName(
      CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
    );
    const paymentMethodsElem = document.getElementsByClassName(
      CLASS_PAYMENT_METHODS,
    );
    const mockCheckoutSuccessHandler = jest.fn();

    beforeEach(() => {
      jest.spyOn(console, 'warn').mockImplementation(() => {});
      jest
        .spyOn(thatModule, 'determineCheckoutSuccessHandler')
        .mockReturnValueOnce(mockCheckoutSuccessHandler);

      document.body.innerHTML = `
      <button class=${CLASS_CHOOSE_PAYMENT_METHOD_BUTTON}>Choose</button>
      <div class=${CLASS_PAYMENT_METHODS}></div>
    `;
    });

    afterEach(() => {
      window.tp = [];
    });

    it('should show selected offer details on payment page', () => {
      thatModule.addPianoHandlers(offerId, termId, trackingData);

      expect(showPianoOffer).toHaveBeenCalledTimes(1);
      expect(showPianoOffer).toHaveBeenCalledWith({
        isPaymentFlow: true,
        offerId: 'offerId',
        termId: 'termId',
        trackingData: {
          subscription_package: 'test-package',
          subscription_price: 'test-price',
        },
      });
    });

    it('should hide the payment methods after user chooses one', () => {
      jest.spyOn(chooseButton[0], 'addEventListener');
      thatModule.addPianoHandlers(offerId, termId, trackingData);

      chooseButton[0].click();
      expect(chooseButton[0].addEventListener).toHaveBeenCalledTimes(1);
      expect(paymentMethodsElem[0].classList.contains('hide')).toBe(true);
      expect(showPianoOffer).toHaveBeenCalledTimes(2);
      expect(showPianoOffer).toHaveBeenCalledWith({
        isPaymentFlow: true,
        offerId: 'offerId',
        termId: 'termId',
        trackingData: {
          subscription_package: 'test-package',
          subscription_price: 'test-price',
        },
      });
    });

    it('window.tp should be setup correctly with Piano event handlers even if chooseButton is not found', () => {
      document.body.innerHTML = '<div class="some-other-class"></div>';
      thatModule.addPianoHandlers(offerId, termId, trackingData);
      expect(window.tp).toBeDefined();
      expect(thatModule.determineCheckoutSuccessHandler).toHaveBeenCalledTimes(
        1,
      );
      expect(mockCheckoutSuccessHandler).toHaveBeenCalledTimes(1);
      expect(handleAlreadyHasAccessForSubscriptions).toHaveBeenCalledTimes(1);
    });

    it('should not render Piano offer on load if shouldSkipOfferRenderOnMount is true', () => {
      const mockShouldSkipOfferRenderOnMount = true;
      thatModule.addPianoHandlers(
        offerId,
        termId,
        trackingData,
        mockShouldSkipOfferRenderOnMount,
      );
      expect(showPianoOffer).not.toHaveBeenCalled();
    });
  });
});

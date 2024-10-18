import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import {
  STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
  STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
  STRIPE_ELEMENTS_SUCCESS_TERM_ID,
} from '#app/constants/piano';

import { getDigitalDataByKeys } from '../modules/digital-data/digital-data-session';
import { getParametersByNames } from '../modules/util';

import { addPianoHandlers } from './add-piano-handlers';

const [offerId, termId, stripeElementsSuccessTermId] = getParametersByNames([
  STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
  STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
  STRIPE_ELEMENTS_SUCCESS_TERM_ID,
]).map(({ value }) => value);

const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
// Stripe Elements automatically reloads page after successful checkout
// we therefore can't show offer immediately under that scenario because
// it messes up the payment confirmation within the Piano iframe and causes an 'internal error'
const shouldSkipOfferRenderOnMount = !!stripeElementsSuccessTermId;

addPianoHandlers(offerId, termId, trackingData, shouldSkipOfferRenderOnMount);

import { FORGOTTEN_PASSWORD_REDIRECT_URL } from '#app/constants/localStorage';
import {
  STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
  STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
} from '#app/constants/piano';

import { getParametersByNames } from './modules/util';
import { redirect } from './utils/redirect';

export default ({
  offerIdParamName = STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
  termIdParamName = STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
} = {}) => {
  const [offerId, termId] = getParametersByNames([
    offerIdParamName,
    termIdParamName,
  ]).map(({ value }) => value);
  const redirectUrl = new URL(window.location.pathname, window.location.origin);
  redirectUrl.searchParams.set(offerIdParamName, offerId);
  redirectUrl.searchParams.set(termIdParamName, termId);
  // saved in local storage because Piano's forgotten password flow uses a magic link implementation potentially in same tab
  localStorage.setItem(FORGOTTEN_PASSWORD_REDIRECT_URL, redirectUrl.toString());
  redirect('/forgotten-password');
};

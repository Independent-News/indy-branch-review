import { COOKIE_FEAT_FULLSTORY } from '#app/constants/cookies';

import { isFeatureFlagEnabled } from '#app/public/js/utils/featureFlag';

import { loadJS } from './util';

const initFullstory = (consent = false) => {
  if (!isFeatureFlagEnabled(COOKIE_FEAT_FULLSTORY)) {
    return;
  }
  if (consent) {
    // We're required to wait 3s before loading the snippet
    window.setTimeout(() => {
      loadJS('/js/fullstory.raw.js');
    }, 3000);
  }
};

export default initFullstory;

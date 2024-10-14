/**
 * Loads the analytics script based on consent and environment.
 *
 * Currently, we have two distinct JavaScript files:
 * - `https://adtech.indyadvertising.com/js/app.js` for betting offers which is
 * implemented in the google tag manager.
 * - `https://adtech.indyadvertising.com/js/ktag.js` for performance/revenue
 * tracking.
 *
 * To prevent cookies from dropping before consent, we need to add the 'ktag'
 * JS file to our code so it only fires when consent is given.
 *
 * The script URL varies depending on the environment:
 * - **Production**: `https://adtech.indyadvertising.com/js/ktag.js`
 * - **Development**: `https://adtech.indyadvertising.com/js/ktag-testing.js`
 * @param {boolean} [consent=false] - Whether the user has given consent
 * @returns {void}
 */

import { loadJS } from './util';

const bettingAnalyticsTag = (consent = false) => {
  const { url } = window.JSGlobals?.betting?.analytics || {};

  if (!url) {
    console.error('No betting analytics tag URL', {
      cause: window.JSGlobals?.betting,
    });
  }

  if (consent && url) {
    // 5s delay before loading the snippet is required
    window.setTimeout(() => {
      loadJS(url);
    }, 5000);
  }
};

export default bettingAnalyticsTag;

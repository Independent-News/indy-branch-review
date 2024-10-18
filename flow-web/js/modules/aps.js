import { PUB_ID } from '#app/constants/aps';

import * as thisModule from './aps';
import { loadJS } from './util';

/**
 * Load Amazon Publish Service script
 */
export const loadScript = async () => {
  await loadJS(['/js/third-party/aps.js']);
};

/**
 * Initialize Amazon Publish Service
 */
export const init = () => {
  window.apstag?.init({
    pubID: PUB_ID,
    adServer: 'googletag',
    videoAdServer: 'DFP',
    deals: true,
  });
};

/**
 * @typedef {object} APSBid
 * @param {string} slotID The div ID of the slot that will render the creative
 * @param {string} mediaType The media type of the bid
 * @param {Array<string, string>} targeting The targeting key-value pairs for the bid
 */

/**
 * Get bids data from Amazon Publish Service bids request
 * @param {string} adUnitCode the ad unit code
 * @returns {Promise<Array<APSBid>>}
 * @see {@link https://ams.amazon.com/webpublisher/uam/docs/web-integration-documentation/integration-guide/javascript-guide/api-reference.html#apstagfetchbids}
 */
export const requestBids = (adUnitCode) => {
  const APS_TIMEOUT = 5000;
  // Directly added window to prevent AMP error
  const apstag = window.apstag;

  thisModule.init();

  const bidConfig = {
    slots: [
      {
        slotID: adUnitCode,
        mediaType: 'video',
      },
    ],
    timeout: APS_TIMEOUT,
  };

  return new Promise(function (resolve) {
    /**
     * Callback function required by apstag.fetchBids
     * @param {Array<APSBid>} bids
     */
    const callback = (bids) => {
      resolve(bids);
    };

    apstag.fetchBids(bidConfig, callback);
  });
};

/**
 * Get targeting key-value pairs from Amazon Publish Service bids request
 * @param {string} adUnitCode The ad unit code used as slot ID in the request
 * @returns {Array} targeting key-value pairs
 */
export const getTargeting = async (adUnitCode) => {
  const bids = await thisModule.requestBids(adUnitCode);
  const bid = bids.filter((bid) => bid.slotID === adUnitCode)[0];
  return bid?.targeting || [];
};

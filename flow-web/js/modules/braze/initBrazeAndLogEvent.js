/* globals braze */

import initBrazeSDK from './initBrazeSDK';

/**
 * Initialize Braze and log  a custom event, with error handling
 * @param {string} event
 * @param {*} payload
 */
export const initBrazeAndLogEvent = async (event, payload) => {
  try {
    const init = await initBrazeSDK();
    init && braze.logCustomEvent(event, payload);
  } catch (error) {
    console.error(`Error logging ${event} Braze event:`, error.message);
  }
};

export default initBrazeAndLogEvent;

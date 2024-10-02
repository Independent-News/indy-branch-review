import ensureBrazeDataIsImmediatelyLogged from './ensureBrazeDataIsImmediatelyLogged';
import initBrazeSDK from './initBrazeSDK';

import type { BrazeEvents, CustomEventProperties } from '#types/braze';

/**
 * Initialize Braze and log  a custom event, with error handling
 * @param {string} eventName
 * @param {*} eventProperties
 */
export const initBrazeAndLogEvent = async (
  eventName: BrazeEvents,
  eventProperties?: CustomEventProperties,
) => {
  try {
    const init = await initBrazeSDK();
    if (init) {
      window.braze?.logCustomEvent(eventName, eventProperties);
      ensureBrazeDataIsImmediatelyLogged();
    }
  } catch (error) {
    console.error(`Error logging ${eventName} Braze event:`, error.message);
  }
};

export default initBrazeAndLogEvent;

/* globals braze */

import initBrazeSDK from './initBrazeSDK';

export const initBrazeOnSubscriptionStart = async () => {
  try {
    const init = await initBrazeSDK();
    init && braze.logCustomEvent('subscription_start');
  } catch (error) {
    console.error(
      'Error logging subscription_start Braze event:',
      error.message,
    );
  }
};

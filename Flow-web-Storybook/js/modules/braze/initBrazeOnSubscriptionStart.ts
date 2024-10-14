import { BRAZE_EVENT_SUBSCRIPTION_START } from './constants';
import ensureBrazeDataIsImmediatelyLogged from './ensureBrazeDataIsImmediatelyLogged';
import initBrazeSDK from './initBrazeSDK';

export const initBrazeOnSubscriptionStart = async () => {
  try {
    const isBrazeInitialised = await initBrazeSDK();
    if (isBrazeInitialised) {
      window.braze?.logCustomEvent(BRAZE_EVENT_SUBSCRIPTION_START);
      ensureBrazeDataIsImmediatelyLogged();
    }
  } catch (error) {
    console.error(
      'Error logging subscription_start Braze event:',
      error.message,
    );
  }
};

import { BRAZE_EVENT_DONATION_START } from './constants';
import ensureBrazeDataIsImmediatelyLogged from './ensureBrazeDataIsImmediatelyLogged';
import initBrazeSDK from './initBrazeSDK';

export const initBrazeOnDonationStart = async () => {
  try {
    const isBrazeInitialised = await initBrazeSDK();
    if (isBrazeInitialised) {
      window.braze?.logCustomEvent(BRAZE_EVENT_DONATION_START);
      ensureBrazeDataIsImmediatelyLogged();
    }
  } catch (error) {
    console.error(
      `Error logging ${BRAZE_EVENT_DONATION_START} Braze event:`,
      error.message,
    );
  }
};

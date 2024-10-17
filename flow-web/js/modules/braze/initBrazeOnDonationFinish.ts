import { BRAZE_EVENT_DONATION_FINISH } from './constants';
import ensureBrazeDataIsImmediatelyLogged from './ensureBrazeDataIsImmediatelyLogged';
import initBrazeSDK from './initBrazeSDK';

export const initBrazeOnDonationFinish = async () => {
  try {
    const isBrazeInitialised = await initBrazeSDK();
    if (isBrazeInitialised) {
      window.braze?.logCustomEvent(BRAZE_EVENT_DONATION_FINISH);
      ensureBrazeDataIsImmediatelyLogged();
    }
  } catch (error) {
    console.error(
      `Error logging ${BRAZE_EVENT_DONATION_FINISH} Braze event:`,
      error.message,
    );
  }
};

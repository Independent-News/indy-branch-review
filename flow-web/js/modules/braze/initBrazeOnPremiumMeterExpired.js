import { BRAZE_EVENT_PREMIUM_METER_EXPIRED } from './constants';
import { initBrazeAndLogEvent } from './initBrazeAndLogEvent';

export const initBrazeOnPremiumMeterExpired = () => {
  initBrazeAndLogEvent(BRAZE_EVENT_PREMIUM_METER_EXPIRED, {});
};

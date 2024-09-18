import { BRAZE_EVENT_AUTORENEWAL_OFF } from './constants';
import { initBrazeAndLogEvent } from './initBrazeAndLogEvent';

export const initBrazeOnSubscriptionAutorenewOff = (payload) =>
  initBrazeAndLogEvent(BRAZE_EVENT_AUTORENEWAL_OFF, payload);

import { BRAZE_EVENT_AUTORENEWAL_ON } from './constants';
import { initBrazeAndLogEvent } from './initBrazeAndLogEvent';

export const initBrazeOnSubscriptionAutorenewOn = (payload) =>
  initBrazeAndLogEvent(BRAZE_EVENT_AUTORENEWAL_ON, payload);

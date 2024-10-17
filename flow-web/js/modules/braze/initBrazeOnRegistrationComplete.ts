import { BRAZE_EVENT_REGISTRATION_COMPLETE } from './constants';
import { initBrazeAndLogEvent } from './initBrazeAndLogEvent';

export const initBrazeOnRegistrationComplete = () =>
  initBrazeAndLogEvent(BRAZE_EVENT_REGISTRATION_COMPLETE, {});

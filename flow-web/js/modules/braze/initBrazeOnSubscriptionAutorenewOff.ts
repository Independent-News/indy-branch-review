import { BRAZE_EVENT_AUTORENEWAL_OFF } from './constants';
import { initBrazeAndLogEvent } from './initBrazeAndLogEvent';

import type { CustomEventProperties } from '#types/braze';

export const initBrazeOnSubscriptionAutorenewOff = (
  payload: CustomEventProperties,
) => initBrazeAndLogEvent(BRAZE_EVENT_AUTORENEWAL_OFF, payload);

import { BRAZE_EVENT_AUTORENEWAL_ON } from './constants';
import { initBrazeAndLogEvent } from './initBrazeAndLogEvent';

import type { CustomEventProperties } from '#types/braze';

export const initBrazeOnSubscriptionAutorenewOn = (
  payload: CustomEventProperties,
) => initBrazeAndLogEvent(BRAZE_EVENT_AUTORENEWAL_ON, payload);

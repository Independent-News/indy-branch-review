import { EVENT_ANALYTICS_TRIGGER } from '#app/constants/customEvents';

import { prettyLog } from './prettyLog';

const createCustomEvent = (name, eventData = {}) => {
  prettyLog(`CustomEvent: ${name}`, eventData);
  return new CustomEvent(EVENT_ANALYTICS_TRIGGER, {
    detail: { data: { ...eventData }, eventName: name },
  });
};

const dispatch = (event) => {
  document.body.dispatchEvent(event);
};

export const dispatchCustomEvent = (eventName, data) =>
  dispatch(createCustomEvent(eventName, data));

import { EVENT_ADOBE_READY } from '#app/constants/customEvents';

import { run as eventBindings } from '../event-bindings';

import adobeEvents from './custom-event-handlers';
import adobeInit from './init';
import adobePageEvtTriggers from './page-load-event';

export default () => {
  adobeInit();
  adobeEvents();
  eventBindings();
  adobePageEvtTriggers(document.location.pathname);
  document.body.dispatchEvent(new CustomEvent(EVENT_ADOBE_READY));
};

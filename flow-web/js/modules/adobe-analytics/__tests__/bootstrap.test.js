/**
 * @jest-environment jsdom
 */

import { EVENT_ADOBE_READY } from '#app/constants/customEvents';

import { run as eventBindings } from '../../event-bindings';
import bootstrap from '../bootstrap';
import adobeEvents from '../custom-event-handlers';
import adobeInit from '../init';
import adobePageEvtTriggers from '../page-load-event';

jest.mock('../../event-bindings');
jest.mock('../custom-event-handlers');
jest.mock('../init');
jest.mock('../page-load-event');

describe('Adobe Analytics Bootstrap', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('will instantiate all required modules and emit Adobe loaded custom event once complete', () => {
    jest.spyOn(document.body, 'dispatchEvent');
    bootstrap();
    expect(adobeInit).toHaveBeenCalledTimes(1);
    expect(adobeEvents).toHaveBeenCalledTimes(1);
    expect(eventBindings).toHaveBeenCalledTimes(1);
    expect(adobePageEvtTriggers).toHaveBeenCalledTimes(1);
    expect(document.body.dispatchEvent).toHaveBeenCalledTimes(1);
    expect(document.body.dispatchEvent).toHaveBeenCalledWith(
      new CustomEvent(EVENT_ADOBE_READY),
    );
  });
});

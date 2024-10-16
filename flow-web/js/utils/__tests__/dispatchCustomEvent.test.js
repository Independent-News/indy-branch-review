/**
 * @jest-environment jsdom
 */
import { EVENT_ANALYTICS_TRIGGER } from '#app/constants/customEvents';

import { dispatchCustomEvent } from '../dispatchCustomEvent';

describe('dispatchCustomEvent', () => {
  const TEST_EVENT = 'test_event';
  let testListener;

  beforeEach(() => {
    testListener = jest.fn();
    document.body.addEventListener(EVENT_ANALYTICS_TRIGGER, (event) => {
      event.detail.eventName === TEST_EVENT && testListener();
    });
  });

  afterEach(() => {
    document.body.removeEventListener(TEST_EVENT, testListener);
  });

  it('should fire event on document body', () => {
    dispatchCustomEvent(TEST_EVENT, {});

    expect(testListener).toHaveBeenCalled();
  });
});

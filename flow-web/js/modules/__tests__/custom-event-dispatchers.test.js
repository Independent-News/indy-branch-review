/**
 * @jest-environment jsdom
 */

import { EVENT_ANALYTICS_TRIGGER } from '#app/constants/customEvents';

import * as customEventDispatchers from '../../utils/dispatchCustomEvent';
import { dispatchSupportNowEncoreClick } from '../custom-event-dispatchers';

describe('custom-event-dispatchers', () => {
  const mockData = { foo: 'bar' };
  const assertAnalyticsEventCallDetails = (expectedEventDetails = {}) => {
    document.body.addEventListener(
      EVENT_ANALYTICS_TRIGGER,
      ({ detail: eventDetails }) =>
        expect(eventDetails).toEqual(expectedEventDetails),
    );
  };

  beforeEach(() => {
    jest.spyOn(customEventDispatchers, 'dispatchCustomEvent');
    jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('dispatchSupportNowEncoreClick()', () => {
    it('will correctly dispatch the "support_now_encore_click" event with any data provided', () => {
      assertAnalyticsEventCallDetails({
        data: mockData,
        eventName: 'support_now_encore_click',
      });
      dispatchSupportNowEncoreClick(mockData);
      expect(customEventDispatchers.dispatchCustomEvent).toHaveBeenCalledTimes(
        1,
      );
      expect(customEventDispatchers.dispatchCustomEvent).toHaveBeenCalledWith(
        'support_now_encore_click',
        mockData,
      );
    });
  });
});

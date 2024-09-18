/* globals braze */

import { BRAZE_EVENT_PREMIUM_METER_EXPIRED } from '../constants';
import * as thatModule from '../initBrazeOnPremiumMeterExpired';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');

describe('initBrazeOnPremiumMeterExpired()', () => {
  beforeAll(() => {
    global.braze = {
      logCustomEvent: jest.fn(),
    };
    jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(thatModule, 'initBrazeOnPremiumMeterExpired');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete global.braze;
    jest.restoreAllMocks();
  });

  it('will correctly init Braze with config and submit premium meter expired event', async () => {
    initBrazeSDK.mockResolvedValueOnce(true);
    await thatModule.initBrazeOnPremiumMeterExpired();
    expect(initBrazeSDK).toHaveBeenCalledTimes(1);
    expect(braze.logCustomEvent).toHaveBeenCalledTimes(1);
    expect(braze.logCustomEvent).toHaveBeenCalledWith(
      BRAZE_EVENT_PREMIUM_METER_EXPIRED,
      {},
    );
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will recover and print error message to console if fails to log custom event via Braze', async () => {
    const mockErrorMessage = 'test error';
    initBrazeSDK.mockImplementationOnce(() => {
      throw new Error(mockErrorMessage);
    });
    await thatModule.initBrazeOnPremiumMeterExpired();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      'Error logging premium_meter_expired Braze event:',
      mockErrorMessage,
    );
    expect(thatModule.initBrazeOnPremiumMeterExpired).not.toThrow();
  });
});

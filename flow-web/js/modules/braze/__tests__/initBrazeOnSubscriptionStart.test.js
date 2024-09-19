/* globals braze */

import * as thatModule from '../initBrazeOnSubscriptionStart';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');

describe('initBrazeOnSubscriptionStart()', () => {
  beforeAll(() => {
    global.braze = {
      logCustomEvent: jest.fn(),
    };
    jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(thatModule, 'initBrazeOnSubscriptionStart');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete global.braze;
    jest.restoreAllMocks();
  });

  it('will correctly init Braze with config and submit subscription start event', async () => {
    initBrazeSDK.mockResolvedValueOnce(true);
    await thatModule.initBrazeOnSubscriptionStart();
    expect(initBrazeSDK).toHaveBeenCalledTimes(1);
    expect(braze.logCustomEvent).toHaveBeenCalledTimes(1);
    expect(braze.logCustomEvent).toHaveBeenCalledWith('subscription_start');
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will recover and print error message to console if fails to log custom event via Braze', async () => {
    const mockErrorMessage = 'test error';
    await initBrazeSDK.mockImplementationOnce(() => {
      throw new Error(mockErrorMessage);
    });
    await thatModule.initBrazeOnSubscriptionStart();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      'Error logging subscription_start Braze event:',
      mockErrorMessage,
    );
    expect(thatModule.initBrazeOnSubscriptionStart).not.toThrow();
  });
});

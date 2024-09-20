/* globals braze */

import * as thatModule from '../initBrazeAndLogEvent';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');

describe('initBrazeAndLogEvent()', () => {
  beforeAll(() => {
    global.braze = {
      logCustomEvent: jest.fn(),
    };
    jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(thatModule, 'initBrazeAndLogEvent');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete global.braze;
    jest.restoreAllMocks();
  });

  const mockPayload = { type: 'auto_renew', value: true };

  it('will correctly init Braze with config and submit an event', async () => {
    initBrazeSDK.mockResolvedValueOnce(true);
    await thatModule.initBrazeAndLogEvent('custom_braze_event', mockPayload);
    expect(initBrazeSDK).toHaveBeenCalledTimes(1);
    expect(braze.logCustomEvent).toHaveBeenCalledTimes(1);
    expect(braze.logCustomEvent).toHaveBeenCalledWith(
      'custom_braze_event',
      mockPayload,
    );
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will recover and print error message to console if fails to log custom event via Braze', async () => {
    const mockErrorMessage = 'test error';
    await initBrazeSDK.mockImplementationOnce(() => {
      throw new Error(mockErrorMessage);
    });
    await thatModule.initBrazeAndLogEvent('custom_braze_event');
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      'Error logging custom_braze_event Braze event:',
      mockErrorMessage,
    );
    expect(thatModule.initBrazeAndLogEvent).not.toThrow();
  });
});

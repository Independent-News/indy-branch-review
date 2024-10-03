/**
 * @jest-environment jsdom
 */

import initBrazeInAppMessage from '../initBrazeInAppMessage';
import initBrazeInAppMessageWithDelay from '../initBrazeInAppMessageWithDelay';

jest.mock('../initBrazeInAppMessage');
jest.mock('#app/public/js/modules/util', () => ({
  ...jest.requireActual('#app/public/js/modules/util'),
  setTimeoutAsync: jest.fn(),
}));

describe('initBrazeInAppMessageWithDelay()', () => {
  beforeEach(() => {
    global.JSGlobals = {};
    jest.useFakeTimers();
    jest.spyOn(window, 'setTimeout');
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
    delete global.JSGlobals;
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('will init Braze SDK after 5 seconds if no custom delay is defined in js globals', async () => {
    const fiveSeconds = 5000;
    await initBrazeInAppMessageWithDelay();
    expect(window.setTimeout).toHaveBeenCalledTimes(1);
    expect(window.setTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      fiveSeconds,
    );
    jest.advanceTimersByTime(fiveSeconds - 1);
    expect(initBrazeInAppMessage).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(initBrazeInAppMessage).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(fiveSeconds);
    expect(initBrazeInAppMessage).toHaveBeenCalledTimes(1);
  });

  it('will init Braze SDK after custom delay amount if defined', async () => {
    const mockCustomDelay = 10000;
    global.JSGlobals.braze = { brazeSdkDelayAmount: mockCustomDelay };
    await initBrazeInAppMessageWithDelay();
    jest.advanceTimersByTime(mockCustomDelay);
    expect(initBrazeInAppMessage).toHaveBeenCalledTimes(1);
  });
});

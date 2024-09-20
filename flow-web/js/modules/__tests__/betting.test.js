/**
 * @jest-environment jsdom
 */

import bettingAnalyticsTag from '../betting';
import { loadJS } from '../util';

jest.mock('../util', () => ({
  loadJS: jest.fn(),
}));

describe('betting analytics tag', () => {
  const mockBettingAnalyticsUrl = 'mock-betting-analytics-url';

  beforeEach(() => {
    jest.useFakeTimers();

    global.JSGlobals = {
      betting: {
        analytics: {
          url: mockBettingAnalyticsUrl,
        },
      },
    };
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
  });

  afterAll(() => {
    delete global.JSGlobals;
  });

  it('should not load the script if consent is false', () => {
    bettingAnalyticsTag(false);
    jest.advanceTimersByTime(5000);

    expect(loadJS).not.toHaveBeenCalled();
  });

  it('should not load the script and log an error if the url does not exist JSGlobals', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    delete global.JSGlobals.betting;

    bettingAnalyticsTag(true);
    jest.advanceTimersByTime(5000);

    expect(loadJS).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy.mock.calls[0][0]).toEqual(
      expect.stringContaining('No betting analytics tag URL'),
    );

    consoleSpy.mockRestore();
  });

  it('should load the script when consent has been given and the url exists in JSGlobals', () => {
    bettingAnalyticsTag(true);
    jest.advanceTimersByTime(5000);

    expect(loadJS).toHaveBeenCalledTimes(1);
    expect(loadJS).toHaveBeenCalledWith(mockBettingAnalyticsUrl);
  });
});

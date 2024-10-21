/**
 * @jest-environment jsdom
 */

import bettingAnalyticsTag from '../betting';
import { loadJS } from '../util';

import type JSGlobals from '#types/JSGlobals';

jest.mock('../util', () => ({
  loadJS: jest.fn(),
}));

describe('betting analytics tag', () => {
  const mockBettingAnalyticsUrl = 'mock-betting-analytics-url';

  beforeAll(() => {
    window.JSGlobals = {} as unknown as JSGlobals;
  });

  beforeEach(() => {
    jest.useFakeTimers();

    window.JSGlobals = window.JSGlobals || ({} as JSGlobals);
    window.JSGlobals.betting = {
      analytics: {
        url: mockBettingAnalyticsUrl,
      },
    };
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
  });

  afterAll(() => {
    window.JSGlobals = undefined as unknown as JSGlobals;
  });

  it('should not load the script if consent is false', () => {
    bettingAnalyticsTag(false);
    jest.advanceTimersByTime(5000);

    expect(loadJS).not.toHaveBeenCalled();
  });

  it('should not load the script and log an error if the url does not exist in JSGlobals', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    window.JSGlobals = undefined as unknown as JSGlobals;

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

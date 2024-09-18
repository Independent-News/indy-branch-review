/**
 * @jest-environment jsdom
 */

import { isFeatureFlagEnabled } from '#app/public/js/utils/featureFlag';

import initFullstory from '../fullstory';
import { loadJS } from '../util';

jest.mock('#app/public/js/utils/featureFlag');
jest.mock('../util');

describe('fullstory init', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // send false
  it("won't load without consents", async () => {
    isFeatureFlagEnabled.mockReturnValue(true);
    initFullstory(false);
    expect(loadJS).not.toHaveBeenCalled();
  });

  // send true
  it('will load with consents', async () => {
    jest.useFakeTimers();
    isFeatureFlagEnabled.mockReturnValue(true);
    initFullstory(true);
    jest.advanceTimersByTime(3000);
    expect(loadJS).toHaveBeenCalledTimes(1);
    expect(loadJS).toHaveBeenCalledWith('/js/fullstory.raw.js');
    jest.useRealTimers();
  });

  // send true && wait for 3 secs
  it('will not load anything if feature flag is disabled', async () => {
    isFeatureFlagEnabled.mockReturnValue(false);
    initFullstory();
    expect(loadJS).not.toHaveBeenCalled();
  });
});

/**
 * @jest-environment jsdom
 */

import { EVENT_ADOBE_READY } from '#app/constants/customEvents';

import trackWhenAdobeHasLoaded from '../trackWhenAdobeHasLoaded';

describe('trackWhenAdobeHasLoaded()', () => {
  const mockTrackingCallback = jest.fn();

  beforeEach(() => {
    jest.spyOn(document.body, 'addEventListener');
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete window.s_object;
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call provided trackingCallback if Adobe has already loaded and not attempt to setup adobe load event listener', () => {
    window.s_object = {};
    trackWhenAdobeHasLoaded(mockTrackingCallback);
    expect(mockTrackingCallback).toHaveBeenCalledTimes(1);
    expect(document.body.addEventListener).not.toHaveBeenCalled();
  });

  it('should setup Adobe load event listener if Adobe has not already loaded and track on event emission', () => {
    window.s_object = undefined;
    trackWhenAdobeHasLoaded(mockTrackingCallback);
    expect(mockTrackingCallback).not.toHaveBeenCalled();
    expect(document.body.addEventListener).toHaveBeenCalledTimes(1);
    expect(document.body.addEventListener).toHaveBeenCalledWith(
      EVENT_ADOBE_READY,
      mockTrackingCallback,
    );
    document.body.dispatchEvent(new Event(EVENT_ADOBE_READY));
    expect(mockTrackingCallback).toHaveBeenCalledTimes(1);
  });
});

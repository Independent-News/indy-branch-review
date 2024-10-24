/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';
import { render } from '@testing-library/react';

import * as breakPoints from '#app/constants/breakpoints';
import { CLASS_STICKY } from '#app/constants/classNames';
import { ID_TOP_BANNER, ID_TOP_BANNER_WRAPPER } from '#app/constants/ids';

import { getWindowWidth } from '#app/public/js/modules/util';

import { onRendered, onLoaded, STICKY_TIMEOUT } from '../stickyTopBanner';

jest.mock('#app/public/js/modules/util');

const getSlotElementId = jest.fn(() => ID_TOP_BANNER);
const mockEvent = {
  slot: { getSlotElementId },
  isEmpty: false,
};

function setupPreLoaded(opts = {}) {
  const {
    wrapperId = ID_TOP_BANNER_WRAPPER,
    bannerId = ID_TOP_BANNER,
    isVideo = false,
    isSticky = false,
  } = opts;
  const { container } = render(
    <div id={wrapperId} className={isSticky ? CLASS_STICKY : null}>
      <div id={bannerId} data-is-video={isVideo}>
        mock ad slot
      </div>
    </div>,
  );

  const el = container.querySelector(`#${wrapperId}`);

  return el;
}

function setupLoaded(opts = {}) {
  return setupPreLoaded({ isSticky: true, ...opts });
}

describe('stickyTopBanner', () => {
  describe('onRendered()', () => {
    afterEach(() => {
      jest.resetModules();
      jest.clearAllMocks();
    });

    it('should not add a sticky class when the slot id does not match the top banner id', () => {
      const el = setupPreLoaded();
      const getSlotElementId = jest.fn(() => 'not_top_banner');

      onRendered({ ...mockEvent, slot: { getSlotElementId } });

      expect(getSlotElementId).toHaveBeenCalledTimes(1);
      expect(el).not.toHaveClass(CLASS_STICKY);
    });

    it('should not add a sticky class when the slot is empty', () => {
      const el = setupPreLoaded();

      onRendered({ ...mockEvent, isEmpty: true });

      expect(el).not.toHaveClass(CLASS_STICKY);
    });

    it('should not add a sticky class when the ad has already run once before', () => {
      /** this is ugly */
      jest.isolateModules(() => {
        const el = setupPreLoaded();
        const thatModule = require('../stickyTopBanner');

        // First run
        thatModule.onRendered(mockEvent);

        expect(el).toHaveClass(CLASS_STICKY);

        // Reset
        el.classList.remove(CLASS_STICKY);

        expect(el).not.toHaveClass(CLASS_STICKY);

        // Second run
        thatModule.onRendered(mockEvent);

        expect(el).not.toHaveClass(CLASS_STICKY);
      });
    });

    it('should not add a sticky class when the ad is a video', () => {
      const el = setupPreLoaded({ isVideo: true });

      onRendered(mockEvent);

      expect(el).not.toHaveClass(CLASS_STICKY);
    });

    it('should not add a sticky class when there is no topBannerWrapper element', () => {
      const el = setupPreLoaded({ wrapperId: 'foo' });

      onRendered(mockEvent);

      expect(el).not.toHaveClass(CLASS_STICKY);
    });

    it('should not add a sticky class when the device is mobile sizes', () => {
      const el = setupPreLoaded();

      getWindowWidth.mockReturnValueOnce(breakPoints.tablet - 1);

      onRendered(mockEvent);

      expect(el).not.toHaveClass(CLASS_STICKY);
    });

    it('should add a sticky class under the right conditions', () => {
      jest.resetModules();

      const el = setupPreLoaded();

      onRendered(mockEvent);

      expect(el).toHaveClass(CLASS_STICKY);
    });
  });

  describe('onLoaded', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    beforeEach(() => {
      jest.clearAllMocks();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should remove the sticky class after a timeout', () => {
      const el = setupLoaded();

      expect(el).toHaveClass(CLASS_STICKY);

      onLoaded(mockEvent);

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(
        expect.any(Function),
        STICKY_TIMEOUT,
      );

      jest.runAllTimers();

      expect(el).not.toHaveClass(CLASS_STICKY);
    });

    it('should gracefully handle a non-matching ID', () => {
      const el = setupLoaded();
      const getSlotElementId = jest.fn(() => 'not_top_banner');

      onRendered({ ...mockEvent, slot: { getSlotElementId } });

      expect(getSlotElementId).toHaveBeenCalledTimes(1);
      expect(setTimeout).not.toHaveBeenCalled();
      expect(el).toHaveClass(CLASS_STICKY);
    });

    it('should gracefully handle a missing wrapper', () => {
      const el = setupLoaded({ isSticky: true, wrapperId: 'not_top_banner' });

      onLoaded(mockEvent);

      expect(setTimeout).not.toHaveBeenCalled();
      expect(el).toHaveClass(CLASS_STICKY);
    });
  });
});

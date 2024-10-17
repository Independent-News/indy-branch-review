import * as breakPoints from '#app/constants/breakpoints';
import { CLASS_STICKY } from '#app/constants/classNames';
import { ID_TOP_BANNER, ID_TOP_BANNER_WRAPPER } from '#app/constants/ids';

import { getWindowWidth } from '#app/public/js/modules/util';

export const STICKY_TIMEOUT = 3000;

let hasRunOnce = false;

export const onRendered = (evt) => {
  const { slot, isEmpty } = evt;
  const slotId = slot.getSlotElementId();
  const topBannerWrapper = document.getElementById(ID_TOP_BANNER_WRAPPER);
  const topBanner = document.getElementById(ID_TOP_BANNER);
  const isVideo = !!(topBanner?.dataset.isVideo === 'true');
  const isMobile = getWindowWidth() < breakPoints.tablet;

  if (
    slotId !== ID_TOP_BANNER ||
    isEmpty ||
    hasRunOnce ||
    isVideo ||
    isMobile ||
    !topBanner ||
    !topBannerWrapper
  ) {
    return false;
  }

  hasRunOnce = true;
  topBannerWrapper.classList.add(CLASS_STICKY);

  return true;
};

export const onLoaded = (evt) => {
  const { slot } = evt;
  const slotId = slot.getSlotElementId();
  const topBannerWrapper = document.getElementById(ID_TOP_BANNER_WRAPPER);

  if (slotId !== ID_TOP_BANNER || !topBannerWrapper) {
    return;
  }

  setTimeout(() => {
    topBannerWrapper.classList.remove(CLASS_STICKY);
  }, STICKY_TIMEOUT);
};

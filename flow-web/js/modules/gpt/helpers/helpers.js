import { getWindowWidth } from '../../util';

import * as thisModule from './helpers';

window.googletag = window.googletag || { cmd: [] };

export const createAd = (id, size, adUnitPath) => {
  const conditionalAdElem = document.createElement('div');
  conditionalAdElem.id = id;
  conditionalAdElem.setAttribute('data-mpu', 'true');
  conditionalAdElem.setAttribute('data-size', size);
  conditionalAdElem.setAttribute('data-ad-unit-path', adUnitPath);
  conditionalAdElem.className = 'extraAd';
  return conditionalAdElem;
};

export const isHidden = (el) =>
  !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);

export const getSizeFromAttributes = (el, width, breakPoints) => {
  if (width >= breakPoints.laptop && el.dataset.desktopSizes) {
    return el.dataset.desktopSizes;
  }

  if (width >= breakPoints.tablet && el.dataset.tabletSizes) {
    return el.dataset.tabletSizes;
  }

  if (width < breakPoints.tablet && el.dataset.mobileSizes) {
    return el.dataset.mobileSizes;
  }

  if (el.dataset.sizes) {
    return el.dataset.sizes;
  }
};

export const findMPUsForRefreshCheck = (elem = document) =>
  elem.querySelectorAll('[data-mpu][data-refresh-check="true"][id]');

export const findUninitialisedMPUs = (elem = document) =>
  elem.querySelectorAll('[data-mpu]:not([data-initialised="true"])');

export const findUninitialisedVisibleMPUs = (elem = document) =>
  [...thisModule.findUninitialisedMPUs(elem)].filter(
    (mpu) => !thisModule.isHidden(mpu),
  );

export const getConfig = (mpuName, pageWidth, adTypes) => {
  const mpuSizeConfig = adTypes[mpuName];

  if (mpuSizeConfig) {
    const config = [...mpuSizeConfig]
      .reverse()
      .find((item) => item.from <= pageWidth);

    if (config) {
      return config;
    }
  }
};

export const getSizeFromConfig = (mpuName, pageWidth, adTypes) => {
  const config = getConfig(mpuName, pageWidth, adTypes);
  return config ? config.supportedSizes : null;
};

export const getSizeConfigAtWidth = (el, width, adTypes, breakPoints) => {
  if (el.dataset.sizeKey) {
    const sizeArr = getSizeFromConfig(el.dataset.sizeKey, width, adTypes);
    sizeArr ||
      console.warn(`Incorrect Ad size detected: ${el.dataset?.tileName}`);
    return sizeArr
      ? {
          str: sizeArr.map((size) => size.join('x')).join('|'),
          arr: sizeArr,
        }
      : null;
  }

  const sizeString = getSizeFromAttributes(el, width, breakPoints) || '300x250';

  return {
    str: sizeString,
    arr: sizeString
      .split('|')
      .map((size) => size.split('x').map((dimension) => Number(dimension))),
  };
};

export const getAdConfigAtWidth = (el, width, adTypes, breakPoints) => {
  return {
    supportedSizes: getSizeConfigAtWidth(el, width, adTypes, breakPoints),
    refreshMS: el.dataset.refreshMs,
  };
};

export const createSlot = (adUnitPath, size, id, targeting = {}) =>
  window.googletag
    .defineSlot(adUnitPath, size, id)
    .setCollapseEmptyDiv(true)
    .updateTargetingFromMap(targeting)
    .addService(window.googletag.pubads());

export const initialiseAd = (
  el,
  { registerAsCurrentAd, adConfig: { types }, breakPoints },
) => {
  const { supportedSizes, refreshMS } = getAdConfigAtWidth(
    el,
    getWindowWidth(),
    types,
    breakPoints,
  );

  const slot = supportedSizes?.arr?.length
    ? createSlot(el.dataset.adUnitPath, supportedSizes.arr, el.id, {
        tile: el.id,
      })
    : null;

  if (slot) {
    registerAsCurrentAd(el, slot, supportedSizes.str, refreshMS);
  }

  return !!slot;
};

export const destroyConditionalAds = (slotIds, destroyAdFn) => {
  [...document.getElementsByClassName('extraAd')]?.forEach((el) => {
    const idParts = el.id.split(el.dataset.tileNameExtra);
    const originatingSlotId = idParts
      .slice(0, -1)
      .join(el.dataset.tileNameExtra);

    if (!slotIds || slotIds.includes(originatingSlotId)) {
      destroyAdFn(el);
      el.remove();
    }
  });
};

export const destroyConditionalAdsOnRefresh = (destroyAd) => {
  window.googletag.cmd.push(() => {
    const originalRefresh = window.googletag.pubads().refresh;
    window.googletag.pubads().refresh = (slots, ...otherArgs) => {
      destroyConditionalAds(
        slots?.map((slot) => slot?.getSlotElementId()).filter((x) => !!x),
        destroyAd,
      );
      originalRefresh(slots, ...otherArgs);
    };
  });
};

export const getAdRefreshIndex = (el) =>
  Number(document.getElementById(`${el.id}_adIndex`).innerHTML);

export const createAdUnitPathFromOther = (adUnitPath, adId) =>
  [...adUnitPath.split('/').slice(0, -1), adId].join('/');

export const loadOutOfPageAd = () => {
  const outOfPageAdId = 'outofpageslot';
  const existingAd = document.querySelector('[data-mpu]');

  // only load if there are other ads on page
  if (existingAd) {
    window.googletag
      .defineOutOfPageSlot(
        createAdUnitPathFromOther(existingAd.dataset.adUnitPath, outOfPageAdId),
        outOfPageAdId,
      )
      .addService(window.googletag.pubads());
  }
};

export const refreshDetectedAdMetaData = (detectedAds) => {
  const duplicateLineItemCounts = Object.values(detectedAds).reduce(
    (acc, item) => ({
      ...acc,
      [item.lineItemId]: (acc[item.lineItemId] || 0) + 1,
    }),
    {},
  );

  Object.entries(detectedAds).forEach(([id, details]) => {
    detectedAds[id].lineItemCount = duplicateLineItemCounts[details.lineItemId];
  });
};

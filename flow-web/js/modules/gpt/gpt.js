/* globals googletag */
import { log } from '../log';
import { getWindowWidth } from '../util';

import {
  createAd,
  findMPUsForRefreshCheck,
  findUninitialisedVisibleMPUs,
  getConfig,
  getAdConfigAtWidth,
  destroyConditionalAdsOnRefresh,
  getAdRefreshIndex,
  createAdUnitPathFromOther,
  loadOutOfPageAd,
  initialiseAd,
  refreshDetectedAdMetaData,
} from './helpers/helpers';

window.googletag = window.googletag || { cmd: [] };

const EMPTY_SLOT_REFRESH_ATTEMPT_TARGETTING_KEY = 'empty_refresh_attempt';

const defaultAdLoadingBehaviourSettings = {
  renderMarginPercent: 10,
  mobileScaling: 0,
};

const filterUndefinedFromObject = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) => typeof value !== 'undefined'),
  );

export default ({
  adConfig,
  breakPoints = { tablet: 768, laptop: 1000 },
  adLoadingBehaviourSettings = {},
  beforeSlotsDisplay = () => {},
  beforeSlotRefresh = () => {},
  enableOutOfPageAd,
  ...props
}) => {
  const detectedAds = {};
  const currentAds = {};
  const refreshIndexes = {};
  const adsToDisplay = [];
  let isFirstCheck = true;
  let checkAds;

  const { renderMarginPercent, mobileScaling } = {
    ...defaultAdLoadingBehaviourSettings,
    ...filterUndefinedFromObject(adLoadingBehaviourSettings),
  };

  const registerAsCurrentAd = (el, slot, sizes, refreshMS) => {
    currentAds[el.id] = { el, slot, sizes, refreshMS, refreshAttempts: 0 };
  };

  const displayAds = async () => {
    const ads = [...adsToDisplay];
    adsToDisplay.length = 0;

    if (ads.length) {
      await beforeSlotsDisplay({
        slotElems: ads,
        slots: ads.map((ad) => currentAds[ad.id]?.slot).filter(Boolean),
        isFirstLoad: isFirstCheck,
      });

      ads.forEach((el) => {
        googletag.cmd.push(() => {
          googletag.display(el.id);
        });
      });
    }

    setTimeout(checkAds, 100);
  };

  const destroyAd = (el) => {
    const { id } = el;
    const currentAd = currentAds[id];

    if (currentAd) {
      if (currentAd.slot) {
        googletag.destroySlots([currentAd.slot]);
      }

      if (currentAd.viewed) {
        clearTimeout(currentAd.refreshTimeout);
      }
    }

    el.setAttribute('data-initialised', 'false');
    el.removeAttribute('id');
    delete currentAds[id];
    delete detectedAds[id];

    refreshDetectedAdMetaData(detectedAds);
  };

  destroyConditionalAdsOnRefresh(destroyAd);

  const checkForConditionalAd = (evt) => {
    const slotId = evt.slot.getSlotElementId();
    const slotElem = document.getElementById(slotId);

    if (slotElem?.dataset.sizeKey) {
      const { conditionalAd } = getConfig(
        slotElem.dataset.sizeKey,
        getWindowWidth(),
        adConfig.types,
      );

      if (conditionalAd && conditionalAd.if.join('x') === evt.size?.join('x')) {
        const mpuId = `${slotId}${conditionalAd.tileNameExtra}`;

        const conditionalAdElem = createAd(
          mpuId,
          conditionalAd.then.join('x'),
          createAdUnitPathFromOther(slotElem.dataset.adUnitPath, mpuId),
        );

        conditionalAdElem.dataset.tileNameExtra = conditionalAd.tileNameExtra;

        slotElem.parentElement.appendChild(conditionalAdElem);
      }
    }
  };

  const emptySlotRefresh = async (evt) => {
    const maxAttempts = adConfig.maxEmptySlotRefreshAttempts ?? 2;

    if (maxAttempts === 0) {
      return;
    }

    const slotId = evt.slot.getSlotElementId();
    const currentAdRef = currentAds[slotId];

    if (evt.isEmpty) {
      // if refresh has been disabled for this add slot it should not try to
      // reload an empty slot either
      if (!currentAdRef.refreshMS) {
        return;
      }

      if (currentAdRef.refreshAttempts >= maxAttempts) {
        console.warn(
          `Could not find ad to fill '${slotId}' after ${maxAttempts} attempts`,
        );
        return;
      }

      currentAdRef.refreshAttempts++;

      evt.slot.setTargeting(
        EMPTY_SLOT_REFRESH_ATTEMPT_TARGETTING_KEY,
        currentAdRef.refreshAttempts,
      );

      await beforeSlotRefresh({
        slotElem: currentAdRef.el,
        slot: currentAdRef.slot,
      });

      window.googletag.pubads().refresh([currentAdRef.slot]);
    } else {
      currentAdRef.refreshAttempts = 0;
      evt.slot.clearTargeting(EMPTY_SLOT_REFRESH_ATTEMPT_TARGETTING_KEY);
    }
  };

  // we assume any ad with a lineitemid that appears
  // more than once on the page to be part of a
  // sponsorship deal
  const doesSlotIdBelongToSponsorshipDeal = (id) =>
    detectedAds[id].lineItemCount > 1;

  const isForceRefreshAdvertiser = (slotId, advertisersConfig) =>
    detectedAds[slotId]
      ? !!advertisersConfig[detectedAds[slotId].advertiserId]?.forceRefresh
      : false;

  const isRefreshDisabledAdvertiser = (slotId, advertisersConfig) =>
    detectedAds[slotId]
      ? !!advertisersConfig[detectedAds[slotId].advertiserId]?.disableRefresh
      : false;

  const isRefreshDisabledCampaign = (slotId, campaignConfig) =>
    detectedAds[slotId]
      ? !!campaignConfig[detectedAds[slotId].campaignId]?.disableRefresh
      : false;

  const registerDetectedAd = (slot) => {
    const slotId = slot.getSlotElementId();

    detectedAds[slotId] = {
      ...slot.getResponseInformation(),
      lineItemCount: 1,
    };

    refreshDetectedAdMetaData(detectedAds);
  };

  const gpt = ({
    consent,
    slotRenderedCallback = () => {},
    slotLoadedCallback = () => {},
    setTargeting = () => {},
    firstAdLoaded = () => {},
    allFirstScreenAdsLoaded = () => {},
  }) => {
    log('consent inside GPT', consent);

    googletag.cmd.push(() => {
      setTargeting();

      googletag.pubads().setCentering(true);
      if (enableOutOfPageAd) {
        loadOutOfPageAd();
      }

      googletag.pubads().enableSingleRequest();

      googletag.pubads().enableLazyLoad({
        /*
         * fetchMarginPercent must equal -1: this means all ads are fetched immediately
         * we have to fetch all ads immediately so we can determine if the line item ids are shared
         * a shared line item id indicates that the adverts are "sponsored" or "master / companion"
         * these ads must not refresh
         */
        fetchMarginPercent: -1,
        renderMarginPercent,
        mobileScaling,
      });

      googletag.enableServices();

      let lastPageWidth = getWindowWidth();
      let firstLoaded = false;
      let loadedAdsCounter = 0;
      let allFirstScreenLoaded = false;
      const firstScreenAds = [];

      checkAds = (firstCheck = false) => {
        const pageWidth = getWindowWidth();
        isFirstCheck = firstCheck;

        if (lastPageWidth !== pageWidth) {
          lastPageWidth = pageWidth;
          // check ads to see if current size has changed
          Object.keys(currentAds).forEach((id) => {
            const el = currentAds[id].el;
            const { supportedSizes } = getAdConfigAtWidth(
              el,
              pageWidth,
              adConfig.types,
              breakPoints,
            );

            // destroy ad if size has changed & set initialised to false,
            // it will then be initialised as normal below
            if (supportedSizes?.str !== currentAds[id].sizes) {
              destroyAd(el);
            }
          });
        }

        // check ads to see if they require a refresh based on refresh index
        findMPUsForRefreshCheck().forEach((el) => {
          const newIndex = getAdRefreshIndex(el);

          if (
            typeof refreshIndexes[el.id] !== 'undefined' &&
            newIndex !== refreshIndexes[el.id]
          ) {
            refreshIndexes[el.id] = newIndex;
            destroyAd(el);
          }
        });

        findUninitialisedVisibleMPUs().forEach((el) => {
          // mark as initialised so not picked up again
          el.setAttribute('data-initialised', 'true');

          if (!el.id) {
            el.setAttribute('id', el.dataset.tileName);
          }

          // only add to display list if the ad init'ed
          if (
            initialiseAd(el, { registerAsCurrentAd, adConfig, breakPoints })
          ) {
            adsToDisplay.push(el);
          }

          if (el.dataset.refreshCheck === 'true') {
            refreshIndexes[el.id] = getAdRefreshIndex(el);
          }
        });

        if (adsToDisplay.length === 0 && firstCheck && !allFirstScreenLoaded) {
          allFirstScreenLoaded = true;
          allFirstScreenAdsLoaded();
        }

        displayAds();
      };

      checkAds(true);

      // watch our ads render & check for conditional extra ads to be loaded
      googletag.pubads().addEventListener('slotRenderEnded', (evt) => {
        checkForConditionalAd(evt);
        slotRenderedCallback(evt);
        emptySlotRefresh(evt);
      });

      googletag.pubads().addEventListener('slotResponseReceived', (evt) => {
        registerDetectedAd(evt.slot);
      });

      googletag.pubads().addEventListener('slotOnload', (...args) => {
        slotLoadedCallback(...args);
        if (!firstLoaded) {
          firstLoaded = true;
          firstAdLoaded();
        }

        // determine how many ads appear on the first screen without lazy loaded ones
        if (firstScreenAds.length === 0) {
          for (const ad in currentAds) {
            const slotResponse = currentAds[ad].slot.getResponseInformation();
            if (ad !== 'skin' && slotResponse !== null) {
              firstScreenAds.push(slotResponse);
            }
          }
        }

        loadedAdsCounter++;

        if (
          loadedAdsCounter === firstScreenAds.length &&
          !allFirstScreenLoaded &&
          typeof allFirstScreenAdsLoaded === 'function'
        ) {
          allFirstScreenLoaded = true;
          allFirstScreenAdsLoaded();
        }
      });

      googletag.pubads().addEventListener('impressionViewable', (evt) => {
        const slotId = evt.slot.getSlotId().getDomId();

        const currentAdRef = currentAds[slotId];

        currentAdRef.viewed = true;

        // if refresh has been disabled for this particular advertiser or campaign
        // proceed no further!
        if (
          isRefreshDisabledAdvertiser(slotId, adConfig.advertisers || {}) ||
          isRefreshDisabledCampaign(slotId, adConfig.campaigns || {})
        ) {
          return;
        }

        // ads should only refresh if the refreshTimeout attribute exists
        // and no other ads exist with the same line item
        // (determined by doesSlotIdBelongToSponsorshipDeal)
        const shouldRefresh =
          isForceRefreshAdvertiser(slotId, adConfig.advertisers || {}) ||
          (!doesSlotIdBelongToSponsorshipDeal(slotId) &&
            currentAdRef.refreshMS);

        if (!shouldRefresh) {
          return;
        }

        currentAdRef.refreshTimeout = setTimeout(async () => {
          currentAdRef.viewed = false;
          await beforeSlotRefresh({
            slotElem: currentAdRef.el,
            slot: currentAdRef.slot,
          });
          window.googletag.pubads().refresh([currentAdRef.slot]);
        }, currentAdRef.refreshMS);
      });
    });
  };

  gpt(props);
};

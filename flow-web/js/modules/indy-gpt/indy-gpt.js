/* globals JSGlobals */

import { adConfig as adTypes } from '#app/config/ads';

import * as breakPoints from '#app/constants/breakpoints';

import gpt from '#app/public/js/modules/gpt';

import executeParallelApsAlongsidePrebid from './apsAlongsidePrebid';
import setPublisherId from './setPublisherId';
import {
  addArticleTargeting,
  addAutoRefreshTargeting,
  addCampaignOverrideTargeting,
  addCommercialTargeting,
  addCookieDeprecationLabel,
  addGDPRTargeting,
  addLiveBlogTargeting,
  addMantisTargeting,
  addPageTypeTargeting,
  addPermutiveTargeting,
  addReferrerTargeting,
  addRegGateStatusTargeting,
  addTopicsTargeting,
} from './targeting';

export default ({ refresh, hasRegGate, ...props }) => {
  const permutiveId = localStorage.getItem('permutive-id');
  const isTvHub = location.pathname.startsWith('/tv/');

  setPublisherId(permutiveId);

  gpt({
    ...props,
    adConfig: {
      types: adTypes,
      ...JSGlobals.adConfig,
    },
    breakPoints,
    adLoadingBehaviourSettings: JSGlobals.adConfig || {},
    setTargeting: () => {
      addCookieDeprecationLabel();
      addPageTypeTargeting();
      addArticleTargeting();
      addMantisTargeting(JSGlobals?.mantis_channels, JSGlobals?.mantis_context);
      addRegGateStatusTargeting(hasRegGate);
      addPermutiveTargeting(permutiveId);
      addAutoRefreshTargeting(refresh);
      addGDPRTargeting();
      addTopicsTargeting();
      addCampaignOverrideTargeting();
      addLiveBlogTargeting(JSGlobals?.isLiveBlog);
      addCommercialTargeting(JSGlobals?.isCommercial);
      addReferrerTargeting();
    },
    beforeSlotsDisplay: async ({ slotElems }) => {
      const slotElements = isTvHub
        ? slotElems?.filter((elem) => elem?.id !== 'mpu1')
        : slotElems;
      if (props.prebidEnabled) {
        await executeParallelApsAlongsidePrebid(slotElements);
      }
    },
    beforeSlotRefresh: async ({ slotElem, slot }) => {
      if (isTvHub && slotElem?.id === 'mpu1') {
        return;
      }
      if (props.prebidEnabled) {
        await executeParallelApsAlongsidePrebid([slotElem]);
      }

      slot.setTargeting('sovrn-reload', 'True');
    },
    enableOutOfPageAd: false,
  });
};

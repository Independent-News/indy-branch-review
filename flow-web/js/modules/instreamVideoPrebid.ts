/* cSpell:enableCompoundWords */

import * as aps from './aps';
import { prebidVideoAdConfig } from './prebid';

import { PBJS } from '#types/pbjs';

declare global {
  interface Window {
    pbjs: PBJS;
  }
}

/**
 * Send prebid request for instream video ad
 *
 * For more details of the function, please read above [documentation]{@link https://docs.prebid.org/dev-docs/publisher-api-reference.html}
 * @param mediaId media id of the video object
 * @param containerId the DOM id of the video container
 * @param adUnitCode the ad unit code
 * @param playerSize width and height of the player
 */
export const requestBids = (
  mediaId: string,
  containerId: string,
  adUnitCode: string,
  playerSize: [number, number],
): Promise<void> => {
  const pbjs = window.pbjs || {};
  pbjs.que = pbjs.que || [];
  const videoAdUnit = prebidVideoAdConfig(
    mediaId,
    containerId,
    adUnitCode,
    playerSize,
  );

  const instreamVideoPriceGranularity = {
    buckets: [
      {
        precision: 2,
        min: 0,
        max: 3,
        increment: 0.01,
      },
      {
        precision: 2,
        min: 3,
        max: 8,
        increment: 0.05,
      },
      {
        precision: 2,
        min: 8,
        max: 20,
        increment: 0.5,
      },
      {
        precision: 2,
        min: 20,
        max: 35,
        increment: 1.0,
      },
    ],
  };

  return new Promise((resolve) => {
    pbjs.que.push(() => {
      pbjs.setConfig({
        cache: {
          url: 'https://prebid.adnxs.com/pbc/v1/cache',
        },
        mediaTypePriceGranularity: {
          video: instreamVideoPriceGranularity,
        },
      });
      pbjs.addAdUnits(videoAdUnit);
      pbjs.requestBids({
        adUnitCodes: [adUnitCode],
        timeout: 3000,
        bidsBackHandler: () => {
          resolve();
        },
      });
    });
  });
};

/**
 * Get ad tag with prebid targeting data for instream video ad
 *
 * For more details of the function, please read above [documentation]{@link https://docs.prebid.org/dev-docs/publisher-api-reference/adServers.dfp.buildVideoUrl.html}
 * @param mediaId media id of the video object
 * @param containerId the element id of the container
 * @param adUnitCode the ad unit code
 * @param adUnitPath the ad unit path
 * @param playerSize width and height of the player
 * @param [defaultAdTag] the default ad tag we want to modify
 */
export const performApsAlongsidePrebid = async (
  mediaId: string,
  containerId: string,
  adUnitCode: string,
  adUnitPath: string,
  playerSize: [number, number],
  defaultAdTag?: string,
): Promise<string> => {
  await aps.loadScript();
  const videoAdUnit = prebidVideoAdConfig(
    mediaId,
    containerId,
    adUnitCode,
    playerSize,
  );
  const requests = [
    requestBids(mediaId, containerId, adUnitCode, playerSize),
    aps.getTargeting(adUnitCode),
  ];

  const [, apsTargeting] = await Promise.all(requests);

  const url = window.pbjs.adServers.dfp.buildVideoUrl({
    ...(defaultAdTag ? { url: defaultAdTag } : {}),
    adUnit: videoAdUnit,
    output: 'vast',
    params: {
      iu: adUnitPath,
      cust_params: apsTargeting,
    },
  });
  return url;
};

/**
 * Get prebid targeting data for instream video ad
 *
 * For more details of the function, please read above [documentation]{@link https://docs.prebid.org/dev-docs/publisher-api-reference/getAdserverTargetingForAdUnitCode.html}
 * @param mediaId media id of the video object
 * @param containerId the element id of the container
 * @param adUnitCode the ad unit code
 * @param playerSize width and height of the player *
 * @example returned object
 * {
 *   "hb_uuid": '12345678-1234-1234-1234-123456789012',
 *   "hb_cache_id": "12345678-1234-1234-1234-123456789012",
 *   "hb_bidder": "rubicon",
 *   "hb_adid": "13f44b0d3c",
 *   "hb_pb": "0.50"
 * }
 */
interface TargetingData {
  hb_uuid?: string;
  hb_cache_id?: string;
  [key: string]: string | undefined;
}
export const getTargeting = async (
  mediaId: string,
  containerId: string,
  adUnitCode: string,
  playerSize: [number, number],
): Promise<TargetingData> => {
  const targeting = await (async () => {
    if (window.JSGlobals.prebidEnabled) {
      await requestBids(mediaId, containerId, adUnitCode, playerSize);
      const targeting = window.pbjs.getAdserverTargetingForAdUnitCode([
        adUnitCode,
      ]);
      return targeting;
    } else {
      return {};
    }
  })();

  return {
    // undefined value is for no bid case
    // @see {@link https://github.com/prebid/Prebid.js/blob/ef8bec95d03e29d8c927d1c8946dd4831157d18d/modules/dfpAdServerVideo.js#L288-L295}
    hb_uuid: undefined,
    hb_cache_id: undefined,
    ...targeting,
  };
};

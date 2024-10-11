/* globals googletag, apstag */
import { adsList } from '#app/config/vendors/prebid';

import * as device from '#app/constants/devices';

import { log } from '#app/public/js/modules/log';
import { LABEL_DESKTOP, LABEL_MOBILE } from '#app/public/js/modules/prebid';
import apsFormatter from '#app/public/js/utils/apsFormatter';

import * as aps from '../aps';

const PREBID_TIMEOUT = 1500;
const FAILSAFE_TIMEOUT = 2000;

export const filterAdsToAuction = (ads, slots) =>
  slots?.filter((slot) => ads.find((ad) => ad.id === slot.id));

export default async (gptSlots) => {
  await aps.loadScript();
  aps.init();

  const adsToAuction = filterAdsToAuction(adsList, gptSlots);

  // ensuring adsToAuction array is not empty as it leads to ads loading with no slots attached to them
  if (!adsToAuction.length) {
    return;
  }

  // APS request
  const apsRequest = new Promise((resolve) => {
    const formattedApsSlots = apsFormatter(adsToAuction);

    apstag?.fetchBids({ slots: formattedApsSlots }, (bids) => {
      log('APS bids:', bids);
      googletag.cmd.push(() => {
        apstag?.setDisplayBids();
        resolve();
      });
    });
  });

  // put prebid request here
  const prebidRequest = new Promise((resolve) => {
    const adUnitCodes = adsToAuction.map((ad) => ad.id);

    const screenLabel = window.matchMedia(device.mobileL).matches
      ? LABEL_DESKTOP
      : LABEL_MOBILE;

    const pbjs = window.pbjs || {};
    pbjs.que = pbjs.que || [];

    pbjs.que.push(() => {
      pbjs.requestBids({
        labels: [screenLabel],
        timeout: PREBID_TIMEOUT,
        adUnitCodes,
        bidsBackHandler: () => {
          adsToAuction.forEach((ad) => {
            pbjs.setTargetingForGPTAsync([ad.id]);
          });
          resolve();
        },
      });
      log('pbjs:', 'request sent');
    });
  });

  // initiate bid request with timeout
  await Promise.race([
    Promise.all([prebidRequest, apsRequest]),
    new Promise((resolve) => setTimeout(resolve, FAILSAFE_TIMEOUT)),
  ]);
};

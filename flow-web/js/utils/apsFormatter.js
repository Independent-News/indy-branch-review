import { adsList } from '#app/config/vendors/prebid';

import { BANNED_SIZES_FOR_APS } from '#app/constants/aps';

export default (adsToAuction) =>
  adsToAuction.map((adSlot) => ({
    slotID: adSlot.id,
    sizes: [
      ...new Set(
        adsList
          .find((ad) => ad.id === adSlot.id)
          .sizes.flatMap((size) => size.supportedSizes)
          .filter(
            (supportedSize) =>
              !BANNED_SIZES_FOR_APS.includes(supportedSize.join(',')),
          ),
      ),
    ],
    slotName: adSlot.getAttribute('data-ad-unit-path'),
  }));

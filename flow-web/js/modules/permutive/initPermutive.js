/* global JSGlobals, permutive */

import { COOKIE_BIRTH_YEAR } from '#app/constants/cookies';

import {
  CLASS_JS_PRODUCT,
  CLASS_JS_PRODUCT_BUY,
  CLASS_JS_PRICE_COMPARISON,
  CLASS_JS_PRICE_COMPARISON_ITEM,
  CLASS_JS_PRICE_COMPARISON_BUTTON,
  CLASS_GALLERY_BUTTON,
  CLASS_INLINE_GALLERY_BUTTON,
} from '#app/constants/classNames';

import { getCookie, getCookies } from '#app/public/js/utils/cookie';
import determineUserSubscriptionStatus from '#app/util/determineUserSubscriptionStatus';

import { loadJS } from '../util';

import { createPermutiveStub } from './createPermutiveStub';
import { getPermutiveRejectedConditions } from './getPermutiveRejectedConditions';
import { identifyUser } from './identifyUser';
import * as thisModule from './initPermutive';

const load = async () => {
  const { workspaceId, organizationId } = JSGlobals.permutive;
  createPermutiveStub();
  await loadJS([
    `https://${organizationId}.edge.permutive.app/${workspaceId}-web.js`,
  ]);
};
export const identifyPianoUser = async () => {
  await identifyUser();
  const birthYear = getCookie(COOKIE_BIRTH_YEAR);
  permutive.track('PianoProfile', {
    birth_year: parseInt(birthYear),
    piano_user_status: determineUserSubscriptionStatus(getCookies()),
    piano_id: JSGlobals.userUid,
  });
};
export const pageView = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = days[new Date().getDay()];
  JSGlobals.permutive?.data &&
    permutive.addon('web', {
      ...JSGlobals.permutive.data,
      ...(JSGlobals.permutive?.data?.page ? {} : { page: {} }),
      context: { day_of_week: dayOfWeek },
      // @todo need a solid method for detecting user status.
      // user: { status: userStatus },
    });
};
export const galleryClick = () => {
  const sendPermutiveGalleryEvent = () => {
    const galleryData = { ...JSGlobals.permutive.data };
    galleryData.page.content.type = 'gallery';
    permutive.addon('web', { page: {}, galleryData });
  };

  document.body.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('amp-carousel-button')) {
      sendPermutiveGalleryEvent();
    }
  });

  const galleryTriggers = [
    ...document.querySelectorAll(
      `.${CLASS_GALLERY_BUTTON}, .${CLASS_INLINE_GALLERY_BUTTON}`,
    ),
  ];

  galleryTriggers.forEach((el) => {
    el.addEventListener('click', sendPermutiveGalleryEvent);
  });
};

const trackAffiliateLink = ({ comparison, affiliate }) => {
  if (!permutive) {
    return;
  }

  const affiliateLinkPayload = {
    comparison,
    affiliate,
  };

  permutive.track('AffiliateLinkClick', affiliateLinkPayload);
};

/**
 * Here is the example article with the legacy best product
 * {@link https://www.independent.co.uk/extras/indybest/prime-day-2019-guide-best-deals-tips-amazon-sale-tech-home-appliances-latest-a9002116.html}
 */
export const eventLegacyBestProductClick = () => {
  const legacyLinks = document.querySelectorAll(
    '.body-link[data-vars-item-name]',
  );
  legacyLinks.forEach((link) =>
    link.addEventListener('click', function (event) {
      // there is some assumed formatting here, but it's largely unavoidable
      const link = event.currentTarget;
      const linkWrapper = link.parentNode;
      // use a stepper to get the h2 directly above the link parent
      let siblingStepper = linkWrapper.previousSibling;
      while (siblingStepper?.nodeName !== 'H2') {
        siblingStepper = siblingStepper.previousSibling;
        if (siblingStepper.nodeName === 'H2') {
          const regex = /(.*):[^\d]*([\d.,\s]*),(.*)$/;
          const match = regex.exec(siblingStepper.textContent);
          if (match) {
            const affiliateData = {
              comparison: false,
              affiliate: '',
            };
            trackAffiliateLink(affiliateData);
          }
          break;
        }
      }
    }),
  );
};

export const eventBestProductClick = () => {
  const products = [...document.getElementsByClassName(CLASS_JS_PRODUCT)];

  products.forEach((product) => {
    const { affiliate } = product.dataset;
    const links = product.querySelectorAll(`.${CLASS_JS_PRODUCT_BUY}`);
    const priceComparisonList = product.querySelector(
      `.${CLASS_JS_PRICE_COMPARISON}`,
    );

    if (priceComparisonList) {
      priceComparisonList.addEventListener('click', (e) => {
        if (e.target.classList.contains(CLASS_JS_PRICE_COMPARISON_BUTTON)) {
          const cLink = e.target;
          const cListItem = cLink.closest(`.${CLASS_JS_PRICE_COMPARISON_ITEM}`);

          const { affiliate } = cListItem.dataset;

          const affiliateLinkData = {
            comparison: true,
            affiliate,
          };

          thisModule.trackAffiliateLink(affiliateLinkData);
        }
      });
    }

    links.forEach((link) => {
      link.addEventListener('click', () => {
        const affiliateLinkData = {
          comparison: false,
          affiliate,
        };

        thisModule.trackAffiliateLink(affiliateLinkData);
      });
    });
  });
};

// permutive - it's a user tracking service, which gets blocked by
// browsers' tracking prevention and adblocks. So the load() can throw
// on which we catch and set permutiveRejected to true to indicate to dependent
// modules that it has been thrown in permutiveReady callback
let permutiveRejected = false;
const rejectList = [];
// when person rejects cookies on consent popup we set it to true,
// we need to track it, because window.permutive.ready is not called
// so just like with 'permutiveRejected' we need to track it in permutiveReady
let consentRejected;

const initPermutive = async () => {
  // init permutive as early as possible but configure to wait for consent (see createPermutiveStub)
  try {
    const config = JSGlobals.permutive;
    if (config) {
      await load();
    } else {
      throw new Error('No JSGlobals.permutive config');
    }
  } catch (error) {
    permutiveRejected = true;
    rejectList.forEach((reject) => reject(error));
    throw error;
  }
};

const passConsentToPermutive = async (consent, consentStr) => {
  // call permutive's consent handler and pass in the consent string
  try {
    const config = JSGlobals.permutive;
    if (config && consent) {
      permutive.consent({ opt_in: true, token: consentStr });
      await thisModule.identifyPianoUser();
      thisModule.pageView();
      thisModule.galleryClick();
      thisModule.eventLegacyBestProductClick();
      thisModule.eventBestProductClick();
    } else {
      consentRejected = true;
    }
  } catch (error) {
    console.error('Failed to pass content to permutive', error.message);
  }
};

// @see https://developer.permutive.com/page/the-permutive-javascript-sdk#callback-function
function permutiveReady(subscriber) {
  return new Promise((resolve, reject) => {
    // @see https://app.clickup.com/t/4521779/READREV-808
    // We have issue, that permutive.ready is not called even though
    // it is downloaded.
    setTimeout(() => {
      reject('Rejected by timeout');
    }, 2000);
    createPermutiveStub();
    const [permutiveRejectedLatest, constentRejectedLatest] =
      getPermutiveRejectedConditions(permutiveRejected, consentRejected);
    if (permutiveRejectedLatest || constentRejectedLatest) {
      reject('Rejected: permutiveRejected || consentRejected');
    } else {
      rejectList.push(reject);
    }

    permutive.ready(() => {
      const id = permutive?.context?.user_id;

      if (subscriber) {
        subscriber(id);
      }
      resolve(id);
    });
  });
}

export {
  trackAffiliateLink,
  initPermutive,
  passConsentToPermutive,
  permutiveReady,
};

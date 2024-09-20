import { SUBSCRIPTION_CAUSE } from '#app/constants/localStorage';
import { SECTION_NAME_CRIME } from '#app/constants/sectionPaths';
import {
  ID_TABOOLA_BELOW_ARTICLE_1,
  ID_TABOOLA_BELOW_ARTICLE_THUMBNAILS_CRIME,
  ID_TABOOLA_BELOW_INDY_BEST_FEED,
  ID_TABOOLA_BELOW_SECTION_FRONT_FEED,
  ID_TABOOLA_CAROUSEL_THUMBNAILS,
  ID_TABOOLA_MID_ARTICLE_THUMBNAILS,
  ID_TABOOLA_MID_ARTICLE_THUMBNAILS_CRIME,
  ID_TABOOLA_MID_ARTICLE_THUMBNAILS_LIVEBLOGS,
  ID_TABOOLA_MS_HERO,
  ID_TABOOLA_NEWSROOM,
  ID_TABOOLA_RIGHT_RAIL,
  ID_TABOOLA_RIGHT_RAIL_THUMBNAILS_CRIME,
  ID_TABOOLA_MOBILE_BELOW_SECTION_FRONT_FEED,
} from '#app/constants/taboola';

import { isInSectionBySourcePath } from '#app/util/isInSectionBySourcePath';

import * as thisModule from './taboola';
import { loadJS } from './util';

import { Article, Unit } from '#types/JSGlobals';

interface UserData {
  unified_id: string;
  user_type: string;
  paywall: boolean;
}

declare global {
  interface Window {
    _taboola: (Unit | UserData)[];
    _tfa?: { notify: string; name: string; sourceurl: string }[];
  }
}

const TYPE_HOMEPAGE = 'homepage';
const TYPE_CATEGORY = 'category';

const taboolaUnits = [
  {
    mode: 'thumbnails-d1',
    container: ID_TABOOLA_BELOW_ARTICLE_1,
    placement: 'Below Article Thumbnails',
    target_type: 'mix',
  },
  {
    mode: 'alternating-thumbnails-d1',
    container: ID_TABOOLA_CAROUSEL_THUMBNAILS,
    placement: 'Mid Article Thumbnails',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-k1',
    container: ID_TABOOLA_RIGHT_RAIL,
    placement: 'Right Rail Thumbnails',
    target_type: 'mix',
  },
  {
    mode: 'organic-thumbs-feed-01',
    container: ID_TABOOLA_BELOW_INDY_BEST_FEED,
    placement: 'Below Indy Best Feed',
    target_type: 'mix',
  },
  {
    mode: 'rbox-tracking',
    container: ID_TABOOLA_NEWSROOM,
    placement: 'Newsroom',
  },
  {
    mode: 'thumbs-feed-hero-1sc-6sc-esi-inde',
    container: ID_TABOOLA_MS_HERO,
    placement: 'MS Hero',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-mid-a',
    container: ID_TABOOLA_MID_ARTICLE_THUMBNAILS_LIVEBLOGS,
    placement: 'Mid Article Thumbnails Live Blogs',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-stream-1x4-a_sc',
    container: ID_TABOOLA_MID_ARTICLE_THUMBNAILS_CRIME,
    placement: 'Mid Article Thumbnails Crime',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-a-sc',
    container: ID_TABOOLA_BELOW_ARTICLE_THUMBNAILS_CRIME,
    placement: 'Below Article Thumbnails Crime',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-rr-sc',
    container: ID_TABOOLA_RIGHT_RAIL_THUMBNAILS_CRIME,
    placement: 'Right Rail Thumbnails Crime',
    target_type: 'mix',
  },
];

const belowSectionUnits = [
  {
    mode: 'thumbs-feed-01',
    container: ID_TABOOLA_BELOW_SECTION_FRONT_FEED,
    placement: 'Below Section Front Feed',
    target_type: 'mix',
  },
  {
    mode: 'thumbs-feed-01',
    container: ID_TABOOLA_MOBILE_BELOW_SECTION_FRONT_FEED,
    placement: 'Mobile Below Section Front Feed',
    target_type: 'mix',
  },
];

const relatedArticleUnits = [
  {
    mode: 'alternating-thumbnails-stream-1x4',
    container: `${ID_TABOOLA_MID_ARTICLE_THUMBNAILS}-ii`,
    placement: 'Mid Article Thumbnails II',
    target_type: 'mix',
  },
  {
    mode: 'alternating-thumbnails-stream-1x4-a',
    container: `${ID_TABOOLA_MID_ARTICLE_THUMBNAILS}-iii`,
    placement: 'Mid Article Thumbnails III',
    target_type: 'mix',
  },
];

const userStatusToTaboolaUserType = (status: string) => {
  return (
    {
      premium: 'subscriber',
      registered: 'registered',
      anonymous: 'guest',
    }[status] || 'other'
  );
};

const pushPaywallTracking = (article: Article) => {
  const { user_status: userStatus, uid: userId } = window.digitalData;

  window._taboola.push({
    unified_id: userId,
    user_type: userStatusToTaboolaUserType(userStatus),
    paywall: (article.premium ?? false) && userStatus !== 'premium',
  });
};

const pushUnit = (unit: Unit) => {
  if (unit.container) {
    const container = document.getElementById(unit.container);
    if (container) {
      const display = window
        .getComputedStyle(container)
        .getPropertyValue('display');
      if (display !== 'none') {
        window._taboola.push(unit);
      }
    }
  }
};

export const getPageUrl = () => {
  const { host, pathname } = window.location;
  return `//${host}${pathname}`;
};

const pushConfig = () => {
  window._taboola = window._taboola || [];

  const { article, sectionName, sections } = window.JSGlobals;
  const { pageType, sectionValues } = window.JSGlobals.taboola;
  const isCrime = article
    ? isInSectionBySourcePath(sections, SECTION_NAME_CRIME)
    : false;

  if (article) {
    window._taboola.push({
      ...(isCrime && { other: 'auto' }),
      ...(!isCrime && { article: 'auto' }),
      url: thisModule.getPageUrl(),
    });

    const footerPrompt = document.getElementById('stickyFooterContainer');
    window._taboola.push({
      listenTo: 'visible',
      handler: (e) => {
        if (
          e.detail.placement.includes('Below Article Thumbnails | Card 19') &&
          footerPrompt
        ) {
          footerPrompt.style.display = 'none';
        }
      },
    });

    pushPaywallTracking(article);

    if (article.premium) {
      window._taboola.push({ premium: true });
    }
  }

  if (pageType === 'section') {
    const type = sectionName === 'News' ? TYPE_HOMEPAGE : TYPE_CATEGORY;
    window._taboola.push({ [type]: 'auto' });
    sectionValues.forEach((unit) => {
      delete unit.category;
      if (
        (type === TYPE_HOMEPAGE && unit.pageType === TYPE_HOMEPAGE) ||
        (type === TYPE_CATEGORY && unit.pageType === TYPE_CATEGORY)
      ) {
        pushUnit(unit);
      }
    });
    // For section page
    belowSectionUnits.forEach((unit) => pushUnit(unit));
  }

  if (pageType === 'article') {
    relatedArticleUnits.forEach((unit) => pushUnit(unit));
  }

  if (pageType !== 'section') {
    taboolaUnits.forEach((unit) => pushUnit(unit));
  }

  window._taboola.push({ flush: true });
};

const getPublishId = () => {
  const { publisherId, publisherIdIndyBest } = window.JSGlobals.taboola;

  return window.location.pathname?.includes('indybest')
    ? publisherIdIndyBest
    : publisherId;
};

const fetchLoader = async () => {
  const publisherId = getPublishId();

  await loadJS([`//cdn.taboola.com/libtrc/${publisherId}/loader.js`]);
  window?.performance?.mark?.('tbl_ic');
};

const initTaboola = async () => {
  await fetchLoader();
  pushConfig();
};

const saveSubscriptionCause = () => {
  const pageUrl = thisModule.getPageUrl();
  localStorage.setItem(SUBSCRIPTION_CAUSE, pageUrl);
};

export function trackSubscriptionCause() {
  const pageUrl = localStorage.getItem(SUBSCRIPTION_CAUSE);
  if (pageUrl) {
    window._tfa = window._tfa = [];
    window._tfa.push({
      notify: 'subscription',
      name: 'subscription-completed',
      sourceurl: pageUrl,
    });
    loadJS(['//cdn.taboola.com/libtrc/unip/1018671/tfa.js']);
  }
}

export default async () => {
  if (!window.JSGlobals.taboola) {
    return;
  }

  const taboolaContainers = taboolaUnits.map((unit) =>
    document.getElementById(unit.container),
  );

  if (!taboolaContainers.length) {
    return;
  }

  // we're saving the latest article to send it when subscription happens
  saveSubscriptionCause();

  await initTaboola();
};

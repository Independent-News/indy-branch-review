/* globals JSGlobals */
import * as Throttle from 'promise-parallel-throttle';

import {
  COOKIE_AUTH,
  COOKIE_FEAT_ANONYMISED,
  COOKIE_FEAT_NO_AMP,
  COOKIE_FEAT_PUBX_INTEGRATION,
  COOKIE_FEAT_SENTRY,
  COOKIE_SUBSCRIBER_ORIGIN,
} from '#app/constants/cookies';

import { ID_PIANO_REGISTER_WALL } from '#app/constants/ids';
import { PATH_WEB_PUSH } from '#app/constants/paths';
import { PUBLICATION_ES, PUBLICATION_UK } from '#app/constants/publication';
import { SECTION_NAME_CRIME } from '#app/constants/sectionPaths';
import { AD_FREE } from '#app/constants/sourcepoint';
import {
  SUBSCRIBER_ORIGIN_EU,
  SUBSCRIBER_ORIGIN_UK,
} from '#app/constants/subscriberOrigin';

import { isSport, isGames } from '#app/services/article.client';

import './modules/adobe-analytics/mock-object';

import decodeJWT from '#app/util/decodeJWT';
import { isInSectionBySourcePath } from '#app/util/isInSectionBySourcePath';
import isUserLoggedInClientSide from '#app/util/isUserLoggedInClientSide';

import adobeBootstrap from './modules/adobe-analytics/bootstrap';
import anonymised from './modules/anonymised';
import bettingAnalyticsTag from './modules/betting';
import initBookmark from './modules/bookmark';
import initBrazeInAppMessageWithDelay from './modules/braze/initBrazeInAppMessageWithDelay';
import initBrazeOnLoggedInUserVisit from './modules/braze/initBrazeOnLoggedInUserVisit';
import initBrazePushPageNotifications from './modules/braze/initBrazePushPageNotifications';
import chartbeat from './modules/chartbeat';
import checkAdBlocker from './modules/checkAdBlocker';
import { checkConsent } from './modules/cmp';
import initComments from './modules/comments';
import initCompetition from './modules/competition';
import { getCookie } from './modules/cookie';
import detectEsiAuthCookieDeletion from './modules/detectEsiAuthCookieDeletion';
import digitalDataInit from './modules/digital-data/init';
import dotmetrics from './modules/dotmetrics';
import facebookSDK from './modules/facebookSDK';
import form from './modules/form';
import initFullstory from './modules/fullstory';
import initGoogleSearch from './modules/googleSearch';
import googleSignIn from './modules/googleSignIn';
import gtm from './modules/gtm';
import hardRefresh from './modules/hardRefresh';
import gpt from './modules/indy-gpt';
import initServiceWorker from './modules/initServiceWorker';
import inputDetection from './modules/inputDetection';
import instagramEmbed from './modules/instagramEmbed';
import JWPlayer from './modules/jwplayer';
import locale from './modules/locale';
import { group, groupEnd } from './modules/log';
import login from './modules/login';
import navbarScroll from './modules/navbarScroll';
import parallax from './modules/parallax';
import {
  initPermutive,
  passConsentToPermutive,
} from './modules/permutive/initPermutive';
import permutiveCookieSync from './modules/permutive/permutiveCookieSync';
import persistentPlayer from './modules/persistentPlayer';
import PixelsPlayer from './modules/pixelsplayer';
import polar from './modules/polar';
import { populatePermutiveId } from './modules/populatePermutiveId';
import prebid from './modules/prebid';
import pubX from './modules/pubX';
import recaptcha from './modules/recaptcha';
import redditEmbed from './modules/redditEmbed';
import regGate from './modules/reg-gate';
import loadRegisterWall from './modules/registerWall/loadRegisterWall';
import scoreboard from './modules/scoreboard';
import sentry from './modules/sentry';
import * as slotCallBack from './modules/slotCallBack';
import stickyFooter from './modules/stickyFooter';
import taboola from './modules/taboola';
import tiktokEmbed from './modules/tiktokEmbed';
import * as timer from './modules/timer';
import trackonomics from './modules/trackonomics';
import twitterWidgets from './modules/twitterWidgets';
import updateAdFreeOrDonatorCookiesOnExpiration from './modules/updateAdFreeOrDonatorCookiesOnExpiration';
import userStatus from './modules/userStatus';
import { loadJS } from './modules/util';
import visibleNav from './modules/visibleNav';
import trackonomicsAffiliateLinks from './trackonomicsAffiliateLinks';
import { isFeatureFlagEnabled } from './utils/featureFlag';
import isAnonymisedCallbackPageLoad from './utils/isAnonymisedCallbackPageLoad';
import shouldRenderPushPrimerOnNewsArticles from './utils/shouldRenderPushPrimerOnNewsArticles';

timer.init();
timer.start('first ad load');

const isAnonymisedPageLoad = isAnonymisedCallbackPageLoad();

const subscriberOrigin = getCookie(COOKIE_SUBSCRIBER_ORIGIN);
const geoLocation = subscriberOrigin ?? SUBSCRIBER_ORIGIN_UK;
const isUserLoggedIn = isUserLoggedInClientSide();
const isUK = geoLocation === SUBSCRIBER_ORIGIN_UK;
const isUKDomain = JSGlobals.domain === PUBLICATION_UK;
const refresh = JSGlobals.isSection;
const inCMSView = location.search.includes('live-browse');
const shouldLoadAds =
  !inCMSView &&
  window.digitalData?.user_status !== 'premium' &&
  (JSGlobals.article || JSGlobals.isSection) &&
  !JSGlobals.article?.premium &&
  JSGlobals.article?.sensitive !== true;
const prebidEnabled =
  (!!subscriberOrigin || window.JSGlobals.mode === 'development') &&
  shouldLoadAds &&
  window.JSGlobals.prebidEnabled;
const isRegWallSupportedPage = !!document.getElementById(
  ID_PIANO_REGISTER_WALL,
);
const isAdFree = decodeJWT(getCookie(COOKIE_AUTH))?.[AD_FREE] ?? false;
let hasRegGate = false;
let hasAdBlocker = false;
let consent;

const isSportOrGames = isSport(JSGlobals.article) || isGames(JSGlobals.article);

const gptInit = async (consent, hasRegGate = false) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
    gpt({
      refresh,
      slotRenderedCallback: slotCallBack.onRendered,
      slotLoadedCallback: slotCallBack.onLoaded,
      consent,
      prebidEnabled,
      hasRegGate,
      firstAdLoaded: () => {
        timer.end('first ad load');
      },
      allFirstScreenAdsLoaded: () => {
        resolve();
      },
    });
  });
};

// set digital data before every script
digitalDataInit();

if (!isAnonymisedPageLoad) {
  // don't let analytics error kill page
  try {
    // Adobe tracking pre-requisites must load immediately and synchronously
    adobeBootstrap();
  } catch (err) {
    console.error('Analytics error caught: ', err);
  }
}

const initialisers = [
  {
    sentry: isFeatureFlagEnabled(COOKIE_FEAT_SENTRY) && sentry,
    ...(isFeatureFlagEnabled(COOKIE_FEAT_NO_AMP) && { initServiceWorker }),
  },
  {
    checkAdBlocker: async () => {
      hasAdBlocker = await checkAdBlocker();
    },
  },
  {
    ...(JSGlobals.domain !== PUBLICATION_ES &&
      (JSGlobals.isLiveBlog || shouldRenderPushPrimerOnNewsArticles()) && {
        initBrazeInAppMessageWithDelay,
      }),

    dotmetrics: !isAnonymisedPageLoad && dotmetrics,
    gtm: async () => {
      if (!hasAdBlocker && !inCMSView) {
        await gtm();
      }
    },
    chartbeat: !isAnonymisedPageLoad && chartbeat,
    permutive: !isAnonymisedPageLoad && initPermutive,

    trackonomics,
    consent: {
      method: async () => {
        // we only check for consent on UK and EU
        // for other regions we assign true to consent to bypass it
        consent = [SUBSCRIBER_ORIGIN_UK, SUBSCRIBER_ORIGIN_EU].includes(
          geoLocation,
        )
          ? await checkConsent()
          : true;
      },
      dependents: {
        permutive:
          !isAnonymisedPageLoad &&
          (async () => {
            if (!hasAdBlocker) {
              await passConsentToPermutive(
                consent,
                getCookie('euconsent-v2', 'none'),
              );
            }
          }),
        anonymised: isFeatureFlagEnabled(COOKIE_FEAT_ANONYMISED) && anonymised,
        pubX: isFeatureFlagEnabled(COOKIE_FEAT_PUBX_INTEGRATION) && pubX,
        prebid: async () => {
          if (prebidEnabled && !hasAdBlocker) {
            await loadJS([
              JSGlobals.manifest[isUK ? 'prebid.js' : 'prebid_non_uk.js'],
            ]);

            await prebid();
          }
        },
        permutiveCookieSync: !isAnonymisedPageLoad && permutiveCookieSync,
      },
    },
  },
  {
    gpt:
      !hasAdBlocker &&
      shouldLoadAds &&
      (async () => {
        await gptInit(consent, hasRegGate);
      }),
    JWPlayer: async () => {
      await JWPlayer(consent);
    },
    PixelsPlayer: async () => {
      await PixelsPlayer(consent, prebidEnabled);
    },
  },
  {
    registerWall: isRegWallSupportedPage && loadRegisterWall,
    userStatus: async () => {
      if (JSGlobals.userLogin) {
        await userStatus();
      }
    },
    regGate:
      !inCMSView &&
      JSGlobals.article &&
      isUKDomain &&
      (async () => {
        if (!hasAdBlocker) {
          hasRegGate = await regGate();
        }
      }),
  },
  {
    initComments: JSGlobals.userComments && JSGlobals.article && initComments,

    initBookmark: isUKDomain && JSGlobals.article && initBookmark,
    initCompetition:
      JSGlobals.userLogin && JSGlobals.article && initCompetition,
    ...(isUserLoggedIn && { initBrazeOnLoggedInUserVisit }),
    form,
    recaptcha,
    persistentPlayer,
    hardRefresh: refresh && hardRefresh,
    login,
    googleSignIn,
    navbarScroll,
    scoreboard,
    stickyFooter,
    locale: isUKDomain && locale,
    populatePermutiveId: !isAnonymisedPageLoad && populatePermutiveId,
    visibleNav,
    inputDetection,
    twitterWidgets,
    facebookSDK,
    instagramEmbed,
    tiktokEmbed,
    redditEmbed,
    parallax,
    trackonomicsAffiliateLinks,
    updateAdFreeOrDonatorCookiesOnExpiration,
    detectEsiAuthCookieDeletion,
  },
  {
    googleSearch: async () => {
      if (JSGlobals.cseId) {
        await initGoogleSearch(JSGlobals.cseId, 0);
        !isFeatureFlagEnabled(COOKIE_FEAT_NO_AMP) &&
          (await initGoogleSearch(JSGlobals.cseId, 1));
      }
    },
    taboola:
      (JSGlobals.article?.sensitive !== true ||
        isInSectionBySourcePath(
          JSGlobals.article?.sectionCategory,
          SECTION_NAME_CRIME,
        )) &&
      !isAdFree &&
      taboola,
  },
  {
    polar: JSGlobals.article && JSGlobals.domain !== PUBLICATION_ES && polar,
    ...(JSGlobals.domain !== PUBLICATION_ES &&
      window.location.pathname === PATH_WEB_PUSH && {
        initBrazePushPageNotifications,
      }),
  },
  {
    fullstory: () => initFullstory(consent),
  },
  {
    betting: () => isUKDomain && isSportOrGames && bettingAnalyticsTag(consent),
  },
  {
    ready: () => {
      document.documentElement.classList.add('indy-ready');
    },
  },
];

const initPromises = (inits) =>
  Object.keys(inits).map((key) => async () => {
    const initFunc = inits[key];

    if (!initFunc) {
      return;
    }

    timer.start(key);

    try {
      if (initFunc.method) {
        await initFunc.method();
        timer.end(key);
        if (initFunc.dependents) {
          const groupName = `${key} deps`;
          group(groupName);
          await Throttle.all(initPromises(initFunc.dependents));
          groupEnd(groupName);
        }
      } else {
        await initFunc();
        timer.end(key);
      }
    } catch (e) {
      console.warn(`Error caught in ${key}()`);
      console.error(e);
    }
  });

const initialiseModules = async () => {
  for (let i = 0; i < initialisers.length; i++) {
    const groupName = `group ${i + 1}`;
    group(groupName);
    await Throttle.all(initPromises(initialisers[i]));
    groupEnd(groupName);
  }
};

initialiseModules();

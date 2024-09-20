const modulesToMock = [
  ['../modules/adobe-analytics/bootstrap', 'adobeBootstrap'],
  ['../modules/cookie'],
  ['../modules/log'],
  ['../modules/timer'],
  ['../modules/anonymised', 'anonymised'],
  ['../modules/bookmark'],
  [
    '../modules/braze/initBrazeInAppMessageWithDelay',
    'initBrazeInAppMessageWithDelay',
  ],
  ['../modules/braze/initBrazeOnLoggedInUserVisit'],
  ['../modules/braze/initBrazePushPageNotifications'],
  ['../modules/chartbeat', 'chartbeat'],
  ['../modules/checkAdBlocker', 'checkAdBlocker'],
  ['../modules/cmp'],
  ['../modules/comments'],
  ['../modules/competition'],
  ['../modules/digital-data/init', 'digitalDataInit'],
  ['../modules/dotmetrics', 'dotmetrics'],
  ['../modules/facebookSDK', 'facebookSDK'],
  ['../modules/form', 'form'],
  ['../modules/fullstory', 'initFullstory'],
  ['../modules/googleSearch', 'initGoogleSearch'],
  ['../modules/googleSignIn', 'googleSignIn'],
  ['../modules/gtm', 'gtm'],
  ['../modules/hardRefresh', 'hardRefresh'],
  ['../modules/indy-gpt', 'gpt'],
  ['../modules/initServiceWorker', 'initServiceWorker'],
  ['../modules/inputDetection', 'inputDetection'],
  ['../modules/instagramEmbed', 'instagramEmbed'],
  ['../modules/jwplayer', 'JWPlayer'],
  ['../modules/locale', 'locale'],
  ['../modules/login', 'login'],
  ['../modules/navbarScroll', 'navbarScroll'],
  ['../modules/parallax', 'parallax'],
  ['../modules/permutive/initPermutive'],
  ['../modules/permutive/permutiveCookieSync', 'permutiveCookieSync'],
  ['../modules/persistentPlayer', 'persistentPlayer'],
  ['../modules/pixelsplayer', 'pixelsPlayer'],
  ['../modules/polar', 'polar'],
  ['../modules/populatePermutiveId'],
  ['../modules/prebid', 'prebid'],
  ['../modules/pubX', 'pubX'],
  ['../modules/recaptcha', 'recaptcha'],
  ['../modules/redditEmbed', 'redditEmbed'],
  ['../modules/reg-gate'],
  ['../modules/scoreboard', 'scoreboard'],
  ['../modules/sentry', 'sentry'],
  ['../modules/slotCallBack'],
  ['../modules/stickyFooter', 'stickyFooter'],
  ['../modules/taboola', 'taboola'],
  ['../modules/tiktokEmbed', 'tiktokEmbed'],
  ['../modules/trackonomics', 'trackonomics'],
  ['../modules/twitterWidgets', 'twitterWidgets'],
  ['../modules/userStatus', 'userStatus'],
  ['../modules/util'],
  ['../modules/visibleNav', 'visibleNav'],
  ['../trackonomicsAffiliateLinks', 'trackonomicsAffiliateLinks'],
  ['../utils/featureFlag'],
  ['../utils/isAnonymisedCallbackPageLoad', 'isAnonymisedCallbackPageLoad'],
  ['../modules/registerWall/loadRegisterWall', 'loadRegisterWall'],
  ['../modules/reg-gate', 'regGate'],
  ['../modules/comments', 'initComments'],
  ['../modules/bookmark', 'initBookmark'],
  ['../modules/competition', 'initCompetition'],
  [
    '../modules/braze/initBrazeOnLoggedInUserVisit',
    'initBrazeOnLoggedInUserVisit',
  ],
  ['#app/util/isInSectionBySourcePath'],
  [
    '../modules/braze/initBrazePushPageNotifications',
    'initBrazePushPageNotifications',
  ],
  ['#app/util/decodeJWT', 'decodeJWT'],
  [
    '../modules/updateAdFreeOrDonatorCookiesOnExpiration',
    'updateAdFreeOrDonatorCookiesOnExpiration',
  ],
  ['../modules/detectEsiAuthCookieDeletion', 'detectEsiAuthCookieDeletion'],
  [
    '../utils/shouldRenderPushPrimerOnNewsArticles',
    'shouldRenderPushPrimerOnNewsArticles',
  ],
  ['#app/util/isUserLoggedInClientSide', 'isUserLoggedInClientSide'],
  ['../modules/betting', 'bettingAnalyticsTag'],
  ['#app/services/article.client'],
];

/*
 * We use jest.doMock() to re-mock the modules each test since
 * main.js is reimported each test due to no modules being exposed from it.
 * This is required for all mocks to be correctly called each test.
 */
const prepareMainJsMockedModules = () =>
  modulesToMock.reduce((acc, [modulePath, defaultModuleName]) => {
    jest.doMock(modulePath);
    const { default: defaultExport, ...namedExports } = require(modulePath);
    return {
      ...acc,
      ...namedExports,
      ...(defaultModuleName && {
        [defaultModuleName]: defaultExport,
      }),
    };
  }, {});

export default prepareMainJsMockedModules;

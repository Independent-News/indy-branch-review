/**
 * @jest-environment jsdom
 */

import 'jest-location-mock';

import {
  COOKIE_FEAT_ANONYMISED,
  COOKIE_FEAT_NO_AMP,
  COOKIE_FEAT_PUBX_INTEGRATION,
  COOKIE_FEAT_SENTRY,
  COOKIE_SUBSCRIBER_ORIGIN,
} from '#app/constants/cookies';

import { PATH_WEB_PUSH } from '#app/constants/paths';
import { PUBLICATION_ES, PUBLICATION_UK } from '#app/constants/publication';
import { SECTION_NAME_CRIME } from '#app/constants/sectionPaths';
import { AD_FREE } from '#app/constants/sourcepoint';
import {
  SUBSCRIBER_ORIGIN_EU,
  SUBSCRIBER_ORIGIN_OTHERS,
  SUBSCRIBER_ORIGIN_UK,
  SUBSCRIBER_ORIGIN_US,
} from '#app/constants/subscriberOrigin';

import waitForAllPromisesToResolve from '#app/jest-utils/waitForAllPromisesToResolve';

import prepareMainJsMockedModules from '../__fixtures__/prepareMainJsMockedModules';

describe('Main.js - public', () => {
  let mockModules = {};
  const executeMainJs = async () => {
    require('../main');
    await waitForAllPromisesToResolve();
  };
  const allowMainJsToBeReImportedForNextTest = () => jest.resetModules();
  const mockTruthyConsent = () => {
    mockModules.checkConsent.mockResolvedValueOnce(true);
    mockModules.getCookie.mockImplementation(
      (cookieName) =>
        ({
          [COOKIE_SUBSCRIBER_ORIGIN]: SUBSCRIBER_ORIGIN_UK,
          ['euconsent-v2']: 'some-eu-consent',
        })[cookieName],
    );
  };
  const mockShouldLoadAds = () => {
    global.JSGlobals = {
      ...global.JSGlobals,
      article: {
        premium: false,
        sensitive: false,
      },
    };
    window.digitalData.user_status = 'not-premium';
  };
  const mockInCmsView = () => (location.search = '?live-browse=true');
  const mockSensitiveArticle = () => {
    global.JSGlobals = {
      ...global.JSGlobals,
      article: {
        sensitive: true,
      },
    };
  };

  beforeEach(() => {
    global.JSGlobals = {};
    window.digitalData = {};
    mockModules = prepareMainJsMockedModules();
    jest.spyOn(document, 'getElementById').mockReturnValue(null);
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    allowMainJsToBeReImportedForNextTest();
  });

  afterAll(() => {
    jest.restoreAllMocks();
    delete global.JSGlobals;
    delete window.digitalData;
  });

  it('will correctly initialise all base modules that should load each page on execution', async () => {
    await executeMainJs();
    expect(mockModules.isAnonymisedCallbackPageLoad).toHaveBeenCalledTimes(1);
    expect(mockModules.digitalDataInit).toHaveBeenCalledTimes(1);
    expect(mockModules.adobeBootstrap).toHaveBeenCalledTimes(1);
    expect(mockModules.chartbeat).toHaveBeenCalledTimes(1);
    expect(mockModules.checkAdBlocker).toHaveBeenCalledTimes(1);
    expect(mockModules.dotmetrics).toHaveBeenCalledTimes(1);
    expect(mockModules.facebookSDK).toHaveBeenCalledTimes(1);
    expect(mockModules.form).toHaveBeenCalledTimes(1);
    expect(mockModules.googleSignIn).toHaveBeenCalledTimes(1);
    expect(mockModules.inputDetection).toHaveBeenCalledTimes(1);
    expect(mockModules.instagramEmbed).toHaveBeenCalledTimes(1);
    expect(mockModules.login).toHaveBeenCalledTimes(1);
    expect(mockModules.navbarScroll).toHaveBeenCalledTimes(1);
    expect(mockModules.parallax).toHaveBeenCalledTimes(1);
    expect(mockModules.initPermutive).toHaveBeenCalledTimes(1);
    expect(mockModules.permutiveCookieSync).toHaveBeenCalledTimes(1);
    expect(mockModules.persistentPlayer).toHaveBeenCalledTimes(1);
    expect(mockModules.recaptcha).toHaveBeenCalledTimes(1);
    expect(mockModules.redditEmbed).toHaveBeenCalledTimes(1);
    expect(mockModules.scoreboard).toHaveBeenCalledTimes(1);
    expect(mockModules.stickyFooter).toHaveBeenCalledTimes(1);
    expect(mockModules.tiktokEmbed).toHaveBeenCalledTimes(1);
    expect(mockModules.trackonomics).toHaveBeenCalledTimes(1);
    expect(mockModules.twitterWidgets).toHaveBeenCalledTimes(1);
    expect(
      mockModules.updateAdFreeOrDonatorCookiesOnExpiration,
    ).toHaveBeenCalledTimes(1);
    expect(mockModules.visibleNav).toHaveBeenCalledTimes(1);
    expect(mockModules.trackonomicsAffiliateLinks).toHaveBeenCalledTimes(1);
    expect(mockModules.populatePermutiveId).toHaveBeenCalledTimes(1);
    expect(mockModules.detectEsiAuthCookieDeletion).toHaveBeenCalledTimes(1);

    // modules behind conditions
    expect(mockModules.initServiceWorker).not.toHaveBeenCalled();
    expect(mockModules.sentry).not.toHaveBeenCalled();
    expect(mockModules.onRendered).not.toHaveBeenCalled();
    expect(mockModules.onLoaded).not.toHaveBeenCalled();
  });

  it('will correctly initialise all utilities with correct arguments to determine which modules to execute', async () => {
    await executeMainJs();
    expect(mockModules.adobeBootstrap).toHaveBeenCalledTimes(1);
    expect(mockModules.getCookie).toHaveBeenCalledTimes(3);
    expect(mockModules.group).toHaveBeenCalledTimes(12);
    expect(mockModules.groupEnd).toHaveBeenCalledTimes(12);
    expect(mockModules.start).toHaveBeenCalledTimes(39);
    expect(mockModules.isFeatureFlagEnabled).toHaveBeenCalledTimes(4);
  });

  it('will not instantiate certain modules if anonymised page view', async () => {
    mockModules.isAnonymisedCallbackPageLoad.mockReturnValueOnce(true);
    await executeMainJs();
    expect(mockModules.adobeBootstrap).not.toHaveBeenCalled();
    expect(mockModules.dotmetrics).not.toHaveBeenCalled();
    expect(mockModules.chartbeat).not.toHaveBeenCalled();
    expect(mockModules.initPermutive).not.toHaveBeenCalled();
    expect(mockModules.passConsentToPermutive).not.toHaveBeenCalled();
    expect(mockModules.permutiveCookieSync).not.toHaveBeenCalled();
    expect(mockModules.populatePermutiveId).not.toHaveBeenCalled();
  });

  it('will console error and not bomb if Adobe throws analytics related error', async () => {
    const mockError = new Error('some-adobe-error');
    mockModules.adobeBootstrap.mockImplementation(() => {
      throw mockError;
    });
    await executeMainJs();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      'Analytics error caught: ',
      mockError,
    );
  });

  it('will only load Sentry module when Sentry feature is enabled', async () => {
    mockModules.isFeatureFlagEnabled.mockImplementation(
      (flag) => flag === COOKIE_FEAT_SENTRY,
    );
    await executeMainJs();
    expect(mockModules.sentry).toHaveBeenCalledTimes(1);
    expect(mockModules.isFeatureFlagEnabled).toHaveBeenCalledWith(
      COOKIE_FEAT_SENTRY,
    );
  });

  it('will only load initServiceWorker module when no amp feature is enabled', async () => {
    mockModules.isFeatureFlagEnabled.mockImplementation(
      (flag) => flag === COOKIE_FEAT_NO_AMP,
    );
    await executeMainJs();
    expect(mockModules.initServiceWorker).toHaveBeenCalledTimes(1);
    expect(mockModules.isFeatureFlagEnabled).toHaveBeenCalledWith(
      COOKIE_FEAT_NO_AMP,
    );
  });

  it('will initialise fullstory module with consent status', async () => {
    mockTruthyConsent();
    await executeMainJs();
    expect(mockModules.initFullstory).toHaveBeenCalledTimes(1);
    expect(mockModules.initFullstory).toHaveBeenCalledWith(true);
  });

  it('will attach indy-ready class to document after all modules have been initialised', async () => {
    jest.spyOn(document.documentElement.classList, 'add');
    await executeMainJs();
    expect(document.documentElement.classList.add).toHaveBeenCalledTimes(1);
    expect(document.documentElement.classList.add).toHaveBeenCalledWith(
      'indy-ready',
    );
  });

  describe('init Braze in app message with delay module', () => {
    it('will load module on non-es live blog articles', async () => {
      global.JSGlobals = {
        domain: PUBLICATION_UK,
        isLiveBlog: true,
      };
      await executeMainJs();
      expect(mockModules.initBrazeInAppMessageWithDelay).toHaveBeenCalledTimes(
        1,
      );
    });

    it('will not load module on es live blog articles', async () => {
      global.JSGlobals = {
        domain: PUBLICATION_ES,
        isLiveBlog: true,
      };
      await executeMainJs();
      expect(mockModules.initBrazeInAppMessageWithDelay).not.toHaveBeenCalled();
    });

    it('will not load module on non-es non-live blog articles', async () => {
      global.JSGlobals = {
        domain: PUBLICATION_UK,
        isLiveBlog: false,
      };
      mockModules.shouldRenderPushPrimerOnNewsArticles.mockReturnValueOnce(
        false,
      );
      await executeMainJs();
      expect(mockModules.initBrazeInAppMessageWithDelay).not.toHaveBeenCalled();
    });

    it('will load module on non-es articles on news sections', async () => {
      global.JSGlobals = {
        domain: PUBLICATION_UK,
        isLiveBlog: false,
      };
      mockModules.shouldRenderPushPrimerOnNewsArticles.mockReturnValueOnce(
        true,
      );
      await executeMainJs();
      expect(mockModules.initBrazeInAppMessageWithDelay).toHaveBeenCalledTimes(
        1,
      );
      expect(
        mockModules.shouldRenderPushPrimerOnNewsArticles,
      ).toHaveBeenCalledTimes(1);
    });
  });

  describe('gtm module', () => {
    it('will not load if user has ad blocker enabled', async () => {
      mockModules.checkAdBlocker.mockResolvedValue(true);
      await executeMainJs();
      expect(mockModules.gtm).not.toHaveBeenCalled();
    });

    it('will not load if user does not have ad blocker enabled but is in CMS view', async () => {
      mockModules.checkAdBlocker.mockResolvedValue(false);
      mockInCmsView();
      await executeMainJs();
      expect(mockModules.gtm).not.toHaveBeenCalled();
    });

    it('will load if user does not have ad blocker enabled and is not in CMS view', async () => {
      mockModules.checkAdBlocker.mockResolvedValue(false);
      await executeMainJs();
      expect(mockModules.gtm).toHaveBeenCalledTimes(1);
    });
  });

  describe('consent', () => {
    describe('check consent module', () => {
      it('should check consent in UK location', async () => {
        mockModules.getCookie.mockImplementation(
          (cookieName) =>
            ({
              [COOKIE_SUBSCRIBER_ORIGIN]: SUBSCRIBER_ORIGIN_UK,
            })[cookieName],
        );
        await executeMainJs();
        expect(mockModules.checkConsent).toHaveBeenCalledTimes(1);
      });

      it('should check consent in EU location', async () => {
        mockModules.getCookie.mockImplementation(
          (cookieName) =>
            ({
              [COOKIE_SUBSCRIBER_ORIGIN]: SUBSCRIBER_ORIGIN_EU,
            })[cookieName],
        );
        await executeMainJs();
        expect(mockModules.checkConsent).toHaveBeenCalledTimes(1);
      });

      it('should not check consent in US location', async () => {
        mockModules.getCookie.mockImplementation(
          (cookieName) =>
            ({
              [COOKIE_SUBSCRIBER_ORIGIN]: SUBSCRIBER_ORIGIN_US,
            })[cookieName],
        );
        await executeMainJs();
        expect(mockModules.checkConsent).not.toHaveBeenCalled();
      });

      it("should not check consent in 'others' location", async () => {
        mockModules.getCookie.mockImplementation(
          (cookieName) =>
            ({
              [COOKIE_SUBSCRIBER_ORIGIN]: SUBSCRIBER_ORIGIN_OTHERS,
            })[cookieName],
        );
        await executeMainJs();
        expect(mockModules.checkConsent).not.toHaveBeenCalled();
      });
    });

    describe('pass consent to Permutive module', () => {
      it('should not pass consent if ad blocker is enabled', async () => {
        mockModules.isAnonymisedCallbackPageLoad.mockReturnValueOnce(false);
        mockModules.checkAdBlocker.mockResolvedValueOnce(true);
        mockTruthyConsent();
        await executeMainJs();
        expect(mockModules.passConsentToPermutive).not.toHaveBeenCalled();
      });

      it('should pass consent if ad blocker is not enabled', async () => {
        mockModules.isAnonymisedCallbackPageLoad.mockReturnValueOnce(false);
        mockModules.checkAdBlocker.mockResolvedValueOnce(false);
        mockTruthyConsent();
        await executeMainJs();
        expect(mockModules.passConsentToPermutive).toHaveBeenCalledTimes(1);
        expect(mockModules.passConsentToPermutive).toHaveBeenCalledWith(
          true,
          'some-eu-consent',
        );
      });
    });

    describe('anonymised module', () => {
      it('should not load if anonymised feature is not enabled', async () => {
        mockModules.isFeatureFlagEnabled.mockImplementation(
          (featureFlag) => featureFlag !== COOKIE_FEAT_ANONYMISED,
        );
        await executeMainJs();
        expect(mockModules.anonymised).not.toHaveBeenCalled();
      });

      it('should load if anonymised feature is enabled', async () => {
        mockModules.isFeatureFlagEnabled.mockImplementation(
          (featureFlag) => featureFlag === COOKIE_FEAT_ANONYMISED,
        );
        await executeMainJs();
        expect(mockModules.anonymised).toHaveBeenCalledTimes(1);
      });
    });

    describe('pub x module', () => {
      it('should not load if pub x integration feature is not enabled', async () => {
        mockModules.isFeatureFlagEnabled.mockImplementation(
          (featureFlag) => featureFlag !== COOKIE_FEAT_PUBX_INTEGRATION,
        );
        await executeMainJs();
        expect(mockModules.pubX).not.toHaveBeenCalled();
      });

      it('should load if pub x integration feature is enabled', async () => {
        mockModules.isFeatureFlagEnabled.mockImplementation(
          (featureFlag) => featureFlag === COOKIE_FEAT_PUBX_INTEGRATION,
        );
        await executeMainJs();
        expect(mockModules.pubX).toHaveBeenCalledTimes(1);
      });
    });

    describe('prebid module', () => {
      it('should not load if prebid is not enabled', async () => {
        global.JSGlobals.prebidEnabled = false;
        await executeMainJs();
        expect(mockModules.prebid).not.toHaveBeenCalled();
      });

      it('should not load if prebid is enabled but ad blocker is detected', async () => {
        global.JSGlobals.prebidEnabled = true;
        mockTruthyConsent();
        mockShouldLoadAds();
        mockModules.checkAdBlocker.mockResolvedValueOnce(true);
        await executeMainJs();
        expect(mockModules.prebid).not.toHaveBeenCalled();
      });

      it('should load UK script if prebid is enabled and no ad blocker is detected under UK origin', async () => {
        global.JSGlobals = {
          prebidEnabled: true,
          manifest: {
            'prebid.js': 'some-uk-prebid-js-script',
          },
        };
        mockTruthyConsent();
        mockShouldLoadAds();
        mockModules.checkAdBlocker.mockResolvedValueOnce(false);
        await executeMainJs();
        expect(mockModules.prebid).toHaveBeenCalledTimes(1);
        expect(mockModules.loadJS).toHaveBeenCalledTimes(1);
        expect(mockModules.loadJS).toHaveBeenCalledWith([
          'some-uk-prebid-js-script',
        ]);
      });

      it('should load non-uk script if prebid is enabled and no ad blocker is detected under non-uk origin', async () => {
        global.JSGlobals = {
          prebidEnabled: true,
          manifest: {
            'prebid_non_uk.js': 'some-non-uk-prebid-js-script',
          },
        };
        mockModules.getCookie.mockImplementation(
          (cookieName) =>
            ({
              [COOKIE_SUBSCRIBER_ORIGIN]: SUBSCRIBER_ORIGIN_US,
            })[cookieName],
        );
        mockShouldLoadAds();
        mockModules.checkAdBlocker.mockResolvedValueOnce(false);
        await executeMainJs();
        expect(mockModules.prebid).toHaveBeenCalledTimes(1);
        expect(mockModules.loadJS).toHaveBeenCalledTimes(1);
        expect(mockModules.loadJS).toHaveBeenCalledWith([
          'some-non-uk-prebid-js-script',
        ]);
      });
    });
  });

  describe('gpt module', () => {
    it('should not load if user has ad blocker enabled', async () => {
      mockModules.checkAdBlocker.mockResolvedValue(true);
      await executeMainJs();
      expect(mockModules.gpt).not.toHaveBeenCalled();
    });

    it('should not load if user does not have ad blocker enabled and ads should not be loaded', async () => {
      mockModules.checkAdBlocker.mockResolvedValue(false);
      global.JSGlobals.article = { premium: true };
      await executeMainJs();
      expect(mockModules.gpt).not.toHaveBeenCalled();
    });

    it('should load if user does not have ad blocker enabled and ads should be loaded', async () => {
      mockModules.gpt.mockImplementation(({ firstAdLoaded }) =>
        firstAdLoaded(),
      );
      mockModules.checkAdBlocker.mockResolvedValue(false);
      global.JSGlobals = {
        prebidEnabled: true,
        isSection: true,
      };
      mockShouldLoadAds();
      mockTruthyConsent();
      await executeMainJs();
      expect(mockModules.gpt).toHaveBeenCalledTimes(1);
      expect(mockModules.gpt).toHaveBeenCalledWith({
        allFirstScreenAdsLoaded: expect.any(Function),
        consent: true,
        firstAdLoaded: expect.any(Function),
        hasRegGate: false,
        prebidEnabled: true,
        refresh: true,
        slotLoadedCallback: expect.any(Function),
        slotRenderedCallback: expect.any(Function),
      });
      expect(mockModules.end).toHaveBeenCalledWith('first ad load');
    });
  });

  describe('jwplayer module', () => {
    it('will load correctly with consent status as argument', async () => {
      mockTruthyConsent();
      await executeMainJs();
      expect(mockModules.JWPlayer).toHaveBeenCalledTimes(1);
      expect(mockModules.JWPlayer).toHaveBeenCalledWith(true);
    });
  });

  describe('pixels player module', () => {
    it('will load correctly with consent status and prebid enabled as arguments', async () => {
      global.JSGlobals.prebidEnabled = true;
      mockShouldLoadAds();
      mockTruthyConsent();
      await executeMainJs();
      expect(mockModules.pixelsPlayer).toHaveBeenCalledTimes(1);
      expect(mockModules.pixelsPlayer).toHaveBeenCalledWith(true, true);
    });
  });

  describe('user status module', () => {
    it('will not be called if login functionality is not available', async () => {
      global.JSGlobals.userLogin = false;
      await executeMainJs();
      expect(mockModules.userStatus).not.toHaveBeenCalled();
    });

    it('will be called if login functionality is available', async () => {
      global.JSGlobals.userLogin = true;
      await executeMainJs();
      expect(mockModules.userStatus).toHaveBeenCalledTimes(1);
    });
  });

  describe('reg gate module', () => {
    it('will not load if within cms view', async () => {
      mockInCmsView();
      await executeMainJs();
      expect(mockModules.regGate).not.toHaveBeenCalled();
    });

    it('will not load if executed outside of an article', async () => {
      global.JSGlobals.article = false;
      await executeMainJs();
      expect(mockModules.regGate).not.toHaveBeenCalled();
    });

    it('will not load if executed outside UK domain', async () => {
      mockSensitiveArticle();
      global.JSGlobals.domain = 'some-non-uk-domain';
      await executeMainJs();
      expect(mockModules.regGate).not.toHaveBeenCalled();
    });

    it('will not load if ad blocker is enabled', async () => {
      mockSensitiveArticle();
      global.JSGlobals.domain = PUBLICATION_UK;
      mockModules.checkAdBlocker.mockResolvedValueOnce(true);
      await executeMainJs();
      expect(mockModules.regGate).not.toHaveBeenCalled();
    });

    it('will load for articles under UK domain not within CMS view', async () => {
      mockSensitiveArticle();
      global.JSGlobals.domain = PUBLICATION_UK;
      mockModules.checkAdBlocker.mockResolvedValue(false);
      await executeMainJs();
      expect(mockModules.regGate).toHaveBeenCalledTimes(1);
    });
  });

  describe('init comments module', () => {
    it('will not load if comments functionality is not enabled', async () => {
      global.JSGlobals.userComments = false;
      await executeMainJs();
      expect(mockModules.initComments).not.toHaveBeenCalled();
    });

    it('will not load if comments functionality is enabled but not an article page', async () => {
      global.JSGlobals = {
        userComments: true,
        article: false,
      };
      await executeMainJs();
      expect(mockModules.initComments).not.toHaveBeenCalled();
    });

    it('will load if comments functionality is enabled on article pages', async () => {
      mockSensitiveArticle();
      global.JSGlobals.userComments = true;
      await executeMainJs();
      expect(mockModules.initComments).toHaveBeenCalledTimes(1);
    });
  });

  describe('init bookmark module', () => {
    it('will not load under non-uk domain', () => {
      global.JSGlobals.domain = 'some-non-uk-domain';
      executeMainJs();
      expect(mockModules.initBookmark).not.toHaveBeenCalled();
    });

    it('will not load under non-article pages under UK domain', () => {
      global.JSGlobals.domain = PUBLICATION_UK;
      global.JSGlobals.article = false;
      executeMainJs();
      expect(mockModules.initBookmark).not.toHaveBeenCalled();
    });

    it('will load under UK article pages', () => {
      global.JSGlobals.domain = PUBLICATION_UK;
      mockSensitiveArticle();
      executeMainJs();
      expect(mockModules.initBookmark).not.toHaveBeenCalled();
    });
  });

  describe('init competition module', () => {
    it('will not load if login functionality is not enabled', async () => {
      global.JSGlobals.userLogin = false;
      await executeMainJs();
      expect(mockModules.initCompetition).not.toHaveBeenCalled();
    });

    it('will not load if login functionality is enabled on non-article pages', async () => {
      global.JSGlobals.userLogin = true;
      global.JSGlobals.article = false;
      await executeMainJs();
      expect(mockModules.initCompetition).not.toHaveBeenCalled();
    });

    it('will not load if login functionality is enabled on non-article pages', async () => {
      global.JSGlobals.userLogin = true;
      mockSensitiveArticle();
      await executeMainJs();
      expect(mockModules.initCompetition).toHaveBeenCalledTimes(1);
    });
  });

  describe('init Braze on logged in user visit module', () => {
    it('will not load if user is not logged in', async () => {
      mockModules.isUserLoggedInClientSide.mockReturnValueOnce(false);
      await executeMainJs();
      expect(mockModules.initBrazeOnLoggedInUserVisit).not.toHaveBeenCalled();
    });

    it('will load if user is logged in', async () => {
      mockModules.isUserLoggedInClientSide.mockReturnValueOnce(true);
      await executeMainJs();
      expect(mockModules.initBrazeOnLoggedInUserVisit).toHaveBeenCalledTimes(1);
    });
  });

  describe('hard refresh module', () => {
    it('will not load on non-section pages', async () => {
      global.JSGlobals.isSection = false;
      await executeMainJs();
      expect(mockModules.hardRefresh).not.toHaveBeenCalled();
    });

    it('will load on section pages', async () => {
      global.JSGlobals.isSection = true;
      window.digitalData.user_status = 'premium';
      await executeMainJs();
      expect(mockModules.hardRefresh).toHaveBeenCalledTimes(1);
    });
  });

  describe('locale module', () => {
    it('will not load under non-uk domain', async () => {
      global.JSGlobals.domain = 'some-non-uk-domain';
      await executeMainJs();
      expect(mockModules.locale).not.toHaveBeenCalled();
    });

    it('will load under UK domain', async () => {
      global.JSGlobals.domain = PUBLICATION_UK;
      await executeMainJs();
      expect(mockModules.locale).toHaveBeenCalledTimes(1);
    });
  });

  describe('google search module', () => {
    it('will not load if cse id is not available', async () => {
      global.JSGlobals.cseId = null;
      await executeMainJs();
      expect(mockModules.initGoogleSearch).not.toHaveBeenCalled();
    });

    it('will load the correct number of times if cse id is available (AMP)', async () => {
      const mockCseId = 'some-cse-id';
      global.JSGlobals.cseId = mockCseId;
      await executeMainJs();
      expect(mockModules.initGoogleSearch).toHaveBeenCalledTimes(2);
      expect(mockModules.initGoogleSearch).toHaveBeenCalledWith(mockCseId, 0);
    });

    it('will load the correct number of times if cse id is available (native)', async () => {
      const mockCseId = 'some-cse-id';
      mockModules.isFeatureFlagEnabled.mockImplementation(
        (flag) => flag === COOKIE_FEAT_NO_AMP,
      );
      global.JSGlobals.cseId = mockCseId;
      await executeMainJs();
      expect(mockModules.initGoogleSearch).toHaveBeenCalledTimes(1);
      expect(mockModules.initGoogleSearch).toHaveBeenCalledWith(mockCseId, 0);
    });
  });

  describe('taboola module', () => {
    it('will not load taboola when the user has an ad-free subscription', async () => {
      mockModules.decodeJWT.mockReturnValueOnce({ [AD_FREE]: true });
      await executeMainJs();
      expect(mockModules.taboola).not.toHaveBeenCalled();
    });

    it('will load on non-sensitive articles', async () => {
      await executeMainJs();
      expect(mockModules.taboola).toHaveBeenCalledTimes(1);
    });

    it('will not load on sensitive articles not under crime section', async () => {
      const mockSectionCategory = 'some-section-category';
      mockSensitiveArticle();
      mockModules.isInSectionBySourcePath.mockReturnValueOnce(false);
      global.JSGlobals.article.sectionCategory = mockSectionCategory;
      await executeMainJs();
      expect(mockModules.taboola).not.toHaveBeenCalled();
      expect(mockModules.isInSectionBySourcePath).toHaveBeenCalledTimes(1);
      expect(mockModules.isInSectionBySourcePath).toHaveBeenCalledWith(
        mockSectionCategory,
        SECTION_NAME_CRIME,
      );
    });

    it('will load on sensitive articles under crime section', async () => {
      mockSensitiveArticle();
      mockModules.isInSectionBySourcePath.mockReturnValueOnce(true);
      await executeMainJs();
      expect(mockModules.taboola).toHaveBeenCalledTimes(1);
    });
  });

  describe('polar module', () => {
    it('will not load on non-article pages', async () => {
      global.JSGlobals.article = false;
      await executeMainJs();
      expect(mockModules.polar).not.toHaveBeenCalled();
    });

    it('will not load on article pages under ES domain', async () => {
      mockSensitiveArticle();
      global.JSGlobals.domain = PUBLICATION_ES;
      await executeMainJs();
      expect(mockModules.polar).not.toHaveBeenCalled();
    });

    it('will load on article pages under non-ES domain', async () => {
      mockSensitiveArticle();
      global.JSGlobals.domain = PUBLICATION_UK;
      await executeMainJs();
      expect(mockModules.polar).toHaveBeenCalledTimes(1);
    });
  });

  describe('init Braze push page notifications module', () => {
    it('will not load under ES domain', async () => {
      global.JSGlobals.domain = PUBLICATION_ES;
      await executeMainJs();
      expect(mockModules.initBrazePushPageNotifications).not.toHaveBeenCalled();
    });

    it('will not load under non-ES domain for other pages than than /web-push', async () => {
      global.JSGlobals.domain = PUBLICATION_UK;
      await executeMainJs();
      expect(mockModules.initBrazePushPageNotifications).not.toHaveBeenCalled();
    });

    it('will load under non-ES domain for /web-push page', async () => {
      global.JSGlobals.domain = PUBLICATION_UK;
      window.location.pathname = PATH_WEB_PUSH;
      await executeMainJs();
      expect(mockModules.initBrazePushPageNotifications).toHaveBeenCalledTimes(
        1,
      );
    });
  });
  describe('betting module', () => {
    beforeEach(() => {
      global.JSGlobals = { domain: PUBLICATION_UK };
      mockTruthyConsent();
    });

    it('should load if the article is in Sport section', async () => {
      mockModules.isSport.mockReturnValueOnce(true);
      await executeMainJs();
      expect(mockModules.bettingAnalyticsTag).toHaveBeenCalledTimes(1);
      expect(mockModules.bettingAnalyticsTag).toHaveBeenCalledWith(true);
    });

    it('should load if the article is in Games section', async () => {
      mockModules.isGames.mockReturnValueOnce(true);
      await executeMainJs();
      expect(mockModules.bettingAnalyticsTag).toHaveBeenCalledTimes(1);
      expect(mockModules.bettingAnalyticsTag).toHaveBeenCalledWith(true);
    });

    it('should not load if the article is not in Sport or Games section', async () => {
      mockModules.isSport.mockReturnValueOnce(false);
      mockModules.isGames.mockReturnValueOnce(false);
      await executeMainJs();
      expect(mockModules.bettingAnalyticsTag).not.toHaveBeenCalled();
    });
  });
});

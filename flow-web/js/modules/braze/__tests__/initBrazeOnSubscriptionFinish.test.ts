/**
 * @jest-environment jsdom
 */

import { COOKIE_PUID, COOKIE_SUBSCRIBER_ORIGIN } from '#app/constants/cookies';

import { SUBSCRIBER_ORIGIN_UK } from '#app/constants/subscriberOrigin';

import { getCookie } from '#app/public/js/utils/cookie';
import * as getSubscriberOriginOnClient from '#app/public/js/utils/getSubscriberOriginOnClient';
import * as sentryUtils from '#app/public/js/utils/sentry';

import { BRAZE_EVENT_SUBSCRIPTION_FINISH } from '../constants';
import * as ensureBrazeDataIsImmediatelyLogged from '../ensureBrazeDataIsImmediatelyLogged';
import * as thatModule from '../initBrazeOnSubscriptionFinish';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');
jest.mock('#app/public/js/utils/cookie');

describe('initBrazeOnSubscriptionFinish module', () => {
  const mockInitBrazeSDK = initBrazeSDK as jest.MockedFunction<
    typeof initBrazeSDK
  >;
  const mockGetCookie = getCookie as jest.MockedFunction<typeof getCookie>;
  const mockUid = 'some-uid';
  const mockOrigin = 'some-origin';

  beforeEach(() => {
    window.braze = {
      logCustomEvent: jest.fn(),
      requestImmediateDataFlush: jest.fn(),
    } as unknown as typeof window.braze;
    window.Sentry = {
      captureMessage: jest.fn(),
    } as unknown as typeof window.Sentry;
    mockGetCookie.mockImplementation(
      (cookieName) =>
        ({
          [COOKIE_PUID]: mockUid,
          [COOKIE_SUBSCRIBER_ORIGIN]: mockOrigin,
        })[cookieName] ?? '',
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    delete window.braze;
    delete window.Sentry;
    jest.restoreAllMocks();
  });

  describe('trackSubscriptionFinishViaSentry()', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('will capture the Braze subscription_finish event via Sentry with the correct tags and user data', () => {
      jest
        .spyOn(getSubscriberOriginOnClient, 'getSubscriberOriginOnClient')
        .mockReturnValueOnce(SUBSCRIBER_ORIGIN_UK);
      thatModule.trackSubscriptionFinishViaSentry();
      expect(window.Sentry?.captureMessage).toHaveBeenCalledTimes(1);
      expect(window.Sentry?.captureMessage).toHaveBeenCalledWith(
        BRAZE_EVENT_SUBSCRIPTION_FINISH,
        {
          tags: {
            braze: BRAZE_EVENT_SUBSCRIPTION_FINISH,
          },
          user: {
            id: mockUid,
            geo: {
              region: SUBSCRIBER_ORIGIN_UK,
            },
          },
        },
      );
    });
  });

  describe('trackSubscriptionFinishViaSentryIfLoaded()', () => {
    let mockIsSentryEnabledClientSide: jest.SpyInstance;

    beforeEach(() => {
      mockIsSentryEnabledClientSide = jest
        .spyOn(sentryUtils, 'isSentryEnabledClientSide')
        .mockImplementation();
      jest
        .spyOn(thatModule, 'trackSubscriptionFinishViaSentry')
        .mockImplementation();
    });

    it('will track subscription finish event via Sentry if Sentry is enabled', () => {
      mockIsSentryEnabledClientSide.mockReturnValueOnce(true);
      thatModule.trackSubscriptionFinishViaSentryIfLoaded();
      expect(mockIsSentryEnabledClientSide).toHaveBeenCalledTimes(1);
      expect(thatModule.trackSubscriptionFinishViaSentry).toHaveBeenCalledTimes(
        1,
      );
    });

    it('will not call subscription_finish event via Sentry if Sentry is not enabled', () => {
      mockIsSentryEnabledClientSide.mockReturnValueOnce(false);
      thatModule.trackSubscriptionFinishViaSentryIfLoaded();
      expect(
        thatModule.trackSubscriptionFinishViaSentry,
      ).not.toHaveBeenCalled();
    });
  });

  describe('trackSubscriptionFinishViaBraze()', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('will log the subscription_finish event via Braze and ensure the event is immediately dispatched by the SDK', () => {
      jest
        .spyOn(ensureBrazeDataIsImmediatelyLogged, 'default')
        .mockImplementation();
      thatModule.trackSubscriptionFinishViaBraze();
      expect(window.braze?.logCustomEvent).toHaveBeenCalledTimes(1);
      expect(window.braze?.logCustomEvent).toHaveBeenCalledWith(
        BRAZE_EVENT_SUBSCRIPTION_FINISH,
      );
      expect(ensureBrazeDataIsImmediatelyLogged.default).toHaveBeenCalledTimes(
        1,
      );
    });
  });

  describe('trackSubscriptionFinishViaBrazeAndSentry()', () => {
    let mockTrackSubscriptionFinishViaBraze: jest.SpyInstance;
    let mockTrackSubscriptionFinishViaSentryIfLoaded: jest.SpyInstance;

    beforeEach(() => {
      mockTrackSubscriptionFinishViaBraze = jest
        .spyOn(thatModule, 'trackSubscriptionFinishViaBraze')
        .mockImplementation();
      mockTrackSubscriptionFinishViaSentryIfLoaded = jest
        .spyOn(thatModule, 'trackSubscriptionFinishViaSentryIfLoaded')
        .mockImplementation();
    });

    it('will correctly track subscription_finish event via Braze and Sentry if Braze is initialised', async () => {
      mockInitBrazeSDK.mockResolvedValueOnce(true);
      await thatModule.trackSubscriptionFinishViaBrazeAndSentry();
      expect(mockInitBrazeSDK).toHaveBeenCalledTimes(1);
      expect(mockTrackSubscriptionFinishViaBraze).toHaveBeenCalledTimes(1);
      expect(
        mockTrackSubscriptionFinishViaSentryIfLoaded,
      ).toHaveBeenCalledTimes(1);
    });

    it('will not track subscription_finish event via Braze and Sentry if Braze is not initialised', async () => {
      mockInitBrazeSDK.mockResolvedValueOnce(false);
      await thatModule.trackSubscriptionFinishViaBrazeAndSentry();
      expect(mockTrackSubscriptionFinishViaBraze).not.toHaveBeenCalled();
      expect(
        mockTrackSubscriptionFinishViaSentryIfLoaded,
      ).not.toHaveBeenCalled();
    });
  });

  describe('initBrazeOnSubscriptionFinish()', () => {
    describe('unit tests', () => {
      let mockTrackSubscriptionFinishViaBrazeAndSentry: jest.SpyInstance;

      beforeEach(() => {
        mockTrackSubscriptionFinishViaBrazeAndSentry = jest
          .spyOn(thatModule, 'trackSubscriptionFinishViaBrazeAndSentry')
          .mockResolvedValue();
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it('will not console error on successful attempt to track the subscription_finish event via Braze and Sentry', async () => {
        await thatModule.initBrazeOnSubscriptionFinish();
        expect(
          mockTrackSubscriptionFinishViaBrazeAndSentry,
        ).toHaveBeenCalledTimes(1);
        expect(console.error).not.toHaveBeenCalled();
      });

      it('will recover and console error if fails to track subscription_finish event via Braze and Sentry', async () => {
        const mockErrorMessage = 'test error';
        mockTrackSubscriptionFinishViaBrazeAndSentry.mockRejectedValueOnce(
          new Error(mockErrorMessage),
        );
        await thatModule.initBrazeOnSubscriptionFinish();
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
          `Error logging ${BRAZE_EVENT_SUBSCRIPTION_FINISH} Braze event:`,
          mockErrorMessage,
        );
      });
    });

    describe('integration tests', () => {
      const mockBrazeSDKEnabled = () =>
        mockInitBrazeSDK.mockResolvedValueOnce(true);
      const mockSentryEnabled = () =>
        (window.JSGlobals.featureFlags.feat__sentry = true);
      const mockSentryDisabled = () =>
        (window.JSGlobals.featureFlags.feat__sentry = false);

      beforeEach(() => {
        window.JSGlobals = {
          featureFlags: {},
        } as unknown as typeof window.JSGlobals;
      });

      afterAll(() => {
        window.JSGlobals = undefined as unknown as typeof window.JSGlobals;
      });

      it('will not attempt to track subscription_finish event at all if the Braze SDK is not initialised', async () => {
        mockInitBrazeSDK.mockResolvedValueOnce(false);
        await thatModule.initBrazeOnSubscriptionFinish();
        expect(mockInitBrazeSDK).toHaveBeenCalledTimes(1);
        expect(window.braze?.logCustomEvent).not.toHaveBeenCalled();
        expect(window.Sentry?.captureMessage).not.toHaveBeenCalled();
      });

      it('will only track the subscription_finish event via Braze if the Braze SDK is initialised but Sentry is not enabled', async () => {
        mockBrazeSDKEnabled();
        mockSentryDisabled();
        await thatModule.initBrazeOnSubscriptionFinish();
        expect(window.braze?.logCustomEvent).toHaveBeenCalledTimes(1);
        expect(window.braze?.requestImmediateDataFlush).toHaveBeenCalledTimes(
          1,
        );
        expect(window.Sentry?.captureMessage).not.toHaveBeenCalled();
      });

      it('will track the subscription_finish event via Braze and Sentry if both the Braze SDK and Sentry are initialised', async () => {
        mockBrazeSDKEnabled();
        mockSentryEnabled();
        await thatModule.initBrazeOnSubscriptionFinish();
        expect(window.braze?.logCustomEvent).toHaveBeenCalledTimes(1);
        expect(window.braze?.requestImmediateDataFlush).toHaveBeenCalledTimes(
          1,
        );
        expect(window.Sentry?.captureMessage).toHaveBeenCalledTimes(1);
      });
    });
  });
});

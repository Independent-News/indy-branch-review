/**
 * @jest-environment jsdom
 */

/* cspell:words ccpa */

import {
  COOKIE_AUTH,
  COOKIE_LOGGED_IN,
  COOKIE_PUID,
  COOKIE_SUBSCRIBER,
} from '#app/constants/cookies';

import { CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL } from '#app/constants/localStorage';
import { AD_FREE, MessageType } from '#app/constants/sourcepoint';
import {
  SUBSCRIBER_ORIGIN_EU,
  SUBSCRIBER_ORIGIN_UK,
} from '#app/constants/subscriberOrigin';

import type {
  SourcePointOnConsentReady,
  SourcePointOnError,
  SourcePointOnMessageChoiceSelect,
} from '#types/sourcePoint';

describe('sourcepoint public JS', () => {
  const mockMessageType = MessageType.GDPR;
  const mockUserToken = 'some-user-token';

  let mockGetCookie: jest.SpyInstance;
  let mockDecodeUserJWTOnClient: jest.SpyInstance;

  beforeEach(async () => {
    jest.doMock('../utils/cookie', () => {
      return {
        __esModule: true,
        getCookie: jest.fn(),
      };
    });
    jest.doMock('../decodeUserJWTOnClient', () => {
      return { __esModule: true, default: jest.fn() };
    });

    const cookieUtil = await import('../utils/cookie');
    const decodeUserJWTOnClient = await import('../decodeUserJWTOnClient');

    mockGetCookie = jest.spyOn(cookieUtil, 'getCookie');
    mockDecodeUserJWTOnClient = jest.spyOn(decodeUserJWTOnClient, 'default');

    mockDecodeUserJWTOnClient.mockReturnValue({ [AD_FREE]: true });
    mockGetCookie.mockImplementation(
      (cookieName: string) =>
        ({
          [COOKIE_LOGGED_IN]: 'true', // First call: COOKIE_LOGGED_IN
          [COOKIE_PUID]: mockUserToken, // Second call: COOKIE_PUID
          [COOKIE_AUTH]: mockUserToken, // Third call: COOKIE_AUTH
          [COOKIE_SUBSCRIBER]: 'true', // Fourth call: COOKIE_SUBSCRIBER
        })[cookieName],
    );
    window.__SP_SCRIPT_TAG_ID__ = 'some-script-tag-id';
    window.__SP_EVENT_ERROR__ = 'some-event-error';
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  afterAll(() => {
    jest.restoreAllMocks();
    delete window._sp_;
  });

  it('will expose correct global data to SourcePoint via the window object', async () => {
    await import('../sourcepoint');

    expect(window._sp_).toMatchInlineSnapshot(`
      {
        "config": {
          "authId": "some-user-token",
          "events": {
            "onConsentReady": [Function],
            "onError": [Function],
            "onMessageChoiceSelect": [Function],
          },
          "propertyHref": "http://localhost",
          "targetingParams": {
            "ad_free": true,
            "premium": true,
            "registered": true,
          },
        },
      }
    `);

    expect(mockDecodeUserJWTOnClient).toHaveBeenCalledTimes(1);
    expect(mockGetCookie).toHaveBeenCalledTimes(3);
    expect(mockGetCookie).toHaveBeenCalledWith(COOKIE_LOGGED_IN);
    expect(mockGetCookie).toHaveBeenCalledWith(COOKIE_PUID);
    expect(mockGetCookie).toHaveBeenCalledWith(COOKIE_SUBSCRIBER);
  });

  it('will console warn, dispatch custom event and notify SourcePoint on load error', async () => {
    const mockSpScriptTagElementObject = document.createElement('script');
    mockSpScriptTagElementObject.error = 0;
    jest
      .spyOn(document, 'getElementById')
      .mockReturnValueOnce(mockSpScriptTagElementObject);
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(window, 'dispatchEvent').mockImplementation();

    await import('../sourcepoint');

    const onError = window._sp_!.config!.events!.onError as SourcePointOnError;
    const mockErrorCode = 'some-error-code';
    onError(mockMessageType, mockErrorCode);
    expect(console.warn).toHaveBeenCalledTimes(2);
    expect(console.warn).toHaveBeenNthCalledWith(
      1,
      'CMP error',
      `code: ${mockErrorCode}`,
    );
    expect(console.warn).toHaveBeenNthCalledWith(
      2,
      'CMP error',
      `message: ${mockMessageType}`,
    );
    expect(document.getElementById).toHaveBeenCalledTimes(1);
    expect(document.getElementById).toHaveBeenCalledWith(
      window.__SP_SCRIPT_TAG_ID__,
    );
    expect(mockSpScriptTagElementObject.error).toBe(1);
    expect(window.dispatchEvent).toHaveBeenCalledTimes(1);
    expect(window.dispatchEvent).toHaveBeenCalledWith(
      new CustomEvent(window.__SP_EVENT_ERROR__ as string),
    );
  });

  it('will cache the original url when user redirect elsewhere under consent or pay journey', async () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
      },
    });

    await import('../sourcepoint');

    const onMessageChoiceSelect = window._sp_!.config!.events!
      .onMessageChoiceSelect as SourcePointOnMessageChoiceSelect;
    const mockChoiceId = 'test-choice-id';
    const mockChoiceTypeId = 9;
    onMessageChoiceSelect(mockMessageType, mockChoiceId, mockChoiceTypeId);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      CONSENT_TO_PAY_ORIGINAL_PAGE_REDIRECT_URL,
      window.location.href,
    );
  });

  it('will update privacy settings element and expose correctly functioning click event callback for California region', async () => {
    const mockPrivacySettingsElementObject = document.createElement(
      'a',
    ) as NonNullable<HTMLElement>;
    jest
      .spyOn(document, 'getElementById')
      .mockReturnValueOnce(mockPrivacySettingsElementObject);

    await import('../sourcepoint');

    const onConsentReady = window._sp_!.config!.events!
      .onConsentReady as SourcePointOnConsentReady;
    const mockInfo = { applies: true };
    onConsentReady(MessageType.CCPA, 'some-uuid', 'some-string', mockInfo);
    expect(document.getElementById).toHaveBeenCalledTimes(1);
    expect(document.getElementById).toHaveBeenCalledWith('privacy-settings');
    expect(mockPrivacySettingsElementObject.innerHTML).toBe(
      'Do Not Sell or Share My Information',
    );
    expect(mockPrivacySettingsElementObject.onclick).toBeInstanceOf(Function);

    // callback test - assign after script load due to assignment of window._sp_ in the script
    window._sp_ = {
      ccpa: {
        loadPrivacyManagerModal: jest.fn() as jest.Mock,
      },
    };

    mockPrivacySettingsElementObject.click();
    expect(window._sp_?.ccpa?.loadPrivacyManagerModal).toHaveBeenCalledTimes(1);
    expect(window._sp_?.ccpa?.loadPrivacyManagerModal).toHaveBeenCalledWith(
      883186,
    );
  });

  describe('GDPR regions privacy manager', () => {
    const testCases = [
      {
        geoLocation: SUBSCRIBER_ORIGIN_UK,
        privacyManagerId: 1141355,
      },
      {
        geoLocation: SUBSCRIBER_ORIGIN_UK,
        privacyManagerId: 1171350,
        isAdFree: false,
      },
      {
        geoLocation: SUBSCRIBER_ORIGIN_EU,
        privacyManagerId: 559246,
      },
    ];

    it.each(testCases)(
      'will update privacy settings element and expose correctly functioning click event callback for $geoLocation',
      async ({ geoLocation, privacyManagerId, isAdFree = true }) => {
        mockDecodeUserJWTOnClient.mockReturnValue({ [AD_FREE]: isAdFree });

        mockGetCookie.mockReturnValue(geoLocation);

        const mockPrivacySettingsElementObject = document.createElement(
          'a',
        ) as NonNullable<HTMLAnchorElement>;

        jest
          .spyOn(document, 'getElementById')
          .mockReturnValueOnce(mockPrivacySettingsElementObject);

        await import('../sourcepoint');

        const onConsentReady = window._sp_!.config!.events!.onConsentReady;
        const mockInfo = { applies: true };
        onConsentReady(mockMessageType, 'some-uuid', 'some-string', mockInfo);

        expect(document.getElementById).toHaveBeenCalledTimes(1);
        expect(document.getElementById).toHaveBeenCalledWith(
          'privacy-settings',
        );
        expect(mockPrivacySettingsElementObject.innerHTML).toBe(
          'Privacy settings',
        );
        expect(mockPrivacySettingsElementObject.onclick).toBeInstanceOf(
          Function,
        );

        // callback test - assign after script load due to assignment of window._sp_ in the script
        Object.defineProperties(window._sp_, {
          gdpr: {
            value: {
              loadPrivacyManagerModal: jest.fn(),
            },
          },
        });

        if (mockPrivacySettingsElementObject.onclick) {
          mockPrivacySettingsElementObject.onclick(new MouseEvent('click'));
        }

        expect(
          window._sp_?.gdpr?.loadPrivacyManagerModal,
        ).toHaveBeenCalledTimes(1);

        expect(window._sp_?.gdpr?.loadPrivacyManagerModal).toHaveBeenCalledWith(
          privacyManagerId,
        );
      },
    );
  });
});

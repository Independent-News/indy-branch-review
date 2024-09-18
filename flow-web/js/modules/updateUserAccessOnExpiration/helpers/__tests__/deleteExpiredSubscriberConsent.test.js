/**
 * @jest-environment jsdom
 */

import * as cookieUtils from '#app/public/js/utils/cookie';

import deleteExpiredSubscriberConsent, {
  forceSpToRegenerateConsentFromOrigin,
} from '../deleteExpiredSubscriberConsent';

describe('deleteExpiredSubscriberConsent()', () => {
  let getCookie;
  const mockConsentUUID = 'some-consent-uuid';
  const mockSiteId = 123;
  const mockAuthId = 'some-auth-id';
  const expectedLocalStorageKey = `_sp_user_consent_${mockSiteId}`;

  beforeAll(() => {
    global.fetch = jest.fn();
    Object.defineProperty(window, 'localStorage', {
      value: {
        removeItem: jest.fn(),
      },
    });
  });

  beforeEach(() => {
    window._sp_ = {
      metricData: {
        propertyId: mockSiteId,
      },
      config: {
        authId: mockAuthId,
      },
    };
    getCookie = jest.spyOn(cookieUtils, 'getCookie').mockImplementation(
      (cookieName) =>
        ({
          ['consentUUID']: mockConsentUUID,
        })[cookieName],
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    delete global.fetch;
    delete window._sp_;
    delete window.localStorage;
    jest.restoreAllMocks();
  });

  describe('forceSpToRegenerateConsentFromOrigin()', () => {
    it('will remove cached consent data to force SourcePoint to request updated data from their apis', () => {
      forceSpToRegenerateConsentFromOrigin(mockSiteId);
      expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
      expect(localStorage.removeItem).toHaveBeenCalledWith(
        expectedLocalStorageKey,
      );
    });
  });

  describe('default', () => {
    it('will not throw on successful delete request using exposed SourcePoint site id, user consent UUID and auth ID', async () => {
      global.fetch.mockResolvedValueOnce({ ok: true });
      await deleteExpiredSubscriberConsent();
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://cdn.privacy-mgmt.com/consent/tcfv2/consent/v3/${mockSiteId}?consentUUID=${mockConsentUUID}&authId=${mockAuthId}`,
        {
          method: 'DELETE',
        },
      );
      expect(getCookie).toHaveBeenCalledTimes(1);
      expect(getCookie).toHaveBeenCalledWith('consentUUID');
      expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
      expect(localStorage.removeItem).toHaveBeenCalledWith(
        expectedLocalStorageKey,
      );
    });

    it('will make delete request using empty strings for consent UUID and auth id if not exposed', async () => {
      window._sp_ = {
        metricData: {
          propertyId: mockSiteId,
        },
        config: {
          authId: null,
        },
      };
      cookieUtils.getCookie.mockImplementationOnce(
        (cookieName) =>
          ({
            ['consentUUID']: null,
          })[cookieName],
      );
      global.fetch.mockResolvedValueOnce({ ok: true });
      await deleteExpiredSubscriberConsent();
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://cdn.privacy-mgmt.com/consent/tcfv2/consent/v3/${mockSiteId}?consentUUID=&authId=`,
        {
          method: 'DELETE',
        },
      );
    });

    it('will throw on unsuccessful delete request to SourcePoint', async () => {
      global.fetch.mockResolvedValueOnce({ ok: false });
      await expect(deleteExpiredSubscriberConsent()).rejects.toThrow(
        'Failed to delete user consent: {"ok":false}',
      );
      expect(localStorage.removeItem).not.toHaveBeenCalled();
    });
  });
});

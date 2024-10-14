/**
 * @jest-environment jsdom
 */

import * as cookieUtils from '#app/public/js/utils/cookie';

import deleteExpiredSubscriberConsent, {
  forceSpToRegenerateConsentFromOrigin,
} from '../deleteExpiredSubscriberConsent';

import type { MockedFetch } from '#types/jest';

describe('deleteExpiredSubscriberConsent()', () => {
  let getCookie: jest.SpyInstance;
  const mockConsentUUID = 'some-consent-uuid';
  const mockSiteId = 123;
  const mockAuthId = 'some-auth-id';
  const expectedLocalStorageKey = `_sp_user_consent_${mockSiteId}`;
  let mockFetch: MockedFetch;

  beforeAll(() => {
    global.fetch = jest.fn();
    mockFetch = global.fetch as MockedFetch;
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
    } as unknown as typeof window._sp_;
    getCookie = jest.spyOn(cookieUtils, 'getCookie').mockImplementation(
      (cookieName) =>
        ({
          ['consentUUID']: mockConsentUUID,
        })[cookieName] ?? '',
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    global.fetch = undefined as unknown as typeof fetch;
    delete window._sp_;
    Object.defineProperty(window, 'localStorage', {});
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
    it('will immediately throw with relevant error message if no SourcePoint ID is exposed to the client', async () => {
      delete window._sp_;
      await expect(deleteExpiredSubscriberConsent()).rejects.toThrow(
        'Failed to retrieve SourcePoint site id',
      );
    });

    it('will not throw on successful delete request using exposed SourcePoint site id, user consent UUID and auth ID', async () => {
      mockFetch.mockResolvedValueOnce({ ok: true } as Response);
      await deleteExpiredSubscriberConsent();
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
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
      } as unknown as typeof window._sp_;
      getCookie.mockImplementationOnce(
        (cookieName: string) =>
          ({
            ['consentUUID']: null,
          })[cookieName],
      );
      mockFetch.mockResolvedValueOnce({ ok: true } as Response);
      await deleteExpiredSubscriberConsent();
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
        `https://cdn.privacy-mgmt.com/consent/tcfv2/consent/v3/${mockSiteId}?consentUUID=&authId=`,
        {
          method: 'DELETE',
        },
      );
    });

    it('will throw on unsuccessful delete request to SourcePoint', async () => {
      mockFetch.mockResolvedValueOnce({ ok: false } as Response);
      await expect(deleteExpiredSubscriberConsent()).rejects.toThrow(
        'Failed to delete user consent: {"ok":false}',
      );
      expect(localStorage.removeItem).not.toHaveBeenCalled();
    });
  });
});

/**
 * @jest-environment jsdom
 */

import { COOKIE_AUTH, COOKIE_LOGGED_IN } from '#app/constants/cookies';

import * as cookieUtils from '#app/public/js/utils/cookie';

import * as decodeUserJWTOnClient from '../../decodeUserJWTOnClient';
import updateAdFreeOrDonatorCookiesOnExpiration from '../updateAdFreeOrDonatorCookiesOnExpiration';
import * as updateUserAdFreeAccessOnExpiration from '../updateUserAccessOnExpiration/updateUserAdFreeAccessOnExpiration';
import * as updateUserDonatorAccessOnExpiration from '../updateUserAccessOnExpiration/updateUserDonatorAccessOnExpiration';

import type { UserJwtPayload } from '#types/user';

describe('updateAdFreeOrDonatorCookiesOnExpiration', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('unit tests', () => {
    const mockAdFreeExpiryTimestamp = 1;
    const mockRecurringDonatorExpiryTimestamp = 2;

    beforeEach(() => {
      jest.spyOn(decodeUserJWTOnClient, 'default').mockReturnValueOnce({
        isAdFreeUser: false,
        isActiveRecurringDonator: true,
        adFreeExpiryTimestamp: mockAdFreeExpiryTimestamp,
        recurringDonatorExpiryTimestamp: mockRecurringDonatorExpiryTimestamp,
      } as unknown as UserJwtPayload);
      jest
        .spyOn(updateUserAdFreeAccessOnExpiration, 'default')
        .mockResolvedValue();
      jest
        .spyOn(updateUserDonatorAccessOnExpiration, 'default')
        .mockResolvedValue();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it("will decode the user's JWT token and attempt to update their access on potential expiration for either donators or ad-free subscribers", async () => {
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(decodeUserJWTOnClient.default).toHaveBeenCalledTimes(1);
      expect(updateUserAdFreeAccessOnExpiration.default).toHaveBeenCalledTimes(
        1,
      );
      expect(updateUserAdFreeAccessOnExpiration.default).toHaveBeenCalledWith(
        false,
        mockAdFreeExpiryTimestamp,
      );
      expect(updateUserDonatorAccessOnExpiration.default).toHaveBeenCalledWith(
        true,
        mockRecurringDonatorExpiryTimestamp,
      );
    });
  });

  describe('integration tests', () => {
    const mockExpiredAdFreeJwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkRnJlZVVzZXIiOnRydWUsImlzQWN0aXZlUmVjdXJyaW5nRG9uYXRvciI6ZmFsc2UsImFkRnJlZUV4cGlyeVRpbWVzdGFtcCI6MTM0MTEzMjUyMCwicmVjdXJyaW5nRG9uYXRvckV4cGlyeVRpbWVzdGFtcCI6bnVsbH0.Q1ImswgvsFHC7vJNMyEAqxX6y9adtbFmoOlLhNcz1kk';
    const mockActiveAdFreeJwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkRnJlZVVzZXIiOnRydWUsImlzQWN0aXZlUmVjdXJyaW5nRG9uYXRvciI6ZmFsc2UsImFkRnJlZUV4cGlyeVRpbWVzdGFtcCI6NDExODExNDkyMCwicmVjdXJyaW5nRG9uYXRvckV4cGlyeVRpbWVzdGFtcCI6bnVsbH0.nM2tCCHdBklm49V3_rZtePbe0HY28ij7s4xazkn0opY';
    const mockActiveDonatorJwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkRnJlZVVzZXIiOmZhbHNlLCJpc0FjdGl2ZVJlY3VycmluZ0RvbmF0b3IiOnRydWUsImFkRnJlZUV4cGlyeVRpbWVzdGFtcCI6bnVsbCwicmVjdXJyaW5nRG9uYXRvckV4cGlyeVRpbWVzdGFtcCI6NDExODExNDkyMH0.-pCriseyLLK-_bc-zTZTdcJLTGn4MrRGs0-hdh93GVs';
    const mockExpiredDonatorJwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkRnJlZVVzZXIiOmZhbHNlLCJpc0FjdGl2ZVJlY3VycmluZ0RvbmF0b3IiOnRydWUsImFkRnJlZUV4cGlyeVRpbWVzdGFtcCI6bnVsbCwicmVjdXJyaW5nRG9uYXRvckV4cGlyeVRpbWVzdGFtcCI6MTM0MTEzMjUyMH0.0qNCQ5u1KKKo8gCHWr8fhJJSLAR1mWXnteHM3fMSQs0';
    const mockNonAdFreeNonDonatorJwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkRnJlZVVzZXIiOmZhbHNlLCJpc0FjdGl2ZVJlY3VycmluZ0RvbmF0b3IiOmZhbHNlLCJhZEZyZWVFeHBpcnlUaW1lc3RhbXAiOm51bGwsInJlY3VycmluZ0RvbmF0b3JFeHBpcnlUaW1lc3RhbXAiOm51bGx9.vPJCY8b1Oc4YwV_cBhDbCQfOkrM47lZGRRfYAisOExo';
    const mockServerError = 'some-error-message';
    let mockFetch: jest.MockedFunction<typeof fetch>;
    let mockGetCookie: jest.SpyInstance;
    const mockUserJwtTokenCookie = (userToken: string) =>
      mockGetCookie.mockImplementation(
        (cookieName: string) =>
          ({
            [COOKIE_AUTH]: userToken,
            [COOKIE_LOGGED_IN]: 'true',
            __DEBUG__: 'true', // force console.error
          })[cookieName] ?? null,
      );
    const collectCalledFetchEndpoints = () =>
      mockFetch.mock.calls.map(([endpoint]) => endpoint);

    beforeAll(() => {
      global.fetch = jest.fn();
      mockFetch = fetch as jest.MockedFunction<typeof fetch>;
      window._sp_ = {
        metricData: {
          propertyId: 123,
        },
        config: {
          authId: 'some-auth-id',
        },
      } as unknown as Window['_sp_'];
    });

    beforeEach(() => {
      mockGetCookie = jest.spyOn(cookieUtils, 'getCookie');
    });

    afterAll(() => {
      jest.restoreAllMocks();
      global.fetch = undefined as unknown as typeof fetch;
      window._sp_ = undefined as unknown as Window['_sp_'];
    });

    it('will not make any requests if anonymous user', async () => {
      mockGetCookie.mockImplementation(
        (cookieName: string) =>
          ({
            [COOKIE_AUTH]: null,
            [COOKIE_LOGGED_IN]: null,
          })[cookieName] ?? null,
      );
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('will only ensure active ad-free user is both identified as active in their Piano custom fields and cookies are updated in case access has been deleted via Piano dashboard if their ad-free subscription has yet to expire', async () => {
      mockUserJwtTokenCookie(mockActiveAdFreeJwtToken);
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(mockFetch).toHaveBeenCalledTimes(2);
      expect(collectCalledFetchEndpoints()).toEqual([
        '/api/user/ad-free-access/enable',
        '/api/user/logged-in-cookies/update',
      ]);
    });

    it("will only attempt to update user's access once if their donator access has yet to expire but they could be an expired ad-free subscriber", async () => {
      mockUserJwtTokenCookie(mockActiveDonatorJwtToken);
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('/api/user/ad-free-access/status');
    });

    it("will only attempt to update the user's access once if they are neither an ad-free subscriber nor a donator but are logged in", async () => {
      mockUserJwtTokenCookie(mockNonAdFreeNonDonatorJwtToken);
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('/api/user/ad-free-access/status');
    });

    it("will make three requests to update the user's access if their ad-free status has expired and they are not a donator", async () => {
      mockUserJwtTokenCookie(mockExpiredAdFreeJwtToken);
      mockFetch.mockResolvedValue({
        ok: true,
      } as Response);
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(mockFetch.mock.calls.length).toBeGreaterThanOrEqual(3);
      expect(collectCalledFetchEndpoints()).toEqual(
        expect.arrayContaining([
          expect.stringContaining(
            'https://cdn.privacy-mgmt.com/consent/tcfv2/consent/v3/',
          ),
          '/api/user/ad-free-access/disable',
          '/api/user/logged-in-cookies/update',
        ]),
      );
    });

    it("will make two requests to update the user's access if their donator status has expired and they are not an ad-free subscriber who could have potentially expired but has not", async () => {
      mockUserJwtTokenCookie(mockExpiredDonatorJwtToken);
      mockFetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({
          isAdFreeUser: false,
        }),
      } as unknown as Response);
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(mockFetch).toHaveBeenCalledTimes(2);
      expect(collectCalledFetchEndpoints()).toEqual([
        '/api/user/ad-free-access/status',
        '/api/user/logged-in-cookies/update',
      ]);
    });

    it("will make four requests to update the user's access if their donator status has expired and they are not an ad-free subscriber but previously was on last visit", async () => {
      mockUserJwtTokenCookie(mockExpiredDonatorJwtToken);
      mockFetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({
          isAdFreeUser: true,
        }),
      } as unknown as Response);
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(mockFetch).toHaveBeenCalledTimes(4);
      expect(collectCalledFetchEndpoints()).toEqual([
        '/api/user/ad-free-access/status',
        '/api/user/logged-in-cookies/update',
        expect.stringContaining(
          'https://cdn.privacy-mgmt.com/consent/tcfv2/consent/v3/',
        ),
        '/api/user/ad-free-access/disable',
      ]);
    });

    it("will console error on failed attempt to update user's access if fetch fails due to no internet", async () => {
      const mockFetchError = 'Failed to fetch';
      mockUserJwtTokenCookie(mockExpiredAdFreeJwtToken);
      mockFetch.mockRejectedValue(new Error(mockFetchError));
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        `Error, failed to update user's ad-free access on expiration: ${mockFetchError}`,
      );
    });

    it("will console error on failed attempt to update user's access if their ad-free status has expired and they are not a donator", async () => {
      mockUserJwtTokenCookie(mockExpiredAdFreeJwtToken);
      mockFetch.mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValueOnce(mockServerError),
      } as unknown as Response);
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(
        (console.error as unknown as jest.SpyInstance).mock.calls.length,
      ).toBeGreaterThanOrEqual(1);
      expect(console.error).toHaveBeenCalledWith(
        `Error, failed to identify user as active in Piano custom fields: ${mockServerError}`,
      );
    });

    it("will console error on failed attempt to update user's access if their donator status has expired and they are not an ad-free subscriber", async () => {
      mockUserJwtTokenCookie(mockExpiredDonatorJwtToken);
      mockFetch.mockImplementation((url: string | URL | Request) =>
        url === '/api/user/logged-in-cookies/update'
          ? Promise.resolve({
              ok: false,
              json: jest.fn().mockResolvedValueOnce(mockServerError),
            } as unknown as Response)
          : Promise.resolve({
              ok: true,
              json: jest.fn().mockResolvedValueOnce({
                isAdFreeUser: false,
              }),
            } as unknown as Response),
      );
      await updateAdFreeOrDonatorCookiesOnExpiration();
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        `Error, failed to update user's donator access on expiration: ${mockServerError}`,
      );
    });
  });
});

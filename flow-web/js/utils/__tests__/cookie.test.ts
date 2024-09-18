/**
 * @jest-environment jsdom
 */

import { COOKIE_AUTH, COOKIE_PUID } from '#app/constants/cookies';

import { getCookies, getCookiesByName } from '../cookie';

describe('getCookies', () => {
  let spyCookieGetter: jest.SpyInstance;

  beforeEach(() => {
    spyCookieGetter = jest.spyOn(global.document, 'cookie', 'get');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('getCookies()', () => {
    it('get all session cookies', () => {
      spyCookieGetter.mockReturnValue(
        'cookieName=cookieValue; secondCookie=secondValue;',
      );

      const cookies = getCookies();

      expect(cookies).toEqual({
        cookieName: 'cookieValue',
        secondCookie: 'secondValue',
      });
    });
  });

  describe('getCookiesByName()', () => {
    it('will get all cookies by provided name', () => {
      const mockUid = 'some-uid';
      const mockAuthToken = 'some-auth-token';
      spyCookieGetter.mockReturnValue(
        `${COOKIE_PUID}=${mockUid}; ${COOKIE_AUTH}=${mockAuthToken};`,
      );
      const cookies = getCookiesByName(COOKIE_PUID, COOKIE_AUTH);
      expect(cookies).toEqual([mockUid, mockAuthToken]);
    });
  });
});

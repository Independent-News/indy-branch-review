/**
 * @jest-environment jsdom
 */

import { setCookie } from '../cookie';

describe('Cookies module', () => {
  const Date = global.Date;

  const spyGetTime = jest.spyOn(global.Date.prototype, 'getTime');
  const spyCookieSetter = jest.spyOn(global.document, 'cookie', 'set');

  beforeAll(() => {
    spyGetTime.mockReturnValue(
      new Date('February 2, 2022, 22:22:22 GMT').getTime(),
    );
    spyCookieSetter.mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCookie()', () => {
    it('set session cookie', () => {
      setCookie('cookieName', 'cookieValue');
      expect(spyCookieSetter).toHaveBeenCalledWith(
        'cookieName=cookieValue;path=/;secure',
      );
    });

    it('set cookie with 3 days expire', () => {
      setCookie('cookieName', 'cookieValue', { days: 3 });
      expect(spyCookieSetter.mock.calls[0][0]).toMatchInlineSnapshot(
        `"cookieName=cookieValue;path=/;secure;expires=Sat, 05 Feb 2022 22:22:22 GMT"`,
      );
    });

    it('set cookie with 2 hours expire', () => {
      setCookie('cookieName', 'cookieValue', { hours: 2 });
      expect(spyCookieSetter.mock.calls[0][0]).toMatchInlineSnapshot(
        `"cookieName=cookieValue;path=/;secure;expires=Thu, 03 Feb 2022 00:22:22 GMT"`,
      );
    });
  });
});

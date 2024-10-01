/**
 * @jest-environment jsdom
 */

import { COOKIE_AUTH } from '#app/constants/cookies';

import * as cookieUtils from '#app/public/js/utils/cookie';

import detectEsiAuthCookieDeletion from '../detectEsiAuthCookieDeletion';

describe('detectEsiAuthCookieDeletion()', () => {
  const mockCookieStoreAsLoaded = () =>
    (window.cookieStore = {} as unknown as typeof window.cookieStore);

  beforeEach(() => {
    jest.spyOn(cookieUtils, 'getCookie').mockImplementation(
      (cookieName) =>
        ({
          __DEBUG__: 'true', // force logs to show
        })[cookieName] ?? '',
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    window.cookieStore = undefined as unknown as typeof window.cookieStore;
  });

  it('will not expose any event change callback if cookie store is not supported', () => {
    detectEsiAuthCookieDeletion();
    expect(window.cookieStore).toBeUndefined();
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will expose an event change callback if cookie store is supported', () => {
    mockCookieStoreAsLoaded();
    detectEsiAuthCookieDeletion();
    expect(window.cookieStore.onchange).toBeDefined();
  });

  it('will expose event change callback that will not console warn if no cookies were deleted on change', () => {
    mockCookieStoreAsLoaded();
    const mockEvent = {
      deleted: [],
    };
    detectEsiAuthCookieDeletion();
    window.cookieStore.onchange(mockEvent);
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will expose event change callback that will not console warn if cookies were deleted on change but not the esi_auth cookie', () => {
    mockCookieStoreAsLoaded();
    const mockEvent = {
      deleted: [{ name: 'some-other-cookie' }],
    };
    detectEsiAuthCookieDeletion();
    window.cookieStore.onchange(mockEvent);
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will expose event change callback that will console warn if esi_auth cookie was deleted on change', () => {
    mockCookieStoreAsLoaded();
    const mockEvent = {
      deleted: [{ name: COOKIE_AUTH }],
    };
    detectEsiAuthCookieDeletion();
    window.cookieStore.onchange(mockEvent);
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(
      `Detected deletion of following ESI auth cookie on following page: ${JSON.stringify(
        { name: COOKIE_AUTH },
      )} | ${window.location.href}`,
    );
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will catch any thrown errors whilst checking for esi_auth cookie deletion', () => {
    window.cookieStore =
      'some-invalid-value-to-force-error' as unknown as typeof window.cookieStore;
    detectEsiAuthCookieDeletion();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error detecting ESI auth cookie deletion:'),
    );
  });
});

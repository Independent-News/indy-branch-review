import * as thisModule from './cookie';

import type { CookieKeys } from '#types/cookies';

export const getCookie = (name: string, defaultValue: string | null = null) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2
    ? decodeURIComponent(parts.pop()?.split(';').shift() ?? '')
    : defaultValue;
};

export const getCookiesByName = (...names: CookieKeys[]) =>
  names.map((name) => thisModule.getCookie(name));

export const getCookies = (): Record<string, string | null> => {
  const cookies = document.cookie.trim().split(`;`);
  return cookies.reduce((acc, cookie) => {
    if (!cookie) {
      return acc;
    }

    const [name] = cookie.split('=');

    return {
      ...acc,
      [name.trim()]: getCookie(name.trim()),
    };
  }, {});
};

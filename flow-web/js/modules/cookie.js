/** @deprecated
 *
 * use getCookie() instead from app/public/js/utils/cookies.js
 */
export const getCookie = (name, defaultValue = null) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2
    ? decodeURIComponent(parts.pop().split(';').shift())
    : defaultValue;
};

/**
 * @param {string} name
 * @param {string} value
 * @param {object} [expire=false]
 * @param {number} [expire.days=0]
 * @param {number} [expire.hours=1]
 */
export const setCookie = (name, value, expire) => {
  const date = new Date();

  if (expire) {
    const expireTime = expire.days
      ? expire.days * 24 * 60 * 60 * 1000
      : expire.hours * 60 * 60 * 1000;
    date.setTime(date.getTime() + expireTime);
  }

  const parts = [];
  parts.push(`${name}=${encodeURIComponent(value)}`);
  parts.push('path=/');
  parts.push('secure');
  expire && parts.push(`expires=${date.toGMTString()}`);
  document.cookie = parts.join(';');
};

export const removeCookie = (name) => {
  const assignment = `${name}=null`;
  const expires = `expires=${new Date().toGMTString()}`;
  const path = 'path=/';
  document.cookie = [assignment, expires, path].join(';');
};

export const hasCookie = function (name) {
  return getCookie(name) !== null;
};

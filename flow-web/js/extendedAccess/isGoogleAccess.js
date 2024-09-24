/**
 * Returns query params from URL.
 * @return {!{[key: string], string}}
 */

const getQueryParams = (search) => {
  const queryParams = {};

  search
    .substring(1)
    .split('&')
    .forEach((pair) => {
      const parts = pair.split('=');
      queryParams[parts[0]] = parts[1];
    });

  return queryParams;
};

/**
 * Returns true if the URL contains valid Google Article Access (GAA) params.
 * @return {boolean}
 */

export const hasValidReferrer = (url) => {
  const GOOGLE_DOMAIN_RE = /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/;

  const a = document.createElement('a');
  a.href = url;

  if (a.protocol === 'https:' && GOOGLE_DOMAIN_RE.test(a.hostname)) {
    return true;
  }

  return false;
};

export const hasValidParams = (params, now) => {
  if (!params.gaa_at) {
    return false;
  }

  if (!params.gaa_n) {
    return false;
  }

  if (!params.gaa_sig) {
    return false;
  }

  if (!params.gaa_ts) {
    return false;
  }

  /*
   *  gaa_ts param must be unix timestamp in seconds represented as hex value.
   *  must be current time or in the future
   */

  if (parseInt(params.gaa_ts, 16) < now / 1000) {
    return false;
  }

  return true;
};

export const isGoogleAccess = (referrer, queryReferrer, search, now) => {
  return (
    (hasValidReferrer(referrer) || hasValidReferrer(queryReferrer)) &&
    hasValidParams(getQueryParams(search), now)
  );
};

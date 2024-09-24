import { COOKIE_FEAT_SENTRY } from '#app/constants/cookies';

export const isSentryEnabledClientSide = () =>
  window.JSGlobals?.featureFlags?.[COOKIE_FEAT_SENTRY] === true;

import { COOKIE_SUBSCRIBER, COOKIE_PUID } from '#app/constants/cookies';

import { getCookie } from '../modules/cookie';

export const isSubscribed = () => {
  return getCookie(COOKIE_SUBSCRIBER) === 'true';
};

const isLoggedIn = () => {
  return !!getCookie(COOKIE_PUID);
};

export const getPublisherEntitlement = (meterExpired) => {
  const entitlement = {};

  const subscribed = isSubscribed();
  const metered = !meterExpired;
  const loggedIn = isLoggedIn();

  // eslint-disable-next-line no-console
  console.log(
    '%cMETERED: %s',
    'background:yellow;color:purple;font-size:2em',
    metered,
  );
  // eslint-disable-next-line no-console
  console.log(
    '%cSUBSCRIBED: %s',
    'background:yellow;color:purple;font-size:2em',
    subscribed,
  );
  // eslint-disable-next-line no-console
  console.log(
    '%cLOGGED_IN: %s',
    'background:yellow;color:purple;font-size:2em',
    loggedIn,
  );

  entitlement.hasAccess = loggedIn && (subscribed || metered);
  entitlement.subscribed = subscribed;

  return entitlement;
};

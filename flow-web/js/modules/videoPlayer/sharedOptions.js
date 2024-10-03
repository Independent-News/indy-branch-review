/* globals JSGlobals */

import { COOKIE_SUBSCRIBER } from '#app/constants/cookies';

import { getCookie } from '../cookie';
import { isTV } from '../jwplayer/utils';

const getSwappedOrReset = () => {
  if (!JSGlobals.article?.autoVideo) {
    return null;
  }
  return JSGlobals.article.autoVideo === 'video swapped' ? true : false;
};

export const sharedOptions = () => {
  const subscriber = getCookie(COOKIE_SUBSCRIBER) === 'true';
  const skinName =
    subscriber || JSGlobals.article?.premium
      ? 'independent-premium'
      : isTV()
        ? 'videohub'
        : 'independent-regular';

  const options = {
    setTimeEvents: true,
    isSwapped: !!getSwappedOrReset(),
    jwplayerSiteId: JSGlobals.jwplayerSiteId,
    skin: {
      name: skinName,
    },
  };
  return options;
};

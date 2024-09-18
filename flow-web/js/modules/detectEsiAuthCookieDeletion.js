import { COOKIE_AUTH } from '#app/constants/cookies';

import { error, warn } from './log';

export default () => {
  try {
    if (!('cookieStore' in window)) {
      return;
    }
    window.cookieStore.onchange = (event) => {
      const deletedCookies = event.deleted;
      if (!deletedCookies.length) {
        return;
      }
      const [cookieJustDeleted] = deletedCookies;
      if (cookieJustDeleted.name === COOKIE_AUTH) {
        warn(
          `Detected deletion of following ESI auth cookie on following page: ${JSON.stringify(
            cookieJustDeleted,
          )} | ${window.location.href}`,
        );
      }
    };
  } catch (e) {
    error(`Error detecting ESI auth cookie deletion: ${e.message}`);
  }
};

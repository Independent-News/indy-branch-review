import { CLASS_FACEBOOK_EMBED } from '#app/constants/classNames';

import { loadJS } from './util';

/*
 * Manually copying and pasting the contents of the linked script tag below
 * does not seem to work, as embedded Facebook posts do not render. Hence,
 * this function is used to dynamically create the script tag and append it
 * to the document body.
 */

const facebookSDK = () => {
  const embeds = document.getElementsByClassName(CLASS_FACEBOOK_EMBED);
  if (embeds.length > 0) {
    loadJS('https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0');
  }
};

export default facebookSDK;

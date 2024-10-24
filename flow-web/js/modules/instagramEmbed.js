import { CLASS_INSTAGRAM_MEDIA } from '#app/constants/classNames';

import { loadJS } from './util';

/*
 * Manually copying and pasting the contents of the linked script tag below
 * does not seem to work, as embedded Intagram posts do not render. Hence,
 * this function is used to dynamically create the script tag and append it
 * to the document body.
 */

const instagramEmbed = () => {
  const embeds = document.getElementsByClassName(CLASS_INSTAGRAM_MEDIA);
  if (embeds.length > 0) {
    loadJS('https://www.instagram.com/embed.js');
  }
};

export default instagramEmbed;

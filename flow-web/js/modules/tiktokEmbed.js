import { CLASS_TIKTOK_MEDIA } from '#app/constants/classNames';

import { loadJS } from './util';

/*
 * Manually copying and pasting the contents of the linked script tag below
 * does not seem to work, as embedded TikTok posts do not render. Hence,
 * this function is used to dynamically create the script tag and append it
 * to the document body.
 */

const tiktokEmbed = () => {
  const embeds = document.getElementsByClassName(CLASS_TIKTOK_MEDIA);
  if (embeds.length > 0) {
    loadJS('https://www.tiktok.com/embed.js');
  }
};

export default tiktokEmbed;

import { CLASS_REDDIT_EMBED } from '#app/constants/classNames';

import { loadJS } from './util';

/*
 * Manually copying and pasting the contents of the linked script tag below
 * does not seem to work, as embedded Reddit posts do not render. Hence,
 * this function is used to dynamically create the script tag and append it
 * to the document body.
 */

const redditEmbed = () => {
  const embeds = document.getElementsByClassName(CLASS_REDDIT_EMBED);
  if (embeds.length > 0) {
    loadJS('https://embed.reddit.com/widgets.js');
  }
};

export default redditEmbed;

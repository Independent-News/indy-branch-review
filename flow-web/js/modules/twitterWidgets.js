/* This is code from Twitter's website. It is used to render the Twitter
widget. */
import { CLASS_TWITTER_EMBED } from '#app/constants/classNames';

const twitterWidget = () => {
  const embeds = document.getElementsByClassName(CLASS_TWITTER_EMBED);

  if (embeds.length > 0) {
    window.twttr = (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) {
        return t;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    })(document, 'script', 'twitter-wjs');
  }
};

export default twitterWidget;

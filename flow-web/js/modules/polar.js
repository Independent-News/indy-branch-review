import throttle from 'lodash/throttle';

import { laptop } from '#app/constants/devices';

import { loadJS } from './util';

let isPolarLoaded = false;

const polarConditionalLoader = async () => {
  const isLaptopOrLarger = window.matchMedia(laptop).matches;
  if (isLaptopOrLarger && !isPolarLoaded) {
    await loadJS([
      '//cdn.mediavoice.com/nativeads/script/esi/esi-rr-collection.js',
    ]);
    isPolarLoaded = true;
  }
};

export default () => {
  polarConditionalLoader();
  window.addEventListener('resize', throttle(polarConditionalLoader, 500));
};

/* globals jwplayer */

import debounce from 'lodash/debounce';

import { COOKIE_SUBSCRIBER } from '#app/constants/cookies';

import { ID_VIDEO_HOLDER } from '#app/constants/ids';

import { getCookie } from './cookie';
import { log } from './log';

const initDockingPlayer = () => {
  const topContainer = document.querySelector('.video-top-container.video');
  const heroVideo = document.querySelector('.video-hero-wrapper');
  const closeButton = document.querySelector('#video-popout-close');
  const playerId =
    document.getElementById(ID_VIDEO_HOLDER)?.firstElementChild
      ?.firstElementChild?.id;

  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let closeTimeout = 20000;
  if (windowWidth < 620) {
    closeTimeout = 10000;
  }

  let breakpoint = 750;

  const updateStickyClass = () => {
    if (
      !heroVideo ||
      !topContainer ||
      topContainer.classList.contains('closed')
    ) {
      return;
    }
    const { height, top } = heroVideo.getBoundingClientRect();
    breakpoint = top + height;

    if (breakpoint <= 95) {
      heroVideo.style.height = `${heroVideo.clientHeight}px`;
      !topContainer.classList.contains('sticky') &&
        topContainer.classList.add('sticky');
    } else {
      heroVideo.style.height = null;
      topContainer.classList.contains('sticky') &&
        topContainer.classList.remove('sticky');
    }
  };

  const debounceSticky = debounce(updateStickyClass, 50);
  window.addEventListener('scroll', debounceSticky);
  updateStickyClass();

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      topContainer.classList.add('closed');
    });
    if (closeButton.classList.contains('sensitive')) {
      closeButton.classList.add('shown');
    } else {
      setTimeout(() => {
        closeButton.classList.add('shown');
      }, closeTimeout);
    }
  }

  if (typeof jwplayer !== 'undefined' && playerId) {
    jwplayer(playerId).on('autostartNotAllowed', ({ error, reason, type }) => {
      log('jwplayer autostartNotAllowed', error, reason, type);
    });

    jwplayer(playerId).on('error', ({ code, message, sourceError, type }) => {
      log('jwplayer error', code, message, sourceError, type);
    });

    jwplayer(playerId).on('warning', ({ code, message, sourceError, type }) => {
      log('jwplayer warning', code, message, sourceError, type);
    });
  }

  return {
    dispose: () => {
      window.removeEventListener('scroll', debounceSticky);
      topContainer.classList.remove('sticky');
    },
  };
};

const initSlideDockingPlayer = () => {
  const liveblogVideoWrapper = document.querySelector(
    '.video-top-container.video',
  );
  const videoWrapper = document.querySelector('.video-hero-wrapper');
  const liveBlogPersistentPlayer = () => {
    if (!window.matchMedia('(min-width: 930px)').matches) {
      return;
    }
    let pos = liveblogVideoWrapper.getBoundingClientRect(),
      topPosition = pos.top + window.scrollY,
      windowPosition = window.scrollY;
    if (topPosition <= windowPosition + 95) {
      if (videoWrapper.classList.contains('sticky-video')) {
        return;
      }
      videoWrapper.classList.add('sticky-video');
    } else {
      if (!videoWrapper.classList.contains('sticky-video')) {
        return;
      }
      videoWrapper.classList.remove('sticky-video');
    }
  };
  window.addEventListener('scroll', liveBlogPersistentPlayer);
  window.addEventListener('orientationchange', liveBlogPersistentPlayer);
  liveBlogPersistentPlayer();

  return {
    dispose() {
      videoWrapper.classList.remove('sticky-video');
      window.removeEventListener('orientationchange', liveBlogPersistentPlayer);
    },
  };
};

export default () => {
  const subscriber = getCookie(COOKIE_SUBSCRIBER) === 'true';
  const liveblogVideo = document.querySelector('.article-liveblog');
  if (subscriber && liveblogVideo) {
    let slideDocking;
    const checkDockingBehaviour = function () {
      if (window.matchMedia('(min-width: 1000px)').matches) {
        slideDocking = initSlideDockingPlayer();
      } else {
        slideDocking && slideDocking.dispose();
      }
    };

    window.addEventListener('orientationchange', checkDockingBehaviour);
    window.addEventListener('resize', debounce(checkDockingBehaviour, 100));
    checkDockingBehaviour();
  } else {
    initDockingPlayer();
  }
};

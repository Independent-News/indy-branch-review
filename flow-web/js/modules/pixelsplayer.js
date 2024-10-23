/* globals pixels, JSGlobals, permutive, digitalData */

import { COOKIE_EUCONSENT_V2 } from '#app/constants/cookies';

import { ID_VIDEO_HOLDER } from '#app/constants/ids';

import { formatMantisRatings } from '#app/util/mantisDataFormatters';

import isAnonymisedCallbackPageLoad from '../utils/isAnonymisedCallbackPageLoad';

import { trackVideo } from './chartbeat';
import { getCookie } from './cookie';
import { performApsAlongsidePrebid } from './instreamVideoPrebid';
import { log } from './log';
import { initPermutiveReadyWithTimeout } from './permutive';
import * as timer from './timer';
import { sharedOptions } from './videoPlayer/sharedOptions';
import {
  getVideoCookieDeprecationLabel,
  getPpid,
} from './videoPlayer/videoTargeting';

const isAnonymisedPageLoad = isAnonymisedCallbackPageLoad();

const now = new Date();
let index,
  videoObject,
  current_mediaid,
  title,
  description,
  duration,
  updated_at,
  pub_date,
  firstQuartile,
  adTag,
  playSessionId,
  adFirstQuartile,
  permutiveEnabled,
  adtitle,
  adclickthroughurl,
  videoIndex = 1,
  adsystem;
let quartilesElapsed = [];
let isFirstPlay = true;
let adQuartilesElapsed = [];
let adtime = 0;
let adTimeFlag = true;
let tags = [];
let cookieDeprecationLabel = '';

const playerType = 'autoplay';
const width = window.innerWidth;
const height = window.innerHeight;
const isVertical = width / height < 1;
const isVerticalMobile = isVertical && width < 768;
const el = document.getElementById(ID_VIDEO_HOLDER);
const btn = document.querySelector('.closebtn');
const topContainer = document.querySelector('.video-top-container.video');
let isFullscreen = false;
let original_height;

const isVerticalAd = (adobject) => {
  const width = adobject?.ima?.ad?.g?.vastMediaWidth;
  const height = adobject?.ima?.ad?.g?.vastMediaHeight;
  if (width && height) {
    return width / height < 1;
  }
  return false;
};

const isPersistentPlayer = () => {
  return topContainer?.classList.contains('sticky');
};

const closeAd = (containerId) => {
  isFullscreen = false;
  btn.classList.remove('show');
  btn.onclick = null;
  el.classList.remove('fullscreen');
  pixels(containerId).resize('100%', original_height);
};

const fullscreenVideoCheck = () => {
  if (isFullscreen) {
    closeAd();
  }
};

const verticalVideoCheck = (containerId, adobject) => {
  if (isVerticalMobile && !isPersistentPlayer() && isVerticalAd(adobject)) {
    isFullscreen = true;
    setTimeout(function () {
      btn.classList.add('show');
      btn.onclick = closeAd.bind(this, containerId);
    }, 3000);
    el.classList.add('fullscreen');
    original_height = pixels(containerId).getHeight();
    pixels(containerId).resize('100%', '100%');
  }
};

const addMantisTargeting = (mantis_channels = {}) => {
  if (!mantis_channels?.ratings?.length) {
    return '';
  }
  const ratings = formatMantisRatings(mantis_channels.ratings);
  return `&mantis=${ratings}`;
};

const getSwappedOrReset = () => {
  if (!JSGlobals.article?.autoVideo) {
    return null;
  }
  return JSGlobals.article.autoVideo === 'video swapped' ? true : false;
};

const addPixelsTargeting = () => {
  const isSwappedOrReset = getSwappedOrReset();
  if (isSwappedOrReset === null) {
    return '';
  }
  return `&pixels=${isSwappedOrReset ? 'swapped' : 'reset'}`;
};

/**
 * Opted for this approach as adding async directly to enrichTag lead to cust_params (and others) missing on first video load/play
 * This code will be removed once chrome facilitated testing ends
 */
(async () => {
  cookieDeprecationLabel = await getVideoCookieDeprecationLabel();
})();

const enrichTag = (containerId, adTag, mediaid, playerType) => {
  const ppid = getPpid();

  const isAutoplay = pixels(containerId).getConfig().autostart;
  const isTV = location.pathname.startsWith('/tv/');
  let customParams = '',
    encodedCustomParams;

  customParams += `videoID=${mediaid}`;
  customParams += `&vpa=${isAutoplay ? 'auto' : 'click'}`;
  customParams += `&article=${JSGlobals.pageId?.replace(/\D/g, '')}`;
  customParams += `&playerType=${playerType}`;
  customParams += `&topictags=${
    JSGlobals.topictags && JSGlobals.topictags.join()
  }`;
  customParams += addMantisTargeting(JSGlobals.mantis_channels);
  customParams += addPixelsTargeting();
  customParams += `&chrome_facilitated_testing=${cookieDeprecationLabel}`;
  customParams += `&referrer=${digitalData.page_previous_url || ''}`;
  customParams += `&plcmt=${isTV ? 1 : 2}`;

  if (ppid) {
    customParams += `&ppid=${ppid}`;
  }

  // permutive inclusion
  if (permutiveEnabled) {
    const permutiveSegments = `permutive=${encodeURIComponent(
      JSON.parse(localStorage._pdfps || '[]')
        .slice(0, 250)
        .join(','),
    )}`;
    customParams += `&${permutiveSegments}`;
  }

  // placeholder for adPos
  customParams += '&adpos=0';
  // default for playerstate
  customParams += '&playerstate=hero';
  // ias params
  encodedCustomParams = encodeURIComponent(customParams);

  try {
    const tagUrl = new URL(adTag);
    const urlParams = new URLSearchParams(tagUrl.search);
    if (urlParams.has('cust_params')) {
      if (urlParams.get('cust_params') !== '') {
        adTag = adTag.replace(
          /(cust_params[^&]+)/,
          `$1%26${encodedCustomParams}`,
        );
      } else {
        adTag = adTag.replace(/(cust_params[^&]+)/, `$1${encodedCustomParams}`);
      }
    } else {
      adTag = `${adTag}&cust_params=${encodedCustomParams}`;
    }
    if (!urlParams.has('ad_rule')) {
      adTag = `${adTag}&ad_rule=0`; // make sure tag contains 'ad_rule=0'
    }
    const gdpr = getCookie('gdpr', '1');
    adTag += `&gdpr=${gdpr}`;
    if (gdpr === '1') {
      adTag += `&gdpr_consent=${getCookie(COOKIE_EUCONSENT_V2, 'none')}`;
      adTag += `&addtl_consent=${getCookie('addtl_consent', 'none')}`;
    }
    const replacementAdTagUnit = JSGlobals.videoAdUnitPath;
    if (replacementAdTagUnit) {
      adTag = adTag.replace(/(iu=).*?(&)/, `$1${replacementAdTagUnit}$2`);
    }
  } catch (e) {
    // do nothing if the adTag cannot be parsed
  }
  return adTag;
};

const addToTagAndIncrementAdPos = (adTag, adPos) => {
  adTag = adTag.replace(/(adpos%3D).*?(%26)/, `$1${adPos - 1}$2`);
  return adTag;
};

const addPlayerStateToTag = (adTag) => {
  const floatOrHero = isPersistentPlayer() ? 'float' : 'hero';
  adTag = adTag.replace(/(playerstate%3D).*?(&)/, `$1${floatOrHero}$2`);
  return adTag;
};

// Helper function to evaluate if to track the time progress event to Permutive
const timeProgressMatch = (progress, quartile) => {
  if (quartilesElapsed.includes(quartile)) {
    return false;
  } else {
    if (Math.floor(progress) === quartile) {
      quartilesElapsed.push(quartile);
      return true;
    } else {
      return false;
    }
  }
};

// Helper function to evaluate if to track the time progress event to Permutive
const adTimeProgressMatch = (progress, quartile) => {
  if (adQuartilesElapsed.includes(quartile)) {
    return false;
  } else {
    if (Math.floor(progress) === quartile) {
      adQuartilesElapsed.push(quartile);
      return true;
    } else {
      return false;
    }
  }
};

// Helper function to generate a UUID to assign to the user
const generatePermutiveUUID = () => {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

const permutiveEventTracking = (eventName, trackingPayload) => {
  if (permutiveEnabled) {
    log(`permutiveEventTracking ${eventName}`);
    window.permutive.track(eventName, trackingPayload);
  }
};

/**
 * @see {@link https://docs.jwplayer.com/players/reference/advertising-config-ref}
 */
const pixelsPlayerSetup = ({ containerId, options, defaultAdTag = '' }) => {
  timer.start('PixelsPlayerSetup');
  pixels(containerId).setup(options);

  // manually push jwplayer to chartbeat, as it's no longer on the page
  trackVideo(pixels(containerId).getVideoPlayerInstance());

  pixels(containerId).on('ready', async () => {
    timer.start('PixelsPlayerReady');
    playSessionId = permutiveEnabled && generatePermutiveUUID();
    current_mediaid = pixels(containerId).getMediaId();

    adTag = defaultAdTag || pixels(containerId).getAdTag() || '';
    adTag = enrichTag(containerId, adTag, current_mediaid, playerType);

    pixels(containerId).setAdTag(adTag);
    log('adTag:', adTag);

    permutiveEventTracking('VideoLoad', {
      video: {
        duration,
        name: title,
        custom_fields: [],
        video_id: current_mediaid,
        description,
        tags,
        created_at: updated_at,
        published_at: pub_date,
      },
      play_id: playSessionId,
      auto_start: false,
    });
    timer.end('PixelsPlayerReady');
  });

  pixels(containerId).on('playlistItem', function () {
    isFirstPlay = true; // This resets the counter for making an AdRequest when new content available
    // Resetting video objects for new tracking
    index = pixels(containerId).getPlaylistIndex();
    videoObject = pixels(containerId).getPlaylistItem(index);
    current_mediaid = videoObject.mediaid;
    title = videoObject.title;
    if (videoObject.tags !== '' && videoObject.tags !== undefined) {
      tags = videoObject.tags.split(',');
    }
    description = videoObject.description;
    duration = videoObject.duration;
    updated_at = videoObject.updated_at;
    pub_date = new Date(0); // The 0 there is the key, which sets the date to the epoch
    pub_date.setUTCSeconds(videoObject.pubdate);
    firstQuartile = Math.floor(duration / 4);
    quartilesElapsed = [];
    adQuartilesElapsed = [];

    adTag = addToTagAndIncrementAdPos(adTag, videoIndex);
    pixels(containerId).setAdTag(adTag);
    videoIndex += 1;
  });

  pixels(containerId).on('beforePlay', async () => {
    adTag = addPlayerStateToTag(adTag);
    pixels(containerId).setAdTag(adTag);
    log('adTag:', adTag);
    if (isFirstPlay) {
      pixels(containerId).trigger('wt:adReq', {
        adsRequest: { adTagUrl: adTag },
      });

      isFirstPlay = false;
    }
  });

  /* Data tracking */

  pixels(containerId).on('play', function () {
    fullscreenVideoCheck();
    permutiveEventTracking('VideoPlay', {
      video: {
        duration,
        name: title,
        custom_fields: [],
        video_id: current_mediaid,
        description,
        tags,
        watch_count: 1,
        created_at: updated_at,
        published_at: pub_date,
      },
      play_id: playSessionId,
      auto_start: true,
    });
  });

  pixels(containerId).on('pause', function () {
    permutiveEventTracking('VideoEvent', {
      timestamp: now.getTime(),
      event: 'PressedPause',
      video: {
        duration,
        name: title,
        custom_fields: [],
        video_id: current_mediaid,
        description,
        tags,
        watch_count: 1,
        created_at: updated_at,
        published_at: pub_date,
      },
      play_id: playSessionId,
    });
  });

  pixels(containerId).on('seek', function (timeObject) {
    permutiveEventTracking('VideoProgress', {
      seeked: true,
      progress: timeObject.offset,
      video: {
        duration,
        name: title,
        custom_fields: [],
        video_id: current_mediaid,
        description,
        tags,
        watch_count: 1,
        created_at: updated_at,
        published_at: pub_date,
      },
      client: {
        url: window.location.href,
        type: 'web',
        domain: window.location.hostname,
        user_agent: navigator.userAgent,
      },
      play_id: playSessionId,
    });
  });

  pixels(containerId).on('time', function (timeObject) {
    if (
      timeProgressMatch(timeObject.position, firstQuartile) ||
      timeProgressMatch(timeObject.position, firstQuartile * 2) ||
      timeProgressMatch(timeObject.position, firstQuartile * 3) ||
      timeProgressMatch(timeObject.position, duration)
    ) {
      permutiveEventTracking('VideoProgress', {
        seeked: false,
        progress: timeObject.position,
        video: {
          duration: timeObject.duration,
          name: title,
          custom_fields: [],
          video_id: current_mediaid,
          description,
          tags,
          watch_count: 1,
          created_at: updated_at,
          published_at: pub_date,
        },
        client: {
          url: window.location.href,
          type: 'web',
          domain: window.location.hostname,
          user_agent: navigator.userAgent,
        },
        play_id: playSessionId,
      });
    }
  });

  pixels(containerId).initPlaylistPrebidCallback(async (nextMediaId) => {
    const adUnitPath = JSGlobals.videoAdUnitPath;
    const adUnitCode = adUnitPath.split('/').pop();
    let adTag = await performApsAlongsidePrebid(
      nextMediaId,
      containerId,
      adUnitCode,
      adUnitPath,
      [640, 480],
    );

    adTag = enrichTag(containerId, adTag, nextMediaId, playerType);
    adTag = addToTagAndIncrementAdPos(adTag, videoIndex);
    adTag = addPlayerStateToTag(adTag);

    return adTag;
  });

  pixels(containerId).on('adImpression', function (adobject) {
    adtitle = adobject.adtitle;
    adclickthroughurl = adobject.clickThroughUrl;
    adsystem = adobject.adsystem;

    verticalVideoCheck(containerId, adobject);
  });

  pixels(containerId).on('adTime', function (adTimeObject) {
    if (adTimeFlag && adTimeObject.position > 0) {
      adtime = parseInt(adTimeObject.duration, 10);
      adFirstQuartile = Math.floor(duration / 4);
      adTimeFlag = false;
    }
    if (
      adTimeProgressMatch(adTimeObject.position, adFirstQuartile) ||
      adTimeProgressMatch(adTimeObject.position, adFirstQuartile * 2) ||
      adTimeProgressMatch(adTimeObject.position, adFirstQuartile * 3) ||
      adTimeProgressMatch(adTimeObject.position, adtime)
    ) {
      permutiveEventTracking('VideoAdProgress', {
        progress: adTimeObject.position,
        video: {
          duration,
          name: title,
          custom_fields: [],
          video_id: current_mediaid,
          description,
          tags,
          watch_count: 1,
          created_at: updated_at,
          published_at: pub_date,
        },
        ad: {
          duration: adtime,
          advertiser_name: '',
          ad_system: adsystem,
          description: '',
          universal_ad_id_registry: '',
          creative_id: '',
          ad_id: '',
          min_suggested_duration: 30,
          title: adtitle,
          universal_ad_id: '',
          deal_id: '',
        },
        play_id: playSessionId,
      });
    }
  });

  pixels(containerId).on('adPlay', function () {
    permutiveEventTracking('VideoAdPlay', {
      ad: {
        duration: adtime,
        advertiser_name: '',
        ad_system: adsystem,
        description: 'ad',
        universal_ad_id_registry: '',
        creative_id: '',
        ad_id: '',
        min_suggested_duration: 30,
        title: adtitle,
        universal_ad_id: '',
        deal_id: '',
      },
      video: {
        duration,
        name: title,
        custom_fields: [],
        video_id: current_mediaid,
        description,
        tags,
        watch_count: 1,
        created_at: updated_at,
        published_at: pub_date,
      },
      play_id: playSessionId,
    });
  });

  pixels(containerId).on('adClick', function () {
    permutiveEventTracking('VideoAdClick', {
      ad: {
        duration: adtime,
        advertiser_name: '',
        ad_system: adsystem,
        description: 'Ad',
        universal_ad_id_registry: '',
        creative_id: '',
        ad_id: '',
        min_suggested_duration: 30,
        title: adtitle,
        universal_ad_id: '',
        deal_id: '',
      },
      video: {
        name: adtitle,
        custom_fields: [],
        video_id: current_mediaid,
        description: adclickthroughurl,
        tags,
        watch_count: 1,
        created_at: updated_at,
        published_at: now,
      },
      client: {
        url: window.location.href,
        type: 'web',
        domain: window.location.hostname,
        user_agent: navigator.userAgent,
      },
      play_id: playSessionId,
    });
  });

  // @see INDY-716
  pixels(containerId).on('adsManager', function (eventObject) {
    const { adsManager, videoElement } = eventObject;
    const anId = JSGlobals.adNetworkId;

    if (anId && window.googleImaVansAdapter) {
      const iasConfig = {
        anId,
        campId: `${width}x${height}`, // This is dynamic based on player dimensions, but can be hard coded
        chanId: JSGlobals.videoAdUnitPath,
        placementId: 'Open Auction',
        pubOrder: 'Video',
        pubId: 'Direct',
        pubCreative: 'Default Creative',
      };
      window.googleImaVansAdapter.init(
        window.google,
        adsManager,
        videoElement,
        iasConfig,
      );
    }
  });

  timer.end('PixelsPlayerSetup');
};

const pixelsPlayerPlayerSetup = (args) => {
  const { containerId, options } = args;

  pixels(containerId).initPlayer(
    options.playerId,
    pixelsPlayerSetup.bind(this, args),
  );
};

const pixelsPlayerSetupWithPermutive = (args) => {
  // Player initialisation, inside the Permutive readyWithTimeout function, to start the player when Permutive segments are available
  if (permutiveEnabled) {
    permutive.readyWithTimeout(
      pixelsPlayerPlayerSetup.bind(this, args),
      'realtime',
      2500,
    );
  } else {
    pixelsPlayerPlayerSetup(args);
  }
};

export default async (consent, prebidEnabled) => {
  permutiveEnabled =
    !isAnonymisedPageLoad && consent && window.JSGlobals.permutive;
  permutiveEnabled && initPermutiveReadyWithTimeout();

  if (typeof pixels === 'function') {
    // pixels already loaded, therefore event has already fired; too late to set up a listener
    // get set-up parameters from data attributes on pixels script tag
    const scripts = document.querySelectorAll('script[data-pixels-player-uid]');

    for (let i = 0; i < scripts.length; i++) {
      const { pixelsPlayerUid, pixelsPlayerData } = scripts[i].dataset;

      if (!pixelsPlayerUid) {
        return;
      }

      const containerId = pixelsPlayerUid;
      const data = JSON.parse(pixelsPlayerData);
      const options = { ...data, ...sharedOptions() };

      const adUnitPath = JSGlobals.videoAdUnitPath;
      const adUnitCode = adUnitPath.split('/').pop();
      const defaultAdTag = prebidEnabled
        ? await performApsAlongsidePrebid(
            options.mediaId,
            containerId,
            adUnitCode,
            adUnitPath,
            [640, 480],
          )
        : '';

      pixelsPlayerSetupWithPermutive({
        containerId,
        options,
        defaultAdTag,
      });
    }
  } else {
    // pixels not loaded yet, set up a listener for the event that will be dispatched once it loads
    // get set-up parameters from event
    document.addEventListener('pixelsPlayerLoaded', (event) => {
      const containerId = event.detail.uid;
      const options = event.detail.data;
      pixelsPlayerSetupWithPermutive({
        containerId,
        options,
      });
    });
  }
};

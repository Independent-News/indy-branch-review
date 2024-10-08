/* globals JSGlobals, jwplayer */

import { AdTagURL } from '../adTag/AdTagURL';
import { trackVideo } from '../chartbeat';
import * as timer from '../timer';

import { PARAM_AD_POS } from './constants';
import {
  getAdPos,
  generatePermutiveUUID,
  getCurrentPlaylistItem,
  fullscreenVideoCheck,
  verticalVideoCheck,
  getPlayerState,
  permutiveEnabled,
  permutiveEventTracking,
  getPermutiveVideo,
  getPermutiveClient,
  quarterTimeElapsed,
  getPermutiveAd,
} from './utils';

/**
 * `ready` event handler for JWPlayer
 */
export const onReady = async function () {
  timer.start('JWPlayerReady');

  const playlistItem = getCurrentPlaylistItem(this);

  if (permutiveEnabled(this.consent)) {
    this.playSessionId = generatePermutiveUUID();
    permutiveEventTracking('VideoLoad', {
      video: getPermutiveVideo(playlistItem),
      play_id: this.playSessionId,
      auto_start: false,
    });
  }

  /** @see {@link https://docs.chartbeat.com/cbp/feature-integrations/video-engagement/supported-ovp-integrations#jw-player} */
  trackVideo(jwplayer);

  this.adCount = 0;

  timer.end('JWPlayerReady');
};

/**
 * `playListItem` event handler for JWPlayer
 *  @todo use `float` event to update player state
 */
export const onPlayListItem = async function () {
  // Resetting video objects for new  tracking
  this.timeElapsed = [];

  if (this._isPlacement) {
    const tag = window.jwDataStore.custom[this._placementId]['ad_tag'];
    const adTag = new AdTagURL(tag);

    // @see {@link https://support.google.com/admanager/answer/7320899?hl=en#vpa}
    const isAutoplay = this.getConfig().autostart;
    adTag.custParams.set('vpa', isAutoplay ? 'auto' : 'click');
    const playerState = getPlayerState(this);
    adTag.custParams.set('playerstate', playerState);
    adTag.searchParams.set('adCount', this.adCount++); // debug use only
    const adPos = adTag.custParams.get('adpos');
    adTag.custParams.set('adpos', adPos ? Number(adPos) + 1 : 0);

    window.jwDataStore.custom[this._placementId]['ad_tag'] = adTag.toString();
  }
};

/**
 * `beforePlay` event handler for JWPlayer
 */
export const onBeforePlay = async function ({ playReason }) {
  if (!this._isPlacement) {
    const tag = this.getConfig().advertising?.tag;
    const adTag = new AdTagURL(tag);

    // @see {@link https://support.google.com/admanager/answer/7320899?hl=en#vpa}
    const isAutoplay = this.getConfig().autostart;
    adTag.custParams.set('vpa', isAutoplay ? 'auto' : 'click');
    const playerState = getPlayerState(this);
    adTag?.custParams.set('playerstate', playerState);

    if (playReason === 'autostart') {
      // beforePlay event triggered with 2 reasons: 'autostart' and 'interaction'
      this.playAd(adTag.toString());
    }
  }
};

/**
 * `request` event handler for JWPlayer
 */
export const onAdRequest = async function () {
  // Resetting for new tracking
  this.adTimeElapsed = [];
};

/**
 * `play` event handler for JWPlayer
 */
export const onPlay = function () {
  fullscreenVideoCheck(this);

  const playlistItem = getCurrentPlaylistItem(this);

  if (permutiveEnabled(this.consent)) {
    permutiveEventTracking('VideoPlay', {
      video: {
        ...getPermutiveVideo(playlistItem),
        watch_count: 1,
      },
      play_id: this.playSessionId,
      auto_start: true,
    });
  }
};

/**
 * `pause` event handler for JWPlayer
 */
export const onPause = function () {
  const playlistItem = getCurrentPlaylistItem(this);
  const timestamp = this.playerNow.getTime();

  if (permutiveEnabled(this.consent)) {
    permutiveEventTracking('VideoEvent', {
      timestamp,
      event: 'PressedPause',
      video: {
        ...getPermutiveVideo(playlistItem),
        watch_count: 1,
      },
      play_id: this.playSessionId,
    });
  }
};

/**
 * `seek` event handler for JWPlayer
 */
export const onSeek = function (timeObject) {
  const playlistItem = getCurrentPlaylistItem(this);

  if (permutiveEnabled(this.consent)) {
    permutiveEventTracking('VideoProgress', {
      seeked: true,
      progress: timeObject.offset,
      video: {
        ...getPermutiveVideo(playlistItem),
        watch_count: 1,
      },
      client: getPermutiveClient(),
      play_id: this.playSessionId,
    });
  }
};

/**
 * `time` event handler for JWPlayer
 */
export const onTime = function (timeObject) {
  const playlistItem = getCurrentPlaylistItem(this);

  if (
    quarterTimeElapsed(
      timeObject.position,
      timeObject.duration,
      this.timeElapsed,
      'video',
    )
  ) {
    if (permutiveEnabled(this.consent)) {
      permutiveEventTracking('VideoProgress', {
        seeked: false,
        progress: timeObject.position,
        video: {
          ...getPermutiveVideo(playlistItem),
          watch_count: 1,
        },
        client: getPermutiveClient(),
        play_id: this.playSessionId,
      });
    }
  }
};

/**
 * `adImpression` event handler for JWPlayer
 */
export const onAdImpression = function (adItem) {
  verticalVideoCheck(this, adItem);
};

/**
 * `adTime` event handler for JWPlayer
 */
export const onAdTime = function (adItemWithTime) {
  if (
    quarterTimeElapsed(
      adItemWithTime.position,
      adItemWithTime.duration,
      this.adTimeElapsed,
      'ad',
    )
  ) {
    const playlistItem = getCurrentPlaylistItem(this);

    if (permutiveEnabled(this.consent)) {
      permutiveEventTracking('VideoAdProgress', {
        progress: adItemWithTime.position,
        video: {
          ...getPermutiveVideo(playlistItem),
          watch_count: 1,
        },
        ad: getPermutiveAd(adItemWithTime),
        play_id: this.playSessionId,
      });
    }
  }
};

/**
 * `adPlay` event handler for JWPlayer
 */
export const onAdPlay = function (adItemWithPlay) {
  const playlistItem = getCurrentPlaylistItem(this);

  if (permutiveEnabled(this.consent)) {
    permutiveEventTracking('VideoAdPlay', {
      video: {
        ...getPermutiveVideo(playlistItem),
        watch_count: 1,
      },
      ad: {
        ...getPermutiveAd(adItemWithPlay),
        description: 'ad',
      },
      play_id: this.playSessionId,
    });
  }
};

/**
 * `adClick` event handler for JWPlayer
 */
export const onAdClick = function (adItemWithClick) {
  const playlistItem = getCurrentPlaylistItem(this);
  const clickThroughUrl = adItemWithClick.ima?.ad?.data?.clickThroughUrl;
  const now = this.playerNow;

  if (permutiveEnabled(this.consent)) {
    permutiveEventTracking('VideoAdClick', {
      video: {
        ...getPermutiveVideo(playlistItem),
        description: clickThroughUrl,
        watch_count: 1,
        published_at: now,
      },
      ad: {
        ...getPermutiveAd(adItemWithClick),
        description: 'ad',
      },
      client: getPermutiveClient(),
      play_id: this.playSessionId,
    });
  }
};

/**
 * `adsManager` event handler for JWPlayer
 *  @see INDY-716
 */
export const onAdsManager = function (eventObject) {
  const { adsManager, videoElement } = eventObject;
  const anId = JSGlobals.adNetworkId;
  const width = this.getWidth();
  const height = this.getHeight();

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
};

/**
 * `complete` event handler for JWPlayer
 */
export const onComplete = function () {
  const adPos = getAdPos();
  if (this.nextUrl) {
    const next = new URL(this.nextUrl, window.location.origin);
    next.searchParams.set(PARAM_AD_POS, Number(adPos) + 1);
    window.location.href = next.toString();
  }
};

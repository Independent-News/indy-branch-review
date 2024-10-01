/* globals JSGlobals */

import { formatMantisRatings } from '#app/util/mantisDataFormatters';

import isAnonymisedCallbackPageLoad from '../../utils/isAnonymisedCallbackPageLoad';
import { AdTagURL } from '../adTag/AdTagURL';
import {
  MACRO_PAGE_URL,
  MACRO_TIMESTAMP,
  MACRO_GDPR,
  MACRO_GDPR_CONSENT,
  MACRO_ADDTL_CONSENT,
} from '../adTag/macros';
import {
  PARAM_SIZE,
  PARAM_AD_UNIT,
  PARAM_REQUEST_MODE,
  PARAM_DFP_REQUEST,
  PARAM_AD_RULE,
  PARAM_ENVIRONMENT,
  PARAM_AD_OUTPUT,
  PARAM_DELAYED_IMPRESSION,
  PARAM_DESCRIPTION_URL,
  PARAM_CORRELATOR,
  PARAM_GDPR,
  PARAM_GDPR_CONSENT,
  PARAM_ADDTL_CONSENT,
} from '../adTag/params';
import {
  getTargeting as apsGetTargeting,
  loadScript as loadApsScript,
} from '../aps';
import { getTargeting as prebidGetTargeting } from '../instreamVideoPrebid';
import { PARAM_AD_POS } from '../jwplayer/constants';
import { log, warn } from '../log';
import {
  getVideoCookieDeprecationLabel,
  getPpid,
} from '../videoPlayer/videoTargeting';

import * as thisModule from './utils';

const isAnonymisedPageLoad = isAnonymisedCallbackPageLoad();

/**
 * Determine if current page is tv hub
 * @returns {boolean}
 */
export const isTV = () => location.pathname.startsWith('/tv/');

/**
 * Get the article Id
 * @returns {string}
 */
export const getArticleId = () => JSGlobals?.pageId?.replace(/\D/g, '') || '';

/**
 * Get the value of "article" in cust_params
 * @returns {string}
 */
export const getCustParamArticle = () =>
  thisModule.isTV() ? 'videohub' : thisModule.getArticleId();

/**
 * Get topic tags string of current page
 * @returns {string}
 */
export const getTopicTags = () => JSGlobals?.topictags?.join() || '';

/**
 * Get the referrer url from document object
 * @returns {string}
 */
export const getReferrer = () => document.referrer.split('?')[0];

/**
 * Get mantis string
 * @returns {string}
 */
export const getMantisTargeting = () =>
  JSGlobals.mantis_channels?.ratings?.length &&
  formatMantisRatings(JSGlobals.mantis_channels.ratings);

/**
 * Get pixels string
 * @returns {string}
 * @todo check if it should be removed
 */
export const getPixelsTargeting = () =>
  JSGlobals.article?.autoVideo
    ? JSGlobals.article.autoVideo === 'video swapped'
      ? 'swapped'
      : 'reset'
    : '';

export const isVerticalMobile = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isVertical = width / height < 1;
  return isVertical && width < 768;
};

export const isVerticalAd = (adItem) => {
  const width = adItem.ima.ad.getVastMediaWidth();
  const height = adItem.ima.ad.getVastMediaHeight();
  return width / height < 1;
};

export const isPersistentPlayer = () => {
  const topContainer = document.querySelector('.video-top-container.video');
  return !!topContainer?.classList.contains('sticky');
};

export const closeAd = (playerInstance) => {
  const container = playerInstance.getContainer();
  container.classList.remove('fullscreen');

  playerInstance.isFullscreen = false;
  playerInstance.resize('100%', playerInstance.originalHeight);
};

export const fullscreenVideoCheck = (playerInstance) => {
  playerInstance.isFullscreen && closeAd(playerInstance);
};

export const verticalVideoCheck = (playerInstance, adItem) => {
  if (isVerticalMobile() && !isPersistentPlayer() && isVerticalAd(adItem)) {
    const container = playerInstance.getContainer();
    container.classList.add('fullscreen');

    playerInstance.isFullscreen = true;
    playerInstance.originalHeight = playerInstance.getHeight();
    playerInstance.resize('100%', '100%');
  }
};

/**
 * Get the permutive string
 * @returns {string}
 */
export const getPermutive = () =>
  JSON.parse(localStorage._pdfps || '[]')
    .slice(0, 250)
    .join(',');

/**
 * Get adPos from query string
 * @returns {integer|string}
 */
export const getAdPos = () =>
  new URL(window.location).searchParams.get(PARAM_AD_POS) || 0;

/**
 * Get the player state
 * @param {object} playerInstance
 * @returns {string} "float" if it is floating player or "hero"
 */
export const getPlayerState = (playerInstance) =>
  playerInstance.getFloating() ? 'float' : 'hero';

/**
 * Converts a time string in format "HH:MM:ss.mmm" to seconds.
 * @param {string} timeString - The time string to convert.
 * @returns {number} - The integer number of seconds.
 */
export const timeToSeconds = (timeString) => {
  const parts = String(timeString).split(':').map(parseFloat);
  const seconds = parts.pop();
  return Math.floor(parts.reduce((acc, curr) => 60 * curr + acc, seconds));
};

/**
 * Calculates if the given time is greater than or equal to the position, and returns a boolean value.
 * @param {number} position - The position in time to be compared against.
 * @param {number} time - The time to check against the position.
 * @param {Array<number>} elapsed - An array of time values that have already been matched.
 * @returns {boolean} Returns `true` if the position is less than or equal to the time and the time has not been previously matched. Otherwise, returns `false`.
 */
export const timeElapsed = (position, time, elapsed) => {
  const key = time;
  if (elapsed.includes(key)) {
    return false;
  } else {
    if (position >= time) {
      elapsed.push(key);
      return true;
    } else {
      return false;
    }
  }
};

/**
 * Calculates whether a quarter of the time has elapsed for a given position, based on the elapsed time and the total time
 * @param {number} position - The current position
 * @param {number} duration - The duration
 * @param {Array<number>} elapsed - The elapsed time
 * @param {string} [type=''] - An optional string to prefix the console output with
 * @returns {boolean} - True if a quarter of the time has elapsed for the given position, false otherwise
 */
export const quarterTimeElapsed = (position, duration, elapsed, type = '') => {
  const quartile = duration / 4;

  const q1 = thisModule.timeElapsed(position, quartile, elapsed);
  const q2 = thisModule.timeElapsed(position, quartile * 2, elapsed);
  const q3 = thisModule.timeElapsed(position, quartile * 3, elapsed);
  const q4 = thisModule.timeElapsed(position, duration - 0.5, elapsed);

  log(
    `${type} > ${q1 ? 1 : 0} ${q2 ? 1 : 0} ${q3 ? 1 : 0} ${
      q4 ? 1 : 0
    } ${position.toFixed(2)}:${duration}`,
  );

  return q1 || q2 || q3 || q4;
};

/**
 * Generates a unique UUID v4 to assign to the user
 * @returns {string} A string representation of the UUID.
 */
export const generatePermutiveUUID = () => {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

/**
 * Generate client object for permutive tracking
 * @returns {object}
 */
export const getPermutiveClient = () => ({
  url: window.location.href,
  type: 'web',
  domain: window.location.hostname,
  user_agent: navigator.userAgent,
});

export const permutiveEnabled = (consent) =>
  !!(!isAnonymisedPageLoad && consent && window.JSGlobals.permutive);

/**
 * Generate ad object with given ad item for permutive tracking
 * @returns {object}
 */
export const getPermutiveAd = (adItem) => {
  const title = adItem.adtitle;
  const ad_system = adItem.adsystem;
  const duration = timeToSeconds(adItem.duration);
  return {
    duration,
    advertiser_name: '',
    ad_system,
    description: '',
    universal_ad_id_registry: '',
    creative_id: '',
    ad_id: '',
    min_suggested_duration: 30,
    title,
    universal_ad_id: '',
    deal_id: '',
  };
};

/**
 * Generate video object with given ad item for permutive tracking
 * @returns {object}
 */
export const getPermutiveVideo = (playlistItem) => {
  const video_id = playlistItem.mediaid;
  const name = playlistItem.title;
  const tags = playlistItem.tags ? playlistItem.tags.split(',') : [];
  const description = playlistItem.description;
  const duration = playlistItem.duration;
  const created_at = playlistItem.updated_at;
  const published_at = new Date(0); // The 0 there is the key, which sets the date to the epoch
  published_at.setUTCSeconds(playlistItem.pubdate);

  return {
    duration,
    name,
    custom_fields: [],
    video_id,
    description,
    tags,
    created_at,
    published_at,
  };
};

export const permutiveEventTracking = (eventName, trackingPayload) => {
  log(`permutiveEventTracking ${eventName}`);
  window.permutive.track(eventName, trackingPayload);
};

export const getCurrentPlaylistItem = (player) => {
  return player.getPlaylistItem(player.getPlaylistIndex());
};

/**
 * Set the initial query params to ad tag
 *
 * More details about the VAST ad tag URL parameters can be found on the document via this [link]{@link https://support.google.com/admanager/answer/10678356}
 * @param {import('./AdTag/AdTagURL').AdTagURL} adTag
 */
export const setInitialParamsToAdTag = (adTag) => {
  // it should be a hard code value
  adTag.searchParams.set(PARAM_SIZE, `640x480`);
  // it should be ad unit code instead of ad unit path
  adTag.searchParams.set(PARAM_AD_UNIT, JSGlobals.videoAdUnitPath);
  adTag.searchParams.set(PARAM_REQUEST_MODE, 's');
  adTag.searchParams.set(PARAM_DFP_REQUEST, '1');
  adTag.searchParams.set(PARAM_AD_RULE, '0');
  adTag.searchParams.set(PARAM_ENVIRONMENT, 'vp');
  adTag.searchParams.set(PARAM_AD_OUTPUT, 'vast');
  adTag.searchParams.set(PARAM_DELAYED_IMPRESSION, '1');
  adTag.searchParams.set(PARAM_DESCRIPTION_URL, MACRO_PAGE_URL);
  adTag.searchParams.set(PARAM_CORRELATOR, MACRO_TIMESTAMP);
  adTag.searchParams.set(PARAM_GDPR, MACRO_GDPR);
  // @see https://support.google.com/campaignmanager/answer/10031693?hl=en
  // `gdpr_consent=` must contain a valid TC string. If it does not, an ad may not be served or measured.
  if (JSGlobals.cmp.enabled) {
    adTag.searchParams.set(PARAM_GDPR_CONSENT, MACRO_GDPR_CONSENT);
    adTag.searchParams.set(PARAM_ADDTL_CONSENT, MACRO_ADDTL_CONSENT);
  }
  adTag.custParams.set('videoID', JSGlobals?.article?.heroMediaId);
  adTag.custParams.set('article', thisModule.getCustParamArticle());
  adTag.custParams.set('playerstate', 'hero');
  adTag.custParams.set('topictags', thisModule.getTopicTags());
  adTag.custParams.set('referrer', thisModule.getReferrer());
  adTag.custParams.set('mantis', thisModule.getMantisTargeting());
  adTag.custParams.set('pixels', thisModule.getPixelsTargeting());
  adTag.custParams.set('permutive', thisModule.getPermutive());
};

/**
 * @param {string} [url] - The URL to use for the ad tag.
 * @returns {import('./AdTag/AdTagURL').AdTagURL} adTag
 */
export const createAdTag = (url) => {
  const adTag = new AdTagURL(url);
  thisModule.setInitialParamsToAdTag(adTag);

  return adTag;
};

/**
 * Get the targeting key-value pairs from ad bidding services
 * @param {string} containerId
 * @param {string} mediaId
 * @param {string} adUnitCode
 * @param {string} adUnitPath
 * @returns {{[key: string], string}} targeting key-value pairs
 */
export const getBidsTargeting = async (
  containerId,
  mediaId,
  adUnitCode,
  _adUnitPath,
) => {
  await loadApsScript();

  const requests = [
    apsGetTargeting(adUnitCode),
    prebidGetTargeting(mediaId, containerId, adUnitCode, [640, 480]),
  ];

  const targetingArr = await Promise.allSettled(requests);
  const targeting = targetingArr.reduce((acc, curr) => {
    if (curr.status === 'fulfilled') {
      return { ...acc, ...curr.value };
    } else {
      warn(curr.reason);
    }
    return acc;
  }, {});

  return targeting;
};

/**
 * @typedef {object} TargetingOptions
 * @property {string} containerId
 * @property {string} mediaId
 * @property {string} adUnitCode
 * @property {string} adUnitPath
 */

/**
 * Initialize ad tag with the given parameters
 * @param {string} url
 * @param {TargetingOptions} options
 * @returns
 */
export const initAdTag = async (
  url,
  { containerId, mediaId, adUnitCode, adUnitPath },
) => {
  const adTag = thisModule.createAdTag(url);
  adTag.custParams.set('playerType', 'jwplayer');

  const isTV = thisModule.isTV();
  adTag.custParams.set('plcmt', isTV ? 1 : 2);

  const cookieDeprecationLabel = await getVideoCookieDeprecationLabel();
  if (cookieDeprecationLabel.length) {
    adTag.custParams.set('chrome_facilitated_testing', cookieDeprecationLabel);
  }

  const ppid = getPpid();
  if (ppid) {
    adTag.custParams.set('ppid', ppid);
  }

  const bidsTargeting = await getBidsTargeting(
    containerId,
    mediaId,
    adUnitCode,
    adUnitPath,
  );

  Object.entries(bidsTargeting).forEach(([key, value]) => {
    adTag.custParams.set(key, value);
  });

  return adTag.toString();
};

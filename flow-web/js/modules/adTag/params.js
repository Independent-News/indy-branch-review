/**
 * @see {@link https://support.google.com/admanager/answer/10678356?hl=en}
 * @see {@link https://ads-developers.googleblog.com/2014/10/life-of-dfp-video-line-item-part-ii.html}
 */

/**
 * Player size
 * @example "640x480"
 */
export const PARAM_SIZE = 'sz';

/**
 * Ad unit path
 */
export const PARAM_AD_UNIT = 'iu';

/**
 * The request mode. Here, “s” for “sync”.
 */
export const PARAM_REQUEST_MODE = 'impl';

/**
 * Indicates that this is a DFP request rather than the legacy Google Ads Manager.
 */
export const PARAM_DFP_REQUEST = 'gdfp_req';

/**
 * The ad rule parameter accepts a constant value that indicates whether to return a VAST creative or an ad rules response.
 *
 * Request for VAST creative: ad_rule=0
 */
export const PARAM_AD_RULE = 'ad_rule';

/**
 * The environment. Here, “vp” for “video player”.
 */
export const PARAM_ENVIRONMENT = 'env';

/**
 * The type of output you want from your ad request. Typical values are “vast” or “vmap”.
 */
export const PARAM_AD_OUTPUT = 'output';

/**
 * Enables delayed impressions for your ad. This ensures that an impression isn’t counted until the ad starts playing.
 */
export const PARAM_DELAYED_IMPRESSION = 'unviewed_position_start';

/**
 * The page contains the video player
 */
export const PARAM_DESCRIPTION_URL = 'description_url';

/**
 * Random positive integer value
 */
export const PARAM_CORRELATOR = 'correlator';
export const PARAM_GDPR = 'gdpr';
export const PARAM_GDPR_CONSENT = 'gdpr_consent';
export const PARAM_ADDTL_CONSENT = 'addtl_consent';

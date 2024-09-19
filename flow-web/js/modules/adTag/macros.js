/**
 * @see {@link https://docs.jwplayer.com/platform/docs/ad-tag-targeting-macro-reference}
 */

const format = (macro) => `__${macro}__`;

export const MACRO_PAGE_URL = format('page-url');
export const MACRO_TIMESTAMP = format('timestamp');
export const MACRO_GDPR = format('gdpr');
export const MACRO_GDPR_CONSENT = format('gdpr_consent');
export const MACRO_ADDTL_CONSENT = format('addtl_consent');

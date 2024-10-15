import {
  stackTraceContainsPathFragment,
  exceptionValueContainsFragment,
} from './sentry-helpers';

/**
 * @typedef {Function} SentryTriageTest
 * @param {import('#app/public/js/modules/sentry').SentryEvent} e A Sentry event
 * @returns {bool} Whether or not the event triggers the test
 */

/** @type {SentryTriageTest} */
export function isAmp(e) {
  return stackTraceContainsPathFragment(e, '/ampproject/');
}

/** @type {SentryTriageTest} */
export function isYieldmo(e) {
  return stackTraceContainsPathFragment(e, 'yieldmo.com');
}

/** @type {SentryTriageTest} */
export function isAdSafeProtect(e) {
  return exceptionValueContainsFragment(e, "Can't find variable: __iasPET");
}

/** @type {SentryTriageTest} */
export function isApsTag(e) {
  return exceptionValueContainsFragment(e, "Can't find variable: apstag");
}

/* global Sentry, JSGlobals */

import { SENTRY_DSN } from '#app/constants/sentry';

import { triage } from './sentry-helpers';
import { isAdSafeProtect, isAmp, isApsTag, isYieldmo } from './sentry-triage';

/**
 * @typedef {object} SentryEvent
 * @see {@link https://develop.sentry.dev/sdk/event-payloads/}
 * e.g.
 * {
 *   exception: {
 *     values: [
 *       {
 *         stacktrace: {
 *           frames: [
 *             {
 *               filename: '/foo/bar.js',
 *               abs_path: 'https://baz.com/foo/bar.js',
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *   },
 * }
 */

/**
 * @typedef {object} SentryHint
 * @property {object} SentryHint.originalException
 * @property {object} SentryHint.syntheticException
 * @see {@link https://develop.sentry.dev/sdk/event-payloads/}
 * @see {@link https://docs.sentry.io/platforms/javascript/configuration/filtering/#using-hints}
 */

/**
 * Each of these tests will receive the same args as the beforeSend function and
 * will return a boolean depending on whether the event matches the test.
 */
const conditions = [isAmp, isYieldmo, isAdSafeProtect, isApsTag];

/**
 * @see {@link https://docs.sentry.io/concepts/data-management/filtering/#error-message}
 * @see {@link https://docs.sentry.io/platforms/javascript/configuration/filtering/#using--1}
 * @param {SentryEvent} event
 * @param {SentryHint} hint
 * @returns {SentryEvent | null}
 */
export function beforeSend(event, _hint) {
  if (triage(event, conditions)) {
    return event;
  }

  return null;
}

export default () => {
  Sentry.onLoad(function () {
    const {
      release,
      environment,
      sampleRate,
      tracesSampleRate,
      replaysSessionSampleRate,
      replaysOnErrorSampleRate,
    } = JSGlobals?.sentry || {};

    Sentry.init({
      dsn: SENTRY_DSN,
      release,
      environment,
      sampleRate,
      tracesSampleRate,
      replaysSessionSampleRate,
      replaysOnErrorSampleRate,
      beforeSend,
      /**
       * This is a list of error messages that should be ignored by Sentry. It
       * is a reasonably blunt tool as it will ignore all errors that contain
       * the string.
       * @see {@link https://docs.sentry.io/platforms/javascript/configuration/filtering/#using-}
       */
      ignoreErrors: ['AbortError: The operation was aborted.'],
      /**
       * This has no effect while we are using the loader script. Instead, this
       * is controlled from the Sentry UI.
       * @see {@link https://docs.sentry.io/platforms/javascript/install/loader/}
       * @see {@link https://independent-hw.sentry.io/settings/projects/frontend/loader-script/}
       */
      // debug: true,
    });
  });
};

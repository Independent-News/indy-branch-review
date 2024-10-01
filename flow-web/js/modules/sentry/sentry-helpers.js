/**
 * Identifies whether the stack trace contains a specific filepath fragment
 * @param {SentryEvent} e A Sentry event
 * @param {string} fragment A fragment of a source file path
 * @returns {bool} Whether or not the filepath fragment appears in the stack trace
 */
export function stackTraceContainsPathFragment(e, fragment) {
  const frames = e.exception?.values?.[0]?.stacktrace?.frames || [];

  return (
    Array.isArray(frames) &&
    frames.some(
      ({ filename, abs_path }) =>
        filename?.includes(fragment) || abs_path?.includes(fragment),
    )
  );
}

/**
 * Identifies whether the exception value contains a specific fragment
 * @see {@link https://docs.sentry.io/concepts/data-management/filtering/#error-message}
 * @param {import('#app/public/js/modules/sentry').SentryEvent} e A Sentry event
 * @param {string} fragment A fragment of the exception value
 * @returns {bool} Whether or not the exception value contains the fragment
 */
export function exceptionValueContainsFragment(e, fragment) {
  const value = e.exception?.values?.[0]?.value;

  return typeof value === 'string' && value?.includes(fragment);
}

/**
 * Runs the event through a series of triage tests
 * @param {import('#app/public/js/modules/sentry').SentryEvent} e A Sentry event
 * @param {import('#app/public/js/modules/sentry/sentry-triage').SentryTriageTest[]} tests
 * @returns {bool} Whether or not the event should be dismissed
 */
export function triage(e, tests) {
  return !tests.some((test) => test(e));
}

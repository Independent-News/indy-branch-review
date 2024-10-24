/**
 * These fixtures MUST be kept in sync with the tests in
 * flow-web/app/public/js/modules/sentry/__tests__/sentry-triage.test.js
 */

export const isAmp = {
  exception: {
    values: [
      {
        stacktrace: {
          frames: [
            {
              filename: '/ampproject/foo/bar/baz.js',
              abs_path:
                'https://raw.githubusercontent.com/ampproject/foo/bar/baz.js',
            },
          ],
        },
      },
    ],
  },
};

export const isYieldmo = {
  exception: {
    values: [
      {
        stacktrace: {
          frames: [
            {
              filename: '/ym.1.js',
              abs_path: 'https://static.yieldmo.com/ym.1.js',
            },
          ],
        },
      },
    ],
  },
};

export const isAdSafeProtect = {
  exception: {
    values: [
      {
        value: "Can't find variable: __iasPET",
      },
    ],
  },
};

export const isApsTag = {
  exception: {
    values: [
      {
        value: "Can't find variable: apstag",
      },
    ],
  },
};

/* eslint import/namespace: ['error', { allowComputed: true }] */

import * as triage from '../sentry-triage';

import * as events from './__fixtures__/sentry-events';

describe('Sentry triage tests', () => {
  /**
   * The events fixtures exports must match the names of the triage functions
   */
  const mappedEvents = Object.entries(triage).map(([name, fn]) => ({
    name,
    fn,
    event: events[name],
  }));

  const mockOtherEvent = {
    exception: {
      values: [
        {
          value:
            "This is a regular exception that doesn't match any triage function",
          stacktrace: {
            frames: [
              {
                filename: 'some/other/file.js',
                abs_path: 'https://somedomain/some/other/file.js',
              },
            ],
          },
        },
      ],
    },
  };

  it.each(mappedEvents)(
    '$name should correctly triage exception',
    ({ fn, event }) => {
      expect(fn(event)).toBe(true);
      expect(fn(mockOtherEvent)).toBe(false);
    },
  );
});

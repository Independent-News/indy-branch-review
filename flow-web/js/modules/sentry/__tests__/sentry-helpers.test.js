import {
  stackTraceContainsPathFragment,
  exceptionValueContainsFragment,
  triage,
} from '#app/public/js/modules/sentry/sentry-helpers';

describe('stackTraceContainsPathFragment()', () => {
  let mockEvent = {};

  beforeEach(() => {
    mockEvent = {
      exception: {
        values: [
          {
            stacktrace: {
              frames: [
                {
                  filename: '/mock/path/to/file.js',
                  abs_path: 'http://anotherDomain.com/mock/path/to/file.js',
                },
              ],
            },
          },
        ],
      },
    };
  });

  it('should return `true` when a stack trace frame originates from a matching filename', () => {
    const fragment = 'mock/path';

    const result = stackTraceContainsPathFragment(mockEvent, fragment);

    expect(result).toBe(true);
  });

  it('should return `true` when a stack trace frame originates from a matching path', () => {
    const fragment = 'mock/path';
    const event = { ...mockEvent };

    event.exception.values[0].stacktrace.frames[0].filename = undefined;

    const result = stackTraceContainsPathFragment(event, fragment);

    expect(result).toBe(true);
  });

  it('should return `false` when none of the stack trace frames mention the given path fragment', () => {
    const result = stackTraceContainsPathFragment(mockEvent, 'the other path!');

    expect(result).toBe(false);
  });

  it('should return `false` if the stack trace cannot be assessed', () => {
    const event = { ...mockEvent };

    event.exception.values[0].stacktrace = undefined;

    const result = stackTraceContainsPathFragment(event, 'the other path!');

    expect(result).toBe(false);
  });
});

describe('exceptionValueContainsFragment()', () => {
  let mockEvent = {};

  beforeEach(() => {
    mockEvent = {
      exception: {
        values: [
          {
            value: 'This is a mock error message',
          },
        ],
      },
    };
  });

  it('should return `true` when the exception value contains the given fragment', () => {
    const fragment = 'mock error';

    const result = exceptionValueContainsFragment(mockEvent, fragment);

    expect(result).toBe(true);
  });

  it('should return `false` when the exception value does not contain the given fragment', () => {
    const result = exceptionValueContainsFragment(
      mockEvent,
      'This will not match!',
    );

    expect(result).toBe(false);
  });

  it('should return `false` if there is no exception value', () => {
    const event = { ...mockEvent };

    event.exception.values[0].value = undefined;

    const result = exceptionValueContainsFragment(event, 'the other message!');

    expect(result).toBe(false);
  });
});

describe('triage()', () => {
  it('should return `true` if none of the triage tests are triggered', () => {
    const mockEvent = {};
    const mockTests = [() => false, () => false];

    const result = triage(mockEvent, mockTests);

    expect(result).toBe(true);
  });

  it('should return `false` if any of the triage tests are triggered', () => {
    const mockEvent = {};
    const mockTests = [() => false, () => true];

    const result = triage(mockEvent, mockTests);

    expect(result).toBe(false);
  });
});

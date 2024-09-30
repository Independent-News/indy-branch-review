/**
 * @jest-environment jsdom
 */

import 'jest-location-mock';

import { COOKIE_FEAT_SENTRY } from '#app/constants/cookies';

const originalServerEnv = process.env.SERVER;
const sentryCaptureException = jest.fn();

const toggleShouldLog = (toggle) => {
  location.search = toggle ? '?__DEBUG__' : '';
};

const toggleShouldLogToSentry = (toggle) => {
  window.JSGlobals = {
    featureFlags: {
      [COOKIE_FEAT_SENTRY]: toggle,
    },
  };
};

describe('Logging', () => {
  beforeEach(() => {
    global.Sentry = {
      captureException: sentryCaptureException,
    };

    window.JSGlobals = {
      featureFlags: {},
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  afterAll(() => {
    process.env.SERVER = originalServerEnv;
    delete global.Sentry;
    delete window.JSGlobals;
  });

  describe('to the console', () => {
    const fns = ['log', 'group', 'groupEnd', 'warn', 'error'];

    describe('when disabled', () => {
      beforeEach(() => {
        toggleShouldLog(false);
      });

      it.each(fns)('should not $name to the console', (name) => {
        const thatModule = require('../log');
        const mockLogMsg = `testing "${name}"`;
        const spy = jest.spyOn(console, name).mockImplementation(() => {});

        thatModule[name](mockLogMsg);

        expect(spy).not.toHaveBeenCalled();

        spy.mockRestore();
      });
    });

    describe('when enabled', () => {
      beforeEach(() => {
        toggleShouldLog(true);
      });

      it.each(fns)('should $name to the console', (name) => {
        const thatModule = require('../log');
        const mockLogMsg = `testing "${name}"`;
        const spy = jest.spyOn(console, name).mockImplementation(() => {});

        thatModule[name](mockLogMsg);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(mockLogMsg);

        spy.mockRestore();
      });
    });
  });

  describe('to Sentry', () => {
    const fns = ['warn', 'error'];

    describe('when disabled', () => {
      beforeEach(() => {
        toggleShouldLogToSentry(false);
      });

      it.each(fns)('should not $name to Sentry', (name) => {
        const thatModule = require(`../log`);

        thatModule[name]('mock log message');

        expect(sentryCaptureException).not.toHaveBeenCalled();
      });
    });

    describe('when enabled', () => {
      beforeEach(() => {
        toggleShouldLogToSentry(true);
      });

      it.each(fns)('should $name to Sentry', (name) => {
        const thatModule = require('../log');
        const mockLogMsg = `testing "${name}"`;

        thatModule[name](mockLogMsg);

        expect(sentryCaptureException).toHaveBeenCalledTimes(1);
        expect(sentryCaptureException).toHaveBeenCalledWith(mockLogMsg);
      });
    });
  });
});

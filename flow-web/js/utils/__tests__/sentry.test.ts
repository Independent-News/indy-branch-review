/**
 * @jest-environment jsdom
 */

import { isSentryEnabledClientSide } from '../sentry';

describe('Sentry public utils', () => {
  describe('isSentryEnabledClientSide()', () => {
    type JsGlobals = typeof window.JSGlobals;
    type JsGlobalsFeatureFlags = JsGlobals['featureFlags'];

    const mockSentryFeatureFlag = (enabledStatus?: boolean) =>
      (window.JSGlobals.featureFlags = {
        feat__sentry: enabledStatus,
      } as JsGlobalsFeatureFlags);

    beforeAll(() => {
      window.JSGlobals = {} as unknown as JsGlobals;
    });

    afterEach(() => {
      window.JSGlobals.featureFlags = {} as JsGlobalsFeatureFlags;
    });

    afterAll(() => {
      window.JSGlobals = undefined as unknown as JsGlobals;
    });

    it('should return true when the Sentry feature flag is enabled', () => {
      mockSentryFeatureFlag(true);
      const result = isSentryEnabledClientSide();
      expect(result).toBe(true);
    });

    it('should return false when the Sentry feature flag is disabled', () => {
      mockSentryFeatureFlag(false);
      const result = isSentryEnabledClientSide();
      expect(result).toBe(false);
    });

    it('should return false when the Sentry feature flag is not set', () => {
      mockSentryFeatureFlag(undefined);
      const result = isSentryEnabledClientSide();
      expect(result).toBe(false);
    });
  });
});

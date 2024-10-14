import type { FeatureFlags } from '#types/featureFlags';

export const isFeatureFlagEnabled = (flag: keyof FeatureFlags) =>
  window.JSGlobals?.featureFlags?.[flag];

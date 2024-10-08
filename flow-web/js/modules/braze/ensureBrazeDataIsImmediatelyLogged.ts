import { warn } from '../log';

export const BRAZE_DATA_FLUSH_WARN_MESSAGE =
  'Braze data flush was unsuccessful';

export default () => {
  const callback = (wasDataFlushSuccessful: boolean) => {
    if (!wasDataFlushSuccessful) {
      warn(BRAZE_DATA_FLUSH_WARN_MESSAGE);
    }
  };
  window.braze?.requestImmediateDataFlush(callback);
};

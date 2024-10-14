import { error } from './modules/log';

export const identifyAdFreeUserAsRejectAll = (callback = () => {}) => {
  try {
    window.__tcfapi(
      'postRejectAll',
      2,
      function (postRejectAllResponse, success) {
        if (!success) {
          error(
            'Error identifying ad-free user as reject all due to following response:',
            postRejectAllResponse,
          );
        }

        callback();
      },
    );
  } catch (e) {
    error('Error identifying ad-free user as reject all:', e.message);
    throw e;
  }
};

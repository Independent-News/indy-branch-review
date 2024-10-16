import { CAPTCHA_ACTION_SIGNUP_NEWSLETTERS } from '#app/constants/captcha';

import { InternalApi } from '../utils/internalApi';

import { FormState } from './FormState';
import { buildRequestBody } from './utils/buildRequestBody';

//  TODO: have this in one place in app and import it
const SHOW_SUCCESS_MESSAGE_DURATION = 5000;
export const SERVER_ERROR_MESSAGE = 'An error occurred, please try again later';

export const postNewsletters = async (state: FormState) => {
  if (!state.submittingRequest) {
    state.startRequest();

    try {
      const token = await window.grecaptcha.execute(
        window.JSGlobals.recaptureV3Key,
        {
          action: CAPTCHA_ACTION_SIGNUP_NEWSLETTERS,
        },
      );

      const response = await InternalApi.post(
        'newsletter-component/submit/lite',
        buildRequestBody(state, token),
      );

      if (response.ok) {
        state.onSuccess();

        setTimeout(() => {
          state.hideSuccessMessage();
        }, SHOW_SUCCESS_MESSAGE_DURATION);
      } else {
        const responseData = JSON.parse(await response.text());
        state.onError(
          responseData.message || responseData.verifyErrors?.[0].message,
        );
      }
    } catch {
      state.onError(SERVER_ERROR_MESSAGE);
    } finally {
      state.endRequest();
    }
  }
};

import { FormState } from '../FormState';
import { SUCCESS_POPUP_ID } from '../constants';
import { animateIn, animateOut } from '../utils/animation';

const SUCCESS_POPUP_TEXT_SELECTOR = '.text';

export const watchSuccessMessage = (state: FormState) => {
  state.watch(
    (data) => data.successMessage,
    (successMessage, previousValue) => {
      const successPopup = document.getElementById(SUCCESS_POPUP_ID);

      if (successPopup) {
        if (successMessage) {
          const successPopupText = successPopup.querySelector(
            SUCCESS_POPUP_TEXT_SELECTOR,
          );
          if (successPopupText) {
            successPopupText.textContent = successMessage;
          }

          animateIn(successPopup);
        } else {
          previousValue && animateOut(successPopup);
        }
      }
    },
  );
};

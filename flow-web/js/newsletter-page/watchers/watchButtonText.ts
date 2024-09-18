import { FormState } from '../FormState';
import { SUBMIT_BUTTON_TEXT_ID } from '../constants';

export const watchButtonText = (state: FormState) => {
  const buttonText = document.getElementById(SUBMIT_BUTTON_TEXT_ID);

  state.watch(
    (data) => data.buttonText,
    (text) => {
      if (buttonText) {
        buttonText.textContent = text;
      }
    },
  );
};

import { FormState } from '../FormState';
import { SUBMIT_BUTTON_ID } from '../constants';

export const watchFormValidity = (state: FormState) => {
  const submitFormButton = document.getElementById(
    SUBMIT_BUTTON_ID,
  ) as HTMLButtonElement | null;

  state.watch(
    (data) => data.valid,
    (newValue) => {
      if (submitFormButton) {
        submitFormButton.disabled = !newValue;
      }
    },
  );
};

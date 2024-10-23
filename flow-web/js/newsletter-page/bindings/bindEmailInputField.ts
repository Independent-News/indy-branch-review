import { isEmailValid } from '#app/util/isEmailValid';

import { FormState } from '../FormState';
import { EMAIL_INPUT_FIELD_ID } from '../constants';

export const bindEmailInputField = (state: FormState) => {
  const emailInputField = document.getElementById(EMAIL_INPUT_FIELD_ID);

  emailInputField?.addEventListener('blur', () => {
    state.markEmailFieldTouched();
  });

  emailInputField?.addEventListener('change', () => {
    state.markEmailFieldDirty();
  });

  emailInputField?.addEventListener('input', (event) => {
    const value = (event.target as HTMLInputElement)?.value;
    state.setEmail(value, isEmailValid(value));
  });
};

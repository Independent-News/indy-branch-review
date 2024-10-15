import { FORM_FIELD_EMAIL } from '#app/constants/formFieldNames';

import { FormState } from '../FormState';
import { EMAIL_INPUT_FIELD_ID } from '../constants';

const IS_DIRTY = 'is-dirty';
const IS_PRISTINE = 'is-pristine';
const IS_TOUCHED = 'is-touched';
const IS_UNTOUCHED = 'is-untouched';
const IS_VALID = 'is-valid';
const IS_INVALID = 'is-invalid';

export const watchEmail = (state: FormState) => {
  const emailInputField = document.getElementById(EMAIL_INPUT_FIELD_ID);

  state.watch(
    (data) => {
      return data[FORM_FIELD_EMAIL].dirty;
    },
    (newValue) => {
      if (newValue) {
        emailInputField?.classList.add(IS_DIRTY);
        emailInputField?.classList.remove(IS_PRISTINE);
      } else {
        emailInputField?.classList.remove(IS_DIRTY);
        emailInputField?.classList.add(IS_PRISTINE);
      }
    },
  );

  state.watch(
    (data) => {
      return data[FORM_FIELD_EMAIL].touched;
    },
    (newValue) => {
      if (newValue) {
        emailInputField?.classList.add(IS_TOUCHED);
        emailInputField?.classList.remove(IS_UNTOUCHED);
      } else {
        emailInputField?.classList.remove(IS_TOUCHED);
        emailInputField?.classList.add(IS_UNTOUCHED);
      }
    },
  );

  state.watch(
    (data) => {
      return data[FORM_FIELD_EMAIL].valid;
    },
    (newValue) => {
      if (newValue) {
        emailInputField?.classList.add(IS_VALID);
        emailInputField?.classList.remove(IS_INVALID);
      } else {
        emailInputField?.classList.remove(IS_VALID);
        emailInputField?.classList.add(IS_INVALID);
      }
    },
  );
};

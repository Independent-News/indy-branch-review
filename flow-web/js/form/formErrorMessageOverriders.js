import {
  FORM_ERROR_NAME_PATTERN_MISMATCH,
  FORM_ERROR_NAME_TOO_LONG,
} from '#app/constants/formErrorMessages';

import { isFormatError, isLengthError } from './formErrorInterrogators';

export const determineFirstNameErrorMessageOverride = (
  firstNameErrorMessageState,
) => {
  if (!firstNameErrorMessageState) {
    return null;
  }
  const firstRelevantErrorType = firstNameErrorMessageState?.at(0)?.type;
  const hasLengthError = isLengthError(firstRelevantErrorType);
  const hasFormatError = isFormatError(firstRelevantErrorType);
  return hasLengthError
    ? FORM_ERROR_NAME_TOO_LONG
    : hasFormatError
      ? FORM_ERROR_NAME_PATTERN_MISMATCH
      : null;
};

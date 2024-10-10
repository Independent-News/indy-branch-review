import {
  FORM_ERROR_NAME_PATTERN_MISMATCH,
  FORM_ERROR_NAME_TOO_LONG,
} from '#app/constants/formErrorMessages';

import { isFormatError, isLengthError } from '../formErrorInterrogators';
import { determineFirstNameErrorMessageOverride } from '../formErrorMessageOverriders';

jest.mock('../formErrorInterrogators');

describe('formErrorMessageOverriders', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('determineFirstNameErrorMessageOverride()', () => {
    const mockFirstNameErrorMessageState = [
      {
        type: 'someErrorType',
      },
    ];

    it('will return null if provided error state is empty', () => {
      const result = determineFirstNameErrorMessageOverride();
      expect(result).toBeNull();
    });

    it('will return name length custom error message if length error is detected', () => {
      isLengthError.mockReturnValue(true);
      const result = determineFirstNameErrorMessageOverride(
        mockFirstNameErrorMessageState,
      );
      expect(isLengthError).toHaveBeenCalledWith('someErrorType');
      expect(result).toBe(FORM_ERROR_NAME_TOO_LONG);
    });

    it('will return format custom error message if format error is detected', () => {
      isLengthError.mockReturnValue(false);
      isFormatError.mockReturnValue(true);
      const result = determineFirstNameErrorMessageOverride(
        mockFirstNameErrorMessageState,
      );
      expect(isFormatError).toHaveBeenCalledWith('someErrorType');
      expect(result).toBe(FORM_ERROR_NAME_PATTERN_MISMATCH);
    });

    it('will return null if no custom error message validation requirements are met', () => {
      isLengthError.mockReturnValue(false);
      isFormatError.mockReturnValue(false);
      const result = determineFirstNameErrorMessageOverride(
        mockFirstNameErrorMessageState,
      );
      expect(result).toBeNull();
    });
  });
});

import { isFormatError, isLengthError } from '../formErrorInterrogators';

describe('formErrorInterrogators', () => {
  describe('isLengthError()', () => {
    it('will return false if provided error type is empty', () => {
      const result = isLengthError();
      expect(result).toBe(false);
    });

    it('will return false if provided error type is not a length error', () => {
      const result = isLengthError('notALengthError');
      expect(result).toBe(false);
    });

    it('will return true if provided error type is a length error', () => {
      const result = isLengthError('hasMin');
      expect(result).toBe(true);
      const newResult = isLengthError('hasMax');
      expect(newResult).toBe(true);
    });
  });

  describe('isFormatError()', () => {
    it('will return false if provided error type is empty', () => {
      const result = isFormatError();
      expect(result).toBe(false);
    });

    it('will return false if provided error type is not a format error', () => {
      const result = isFormatError('notAFormatError');
      expect(result).toBe(false);
    });

    it('will return true if provided error type is a format error', () => {
      const result = isFormatError('matchesRegex');
      expect(result).toBe(true);
    });
  });
});

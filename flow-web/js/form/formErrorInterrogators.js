export const isLengthError = (errorType = '') =>
  ['hasMin', 'hasMax'].some((errorTypePrefix) =>
    errorType.startsWith(errorTypePrefix),
  );

export const isFormatError = (errorType = '') =>
  errorType.includes('matchesRegex');

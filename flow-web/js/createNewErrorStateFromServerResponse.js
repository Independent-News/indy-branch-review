export const createNewErrorStateFromServerResponse = (
  serverResponse,
  formValues,
  inputErrorMessage,
  key,
  options = {},
) => {
  const currentFieldKey = (name) => `${key}-${name}`;
  const { shouldValidateAllFields = false } = options;

  const fieldsToValidate = shouldValidateAllFields
    ? serverResponse
    : // only validate fields with a value
      serverResponse.filter(({ name }) => formValues[currentFieldKey(name)]);

  // collects all error messages for each input
  const serverErrorMessages = fieldsToValidate.reduce(
    (acc, { name, message }) => ({
      ...acc,
      [name]: acc[name] ? [...acc[name], message] : [message],
    }),
    {},
  );

  // assigns the first arrived error message to each input
  const serverErrorMessagesSorted = Object.entries(serverErrorMessages).map(
    ([name, errorMessages]) => [currentFieldKey(name), errorMessages.sort()[0]],
  );

  // resets error message state values to empty strings
  // overwrites them with error message coming back from server
  const errorMessageState = Object.entries({
    ...Object.fromEntries(
      Object.entries(inputErrorMessage).map(([key]) => [key, '']),
    ),
    ...Object.fromEntries(serverErrorMessagesSorted),
  });

  // new error state
  const errorMessageMap = errorMessageState.map(([name, message]) => [
    name,
    message,
  ]);

  return errorMessageMap;
};

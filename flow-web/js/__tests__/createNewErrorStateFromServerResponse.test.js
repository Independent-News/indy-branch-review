import { FORM_FIELD_EMAIL } from '#app/constants/formFieldNames';
import { ID_REG_FORM_EMAIL, ID_REG_FORM_FIRST_NAME } from '#app/constants/ids';

import { createNewErrorStateFromServerResponse } from '../createNewErrorStateFromServerResponse';

describe('createNewErrorStateFromServerResponse()', () => {
  const FORM_KEY = 'reg-form';
  const mockedServerResponse = [
    {
      name: FORM_FIELD_EMAIL,
      message: 'test-email-error-message',
    },
    {
      name: 'firstName',
      message: 'test-firstName-error-message',
    },
  ];

  const mockedFormValues = {
    [ID_REG_FORM_EMAIL]: 'test-email-input',
    [ID_REG_FORM_FIRST_NAME]: 'test-firstName-input',
  };

  it('will return correct error state from server validation response with empty previous error state', () => {
    const errorMessageState = {};

    const newErrorState = createNewErrorStateFromServerResponse(
      mockedServerResponse,
      mockedFormValues,
      errorMessageState,
      FORM_KEY,
    );

    expect(newErrorState).toEqual([
      [ID_REG_FORM_EMAIL, 'test-email-error-message'],
      [ID_REG_FORM_FIRST_NAME, 'test-firstName-error-message'],
    ]);
  });

  it('will return the correct error state from server validation response with previous error state present', () => {
    const errorMessageState = {
      [ID_REG_FORM_EMAIL]: 'test-error-message',
      [ID_REG_FORM_FIRST_NAME]: 'test-error-message',
    };

    const newErrorState = createNewErrorStateFromServerResponse(
      mockedServerResponse,
      mockedFormValues,
      errorMessageState,
      FORM_KEY,
    );

    expect(newErrorState).toEqual([
      [ID_REG_FORM_EMAIL, 'test-email-error-message'],
      [ID_REG_FORM_FIRST_NAME, 'test-firstName-error-message'],
    ]);
  });

  it('will return the first alphabetically ordered error message per field when multiple errors arrive from server', () => {
    const mockedServerResponse = [
      {
        name: FORM_FIELD_EMAIL,
        message: 'test-email-error-A',
      },
      {
        name: FORM_FIELD_EMAIL,
        message: 'test-email-error-B',
      },
      {
        name: 'firstName',
        message: 'test-firstName-error-A',
      },
      {
        name: 'firstName',
        message: 'test-firstName-error-B',
      },
    ];

    const errorMessageState = {};

    let newErrorState = createNewErrorStateFromServerResponse(
      mockedServerResponse,
      mockedFormValues,
      errorMessageState,
      FORM_KEY,
    );

    expect(newErrorState).toEqual([
      [ID_REG_FORM_EMAIL, 'test-email-error-A'],
      [ID_REG_FORM_FIRST_NAME, 'test-firstName-error-A'],
    ]);

    const newMockedServerResponse = [
      {
        name: FORM_FIELD_EMAIL,
        message: 'test-email-error-C',
      },
      ...mockedServerResponse,
    ];

    newErrorState = createNewErrorStateFromServerResponse(
      newMockedServerResponse,
      mockedFormValues,
      errorMessageState,
      FORM_KEY,
    );

    expect(newErrorState).toEqual([
      [ID_REG_FORM_EMAIL, 'test-email-error-A'],
      [ID_REG_FORM_FIRST_NAME, 'test-firstName-error-A'],
    ]);
  });
});

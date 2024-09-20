/**
 * @jest-environment jsdom
 */

import { FORM_FIELD_EMAIL } from '#app/constants/formFieldNames';

import { FormState } from '../../FormState';
import { watchEmail } from '../watchEmail';

describe('watchEmail()', () => {
  let emailField;

  beforeEach(() => {
    document.body.innerHTML = `
      <input id="email-input-field"/>
    `;

    emailField = document.getElementById('email-input-field');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('when `dirty` is true', () => {
    beforeEach(() => {
      emailField.className = 'is-pristine';

      const state = new FormState();
      watchEmail(state);

      state.data[FORM_FIELD_EMAIL].dirty = true;
      state.digest();
    });

    it('should remove `is-pristine` class from field', () => {
      expect(emailField.classList.contains('is-pristine')).toBe(false);
    });

    it('should add `is-dirty` class to field', () => {
      expect(emailField.classList.contains('is-dirty')).toBe(true);
    });
  });

  describe('when `dirty` is false', () => {
    beforeEach(() => {
      emailField.className = 'is-dirty';

      const state = new FormState();
      watchEmail(state);

      // start off setting `dirty` to true
      state.data[FORM_FIELD_EMAIL].dirty = true;
      state.digest();

      state.data[FORM_FIELD_EMAIL].dirty = false;
      state.digest();
    });

    it('should remove `is-dirty` class from field', () => {
      expect(emailField.classList.contains('is-dirty')).toBe(false);
    });

    it('should add `is-pristine` class to field', () => {
      expect(emailField.classList.contains('is-pristine')).toBe(true);
    });
  });

  describe('when `touched` is true', () => {
    beforeEach(() => {
      emailField.className = 'is-untouched';

      const state = new FormState();
      watchEmail(state);

      // start off setting `touched` to false
      state.data[FORM_FIELD_EMAIL].touched = false;
      state.digest();

      state.data[FORM_FIELD_EMAIL].touched = true;
      state.digest();
    });

    it('should remove `is-untouched` class from field', () => {
      expect(emailField.classList.contains('is-untouched')).toBe(false);
    });

    it('should add `is-touched` class to field', () => {
      expect(emailField.classList.contains('is-touched')).toBe(true);
    });
  });

  describe('when `touched` is false', () => {
    beforeEach(() => {
      emailField.className = 'is-touched';

      const state = new FormState();
      watchEmail(state);

      // start off setting `touched` to true
      state.data[FORM_FIELD_EMAIL].touched = true;
      state.digest();

      state.data[FORM_FIELD_EMAIL].touched = false;
      state.digest();
    });

    it('should remove `is-touched` class from field', () => {
      expect(emailField.classList.contains('is-touched')).toBe(false);
    });

    it('should add `is-untouched` class to field', () => {
      expect(emailField.classList.contains('is-untouched')).toBe(true);
    });
  });
});

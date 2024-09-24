/**
 * @jest-environment jsdom
 */

import { sortFields } from '../handleTab';

describe('sortFields()', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" data-tabindex="1" />
      <input type="text" data-tabindex="3" />
      <input type="text" data-tabindex="4" />
      <input type="text" data-tabindex="2" />
    `;
  });

  it('should return sorted array of elements by asc', () => {
    const fields = document.querySelectorAll('input');
    const expectedResult = [];

    for (let i = 1; i <= 4; i++) {
      const field = document.querySelector(`input[data-tabindex="${i}"]`);

      expectedResult.push(field);
    }

    const result = sortFields(fields);

    expect(result).toEqual(expectedResult);
  });
});

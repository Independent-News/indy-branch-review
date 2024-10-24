/**
 * @jest-environment jsdom
 */

import { ID_SUCCESS_HINT } from '#app/constants/ids';

import { showPopup } from '../showPopup';

jest.useFakeTimers();

describe('showPopup()', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="${ID_SUCCESS_HINT}" class="hide"></div>
    `;

    container = document.getElementById(ID_SUCCESS_HINT);
  });

  it('should remove class "hide" from the element', () => {
    showPopup();

    expect(container.classList.contains('hide')).toBeFalsy();
  });

  it('should add class "hide" again after delay to the element', async () => {
    const DELAY = 50;

    showPopup(DELAY);
    jest.advanceTimersByTime(DELAY + 1);

    expect(container.classList.contains('hide')).toBeTruthy();
  });
});

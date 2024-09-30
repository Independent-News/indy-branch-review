export const keyDown = (event) => {
  if (event.keyCode === 9) {
    event.preventDefault();

    const field = event.target;
    const tabindex = Number(field.getAttribute('data-tabindex'));
    const nextElement = document.querySelector(
      `input[data-tabindex="${tabindex + 1}"], select[data-tabindex="${
        tabindex + 1
      }"]`,
    );

    field.setAttribute('tabindex', -1);

    nextElement.setAttribute('tabindex', 0);
    nextElement.focus();
  }
};

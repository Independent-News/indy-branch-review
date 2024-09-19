import * as breakPoints from '#app/constants/breakpoints';
import { ID_SUCCESS_HINT, ID_SUCCESS_HINT_HEADER } from '#app/constants/ids';

const addAppearingAndDisappearing = (element, hidingTimeout) => {
  element.classList.remove('hide');

  setTimeout(() => {
    element.classList.add('hide');
  }, hidingTimeout);
};

export const showPopup = (hidingTimeout = 5000) => {
  const innerWidth = window.innerWidth;

  if (innerWidth > breakPoints.laptop) {
    const successHintBottom = document.getElementById(ID_SUCCESS_HINT);

    addAppearingAndDisappearing(successHintBottom, hidingTimeout);

    return;
  }

  const successHintHeader = document.getElementById(ID_SUCCESS_HINT_HEADER);

  addAppearingAndDisappearing(successHintHeader, hidingTimeout);
};

import {
  CLASS_BODY_INPUT_MOUSE,
  CLASS_BODY_INPUT_TOUCH,
  CLASS_BODY_INPUT_KEYBOARD_ACTIVE,
} from '#app/constants/classNames';

import * as thisModule from './inputDetection';

export const onKeyDown = (e) => {
  if (e.defaultPrevented) {
    return;
  }

  // Ignore inputs.
  const { target } = e;
  if (
    ['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'].includes(target?.tagName) ||
    target?.hasAttribute('contenteditable')
  ) {
    return;
  }

  document.body.classList.add(CLASS_BODY_INPUT_KEYBOARD_ACTIVE);
};

export const isTouchDevice = () =>
  'ontouchstart' in window ||
  (window.navigator['maxTouchPoints'] !== undefined &&
    window.navigator['maxTouchPoints'] > 0) ||
  window['DocumentTouch'] !== undefined;

const inputDetection = () => {
  /*
   * Partially swiped from https://github.com/ampproject/amphtml/blob/b6d15500d27048da005c833b759674fcc453e735/src/input.js
   */

  /* Keyboard */

  const onMouseDownOrTouchStart = () => {
    document.body.classList.remove(CLASS_BODY_INPUT_KEYBOARD_ACTIVE);
  };

  document.addEventListener('keydown', thisModule.onKeyDown);
  document.addEventListener('mousedown', onMouseDownOrTouchStart);

  /* Touch */

  const hasTouch = thisModule.isTouchDevice();

  document.body.classList.toggle(CLASS_BODY_INPUT_TOUCH, hasTouch);
  document.addEventListener('ontouchstart', onMouseDownOrTouchStart);

  /* Mouse */

  let hasMouse = true;

  // If touch available, temporarily set hasMouse to false and wait for mouse events.
  if (hasTouch) {
    hasMouse = false;
    const reactivateMouse = () => {
      if (!hasMouse) {
        document.body.classList.add(CLASS_BODY_INPUT_MOUSE);
      }
    };
    document.addEventListener('mousemove', reactivateMouse);
  }

  document.body.classList.toggle(CLASS_BODY_INPUT_MOUSE, hasMouse);
};

export default inputDetection;

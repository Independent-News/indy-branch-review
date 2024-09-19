/**
 * @jest-environment jsdom
 */

import {
  CLASS_BODY_INPUT_KEYBOARD_ACTIVE,
  CLASS_BODY_INPUT_MOUSE,
  CLASS_BODY_INPUT_TOUCH,
} from '#app/constants/classNames';

import inputDetection, * as inputDetectionHandlers from '../inputDetection';

describe('inputDetection module', () => {
  // mock matchMedia to respresent mouse active
  let isMouseActive = true;
  window.matchMedia = () => ({
    matches: isMouseActive,
  });

  beforeEach(() => {
    jest.spyOn(document.body.classList, 'add');
    jest.spyOn(document.body.classList, 'remove');
    jest.spyOn(document.body.classList, 'toggle');
    jest.spyOn(document, 'addEventListener');
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  describe('onKeyDown()', () => {
    const mockEventObject = (options) => ({
      target: {
        hasAttribute: jest.fn(),
        ...options,
      },
    });

    it('will not add keyboard active class if event is default prevented', () => {
      const mockedEventObj = { defaultPrevented: true };
      inputDetectionHandlers.onKeyDown(mockedEventObj);
      expect(document.body.classList.add).not.toHaveBeenCalled();
    });

    it.each([
      document.createElement('input'),
      document.createElement('textarea'),
      document.createElement('select'),
      document.createElement('option'),
    ])(
      'it will not add keyboard active class when event target is %s',
      (mockEventObject) => {
        inputDetectionHandlers.onKeyDown({
          target: mockEventObject,
        });
        expect(document.body.classList.add).not.toHaveBeenCalled();
      },
    );

    it('will not add keyboard active class if event has contenteditable attribute', () => {
      const mockEventObj = mockEventObject();
      const {
        target: { hasAttribute },
      } = mockEventObj;
      hasAttribute.mockReturnValue(true);
      inputDetectionHandlers.onKeyDown(mockEventObject);
      expect(document.body.classList.add).toHaveBeenCalledTimes(1);
      expect(document.body.classList.add).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_KEYBOARD_ACTIVE,
      );
    });
  });

  describe('inputDetection()', () => {
    beforeEach(() => {
      jest.spyOn(inputDetectionHandlers, 'isTouchDevice');
    });

    const expectedEventListenerCalls = [
      ['keydown', inputDetectionHandlers.onKeyDown], // can target due to thisModule trick
      ['mousedown', expect.any(Function)],
      ['ontouchstart', expect.any(Function)],
    ];

    it('will setup correct initial event listeners', () => {
      inputDetection();
      expect(document.addEventListener).toHaveBeenCalledTimes(3);
      expect(document.addEventListener.mock.calls).toEqual(
        expect.arrayContaining(expectedEventListenerCalls),
      );
    });

    it('will remove keyboard active class from body on mouseDown event', () => {
      inputDetection();
      document.body.dispatchEvent(new Event('mousedown', { bubbles: true }));
      expect(document.body.classList.remove).toHaveBeenCalled();
      expect(document.body.classList.remove).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_KEYBOARD_ACTIVE,
      );
    });

    it('will remove keyboard active class from body on touch start event', () => {
      inputDetection();
      document.body.dispatchEvent(new Event('ontouchstart', { bubbles: true }));
      expect(document.body.classList.remove).toHaveBeenCalled();
      expect(document.body.classList.remove).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_KEYBOARD_ACTIVE,
      );
    });

    it('will call onKeyDown handler on key down event', () => {
      jest.spyOn(inputDetectionHandlers, 'onKeyDown');
      inputDetection();
      document.body.dispatchEvent(new Event('keydown', { bubbles: true }));
      expect(inputDetectionHandlers.onKeyDown).toHaveBeenCalledTimes(1);
    });

    it('will toggle input touch class correct based whether touch supported device', () => {
      inputDetectionHandlers.isTouchDevice.mockReturnValue(true);
      inputDetection();
      expect(document.body.classList.toggle).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_TOUCH,
        true,
      );
    });

    it('will not setup mousemove event listener if non-touch supported device', () => {
      inputDetectionHandlers.isTouchDevice.mockReturnValue(false);
      inputDetection();
      expect(document.body.classList.toggle).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_TOUCH,
        false,
      );
      expect(document.body.classList.toggle).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_MOUSE,
        true,
      );
      expect(document.addEventListener).toHaveBeenCalledTimes(3);
      expect(document.addEventListener.mock.calls).toEqual(
        expect.arrayContaining(expectedEventListenerCalls),
      );
    });

    it('will setup mousemove event listeners if touch supported device which toggles input mouse class on body correctly', () => {
      isMouseActive = false;
      inputDetectionHandlers.isTouchDevice.mockReturnValue(true);
      inputDetection();
      expect(document.body.classList.toggle).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_TOUCH,
        true,
      );
      expect(document.body.classList.toggle).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_MOUSE,
        false,
      );
      expect(document.addEventListener).toHaveBeenCalledTimes(4);
      expect(document.addEventListener.mock.calls).toEqual(
        expect.arrayContaining([['mousemove', expect.any(Function)]]),
      );

      isMouseActive = true;

      document.body.dispatchEvent(new Event('mousemove', { bubbles: true }));

      expect(document.body.classList.add).toHaveBeenCalledWith(
        CLASS_BODY_INPUT_MOUSE,
      );
    });
  });

  describe('isTouchDevice()', () => {
    beforeEach(() => {
      delete window.ontouchstart;
      delete window.navigator.maxTouchPoints;
      delete window.DocumentTouch;
    });

    it('does not detect touch by default', () => {
      expect(inputDetectionHandlers.isTouchDevice()).toBe(false);
    });

    const mockOntouchstart = () => (window.ontouchstart = true);
    const mockMaxTouchPoints = () => (window.navigator.maxTouchPoints = 1);
    const mockMaxTouchPointsZero = () => (window.navigator.maxTouchPoints = 0);
    const mockDocumentTouch = () => (window.DocumentTouch = true);

    it.each([
      [mockOntouchstart, true],
      [mockMaxTouchPoints, true],
      [mockMaxTouchPointsZero, false],
      [mockDocumentTouch, true],
    ])('it will detect if touch is enabled', (setupCode, result) => {
      setupCode();
      expect(inputDetectionHandlers.isTouchDevice()).toBe(result);
    });
  });
});

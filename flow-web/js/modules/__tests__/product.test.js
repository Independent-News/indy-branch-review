import {
  CLASS_JS_PRODUCT_ANCHOR,
  CLASS_JS_PRODUCT_LEFT_CARD_SUMMARY,
  CLASS_JS_PRODUCT_BODY_BUY_BUTTON,
  CLASS_JS_PRICE_COMPARISON,
} from '#app/constants/classNames';

import ProductUI from '#app/public/js/modules/product';

/**
 * Mocks the querySelector method of a DOM object
 * @param {object} dom Mock DOM object referenced by sel
 * @param {string} sel A selector used to address a DOM object
 * @returns Whatever is at the address which matches sel i.e. a mock DOM object
 */
function mockQuerySelector(dom, sel) {
  return (
    Object.entries(dom).find(
      ([className, _el]) => sel === `.${className}`,
    )?.[1] || null
  );
}

/**
 * Mocks a DOM object with a querySelector method that will return a child mock
 * DOM object or null as if it were an actual DOM object.
 * @param {object} children Mapping of className to mock DOM object
 * @returns Mock DOM object
 */
function mockDOMObject(children) {
  return {
    querySelector: jest.fn((sel) => mockQuerySelector(children, sel)),
  };
}

describe('Product UI class', () => {
  const pageScroll = 200;
  const anchorOffset = 400;
  const anchorName = 'foo';
  const anchor = {
    getAttribute: jest.fn((attr) => {
      return {
        name: anchorName,
      }[attr];
    }),
    getBoundingClientRect: jest.fn(() => ({
      top: anchorOffset,
    })),
  };
  const summary = { clientHeight: 500, setAttribute: () => {} };
  const mockAddEventListener = { addEventListener: jest.fn() };
  const mockRemoveListeners = { removeEventListener: jest.fn() };
  const bodyBuyButton = { ...mockAddEventListener, ...mockRemoveListeners };
  const priceComparisonBuyButton = {
    ...mockAddEventListener,
    ...mockRemoveListeners,
  };
  const productEl = mockDOMObject({
    [CLASS_JS_PRODUCT_ANCHOR]: anchor,
    [CLASS_JS_PRODUCT_LEFT_CARD_SUMMARY]: summary,
    [CLASS_JS_PRODUCT_BODY_BUY_BUTTON]: bodyBuyButton,
    [CLASS_JS_PRICE_COMPARISON]: priceComparisonBuyButton,
  });

  afterEach(() => {
    global.window = undefined;
    jest.clearAllMocks();
  });

  describe('instantiates without sub UI components', () => {
    let productUI;

    beforeEach(() => {
      productUI = new ProductUI(productEl);
    });

    it('returns the correct targetId', () => {
      const { anchor } = productUI.domCache;

      expect(productUI.targetId).toEqual(anchorName);
      expect(anchor.getAttribute).toBeCalledWith('name');
    });

    it('can scroll into view', () => {
      const expected = pageScroll + anchorOffset;
      const mockScrollTo = jest.fn();

      global.window = {
        scrollTo: mockScrollTo,
        scrollY: pageScroll,
      };

      productUI.scrollIntoView();

      expect(productUI.scrollTarget).toBe(expected);
      expect(mockScrollTo).toHaveBeenCalledWith(0, expected);
    });

    describe('setupListeners()', () => {
      it.each([
        {
          name: 'Sets up the event listener on Product Body Buy Link',
          target: bodyBuyButton,
          event: 'click',
          handlerName: 'bodyBuyLinkClick',
        },
        {
          name: 'Sets up the event listener on Price Comparison Buy Link',
          target: priceComparisonBuyButton,
          event: 'click',
          handlerName: 'priceComparisonLinkClick',
        },
      ])('$name', ({ target, event, handlerName }) => {
        const handler = productUI.events[handlerName];
        productUI.setupListeners();
        expect(target.addEventListener).toBeCalledWith(event, handler);
      });
    });

    describe('removeListeners()', () => {
      it.each([
        {
          name: 'Removes the event listener on Product Body Buy Link',
          target: bodyBuyButton,
          event: 'click',
          handlerName: 'bodyBuyLinkClick',
        },
        {
          name: 'Removes the event listener on Price Comparison Buy Link',
          target: priceComparisonBuyButton,
          event: 'click',
          handlerName: 'priceComparisonLinkClick',
        },
      ])('$name', ({ target, event, handlerName }) => {
        const handler = productUI.events[handlerName];
        productUI.removeListeners();
        expect(target.removeEventListener).toBeCalledWith(event, handler);
      });
    });

    it('returns the correct sticky position for the summary left card', () => {
      let winHeight = 700;
      const elHeight = summary.clientHeight;
      global.window = { innerHeight: winHeight };
      const productUI = new ProductUI(productEl);

      winHeight = 350;
      const result = winHeight - elHeight;
      global.window = { innerHeight: winHeight };
      expect(productUI.summaryStickyPositionValue).toEqual(result);
    });
  });

  describe('instantiates without full sub DOM', () => {
    it('should handle instances where not all sub DOM is present', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error');
      const consoleWarnSpy = jest.spyOn(console, 'warn');

      // Mock an empty product i.e. without any DOM
      const productEl = mockDOMObject({});
      const productUI = new ProductUI(productEl);

      productUI.init();

      expect(consoleWarnSpy).not.toHaveBeenCalled();
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
  });
});

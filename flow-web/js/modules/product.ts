import {
  CLASS_JS_PRODUCT_ANCHOR,
  CLASS_JS_PRODUCT_LEFT_CARD_SUMMARY,
  CLASS_JS_PRODUCT_BODY_BUY_BUTTON,
  CLASS_JS_PRICE_COMPARISON,
} from '#app/constants/classNames';

import { dispatchPriceComparisonListBuyNowClick } from './custom-event-dispatchers';

import type { Products } from '#types/JSGlobals';

type HTMLElementOrNull = HTMLElement | null;

class Product {
  el: HTMLElement;
  domCache: {
    anchor: HTMLElementOrNull;
    summary: HTMLElementOrNull;
    bodyBuyButton: HTMLElementOrNull;
    priceComparisonBuyButton: HTMLElementOrNull;
  };
  events: {
    priceComparisonLinkClick: () => void;
    bodyBuyLinkClick: (this: HTMLElement, ev: MouseEvent) => unknown;
  };
  stickySummary: boolean;

  constructor(
    el: HTMLElement,
    config: Products = {
      stickySummary: false,
    },
  ) {
    this.el = el;

    this.domCache = {
      anchor: this.el.querySelector(`.${CLASS_JS_PRODUCT_ANCHOR}`),
      summary: this.el.querySelector(`.${CLASS_JS_PRODUCT_LEFT_CARD_SUMMARY}`),
      bodyBuyButton: this.el.querySelector(
        `.${CLASS_JS_PRODUCT_BODY_BUY_BUTTON}`,
      ),
      priceComparisonBuyButton: this.el.querySelector(
        `.${CLASS_JS_PRICE_COMPARISON}`,
      ),
    };

    this.events = {
      priceComparisonLinkClick:
        this.handlePriceComparisonBuyLinkClick.bind(this),
      bodyBuyLinkClick: () => {},
    };
    this.stickySummary = config.stickySummary;
    if (this.stickySummary && this.domCache.summary === null) {
      throw new Error('the product does not contain an element with the class');
    }
  }

  setupListeners() {
    this.domCache.bodyBuyButton?.addEventListener(
      'click',
      this.events.bodyBuyLinkClick,
    );
    this.domCache.priceComparisonBuyButton?.addEventListener(
      'click',
      this.events.priceComparisonLinkClick,
    );
  }

  removeListeners() {
    this.domCache.bodyBuyButton?.removeEventListener(
      'click',
      this.events.bodyBuyLinkClick,
    );
    this.domCache.priceComparisonBuyButton?.removeEventListener(
      'click',
      this.events.priceComparisonLinkClick,
    );
  }

  handlePriceComparisonBuyLinkClick() {
    dispatchPriceComparisonListBuyNowClick();
  }

  get summaryStickyPositionValue() {
    const elHeight = this.domCache.summary?.clientHeight ?? 0;
    const winHeight = window.innerHeight;
    return elHeight > winHeight ? winHeight - elHeight : 0;
  }

  set summaryStickyPosition(value: number) {
    this.domCache.summary?.setAttribute(
      'style',
      `--sticky-position: ${value}px`,
    );
  }

  get targetId() {
    return this.domCache.anchor?.getAttribute('name') ?? '';
  }

  get scrollTarget() {
    return (
      window.scrollY + (this.domCache.anchor?.getBoundingClientRect().top ?? 0)
    );
  }

  scrollIntoView() {
    window.scrollTo(0, this.scrollTarget);
  }

  init() {
    this.setupListeners();
    if (this.stickySummary) {
      this.summaryStickyPosition = this.summaryStickyPositionValue;
    }
    return this;
  }

  cleanup() {
    this.removeListeners();
  }
}

export default Product;

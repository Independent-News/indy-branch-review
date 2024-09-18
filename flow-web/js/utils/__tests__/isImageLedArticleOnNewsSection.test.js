/**
 * @jest-environment jsdom
 */

import { GALLERY, IMAGE } from '#app/constants/heroType';
import { SECTION_PATH_NEWS } from '#app/constants/sectionPaths';

import isImageLedArticleOnNewsSection from '../isImageLedArticleOnNewsSection';

describe('isImageLedArticleOnNewsSection()', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { pathname: '' },
      writable: true,
    });
  });

  beforeEach(() => {
    window.JSGlobals = {};
  });

  afterEach(() => {
    location.pathname = '';
  });

  afterAll(() => {
    delete window.JSGlobals;
  });

  it('will return false on non-article pages', () => {
    location.pathname = SECTION_PATH_NEWS;
    window.JSGlobals.article = undefined;
    expect(isImageLedArticleOnNewsSection()).toBe(false);
  });

  it('will return false if the article is neither of image nor gallery hero type', () => {
    window.JSGlobals.article = {
      heroType: 'not-an-image-or-gallery',
    };
    expect(isImageLedArticleOnNewsSection()).toBe(false);
  });

  it('will return false if the article is neither of image nor gallery hero type on news section', () => {
    location.pathname = SECTION_PATH_NEWS;
    window.JSGlobals.article = {
      heroType: 'not-an-image-or-gallery',
    };
    expect(isImageLedArticleOnNewsSection()).toBe(false);
  });

  it('will return false if the article is of image hero type but not on news section', () => {
    window.JSGlobals.article = {
      heroType: IMAGE,
    };
    expect(isImageLedArticleOnNewsSection()).toBe(false);
  });

  it('will return false if the article is of gallery hero type but not on news section', () => {
    window.JSGlobals.article = {
      heroType: GALLERY,
    };
    expect(isImageLedArticleOnNewsSection()).toBe(false);
  });

  it('will return true if the article is of image hero type on news section', () => {
    location.pathname = SECTION_PATH_NEWS;
    window.JSGlobals.article = {
      heroType: IMAGE,
    };
    expect(isImageLedArticleOnNewsSection()).toBe(true);
    window.location.pathname = `${SECTION_PATH_NEWS}/sub-section`;
    expect(isImageLedArticleOnNewsSection()).toBe(true);
  });

  it('will return true if the article is of gallery hero type on news section', () => {
    location.pathname = SECTION_PATH_NEWS;
    window.JSGlobals.article = {
      heroType: GALLERY,
    };
    expect(isImageLedArticleOnNewsSection()).toBe(true);
    window.location.pathname = `${SECTION_PATH_NEWS}/sub-section`;
    expect(isImageLedArticleOnNewsSection()).toBe(true);
  });
});

/**
 * @jest-environment jsdom
 */

import { laptop } from '@indy/ui/breakPoints';

import { CLASS_NOTIFICATION_PROMPT } from '#app/constants/classNames';
import { HERO_TYPE_VIDEO } from '#app/constants/heroType';

import shouldRenderPushPrimerOnNewsArticles, {
  grabArticleHeroType,
  hasPushPrimerRenderedOnNewsSection,
  isLaptop,
  isVideoArticle,
} from '../shouldRenderPushPrimerOnNewsArticles';
import * as thatModule from '../shouldRenderPushPrimerOnNewsArticles';

describe('shouldRenderPushPrimerOnNewsArticles()', () => {
  const mockNonVideoHeroType = 'not-a-video';
  const mockPushPrimerInDom = () =>
    (document.body.innerHTML = `<div class="${CLASS_NOTIFICATION_PROMPT}"></div`);
  const mockHeroVideoType = () =>
    (window.JSGlobals.article = {
      heroType: HERO_TYPE_VIDEO,
    } as unknown as typeof window.JSGlobals.article);
  const mockLaptopWindowSize = () =>
    (window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === `(min-width: ${laptop}px)`,
    })));
  const mockNonLaptopWindowSize = () =>
    (window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query !== `(min-width: ${laptop}px)`,
    })));

  beforeEach(() => {
    window.JSGlobals = {} as unknown as typeof window.JSGlobals;
  });

  afterEach(() => {
    jest.resetAllMocks();
    document.body.innerHTML = '';
    window.matchMedia = undefined as unknown as typeof window.matchMedia;
  });

  afterAll(() => {
    window.JSGlobals = undefined as unknown as typeof window.JSGlobals;
  });

  describe('hasPushPrimerRenderedOnNewsSection()', () => {
    it('will return true if the push primer is rendered on the page', () => {
      document.body.innerHTML = `<div class="${CLASS_NOTIFICATION_PROMPT}"></div`;
      const result = hasPushPrimerRenderedOnNewsSection();
      expect(result).toBe(true);
    });

    it('will return false if the push primer is not rendered on the page', () => {
      const result = hasPushPrimerRenderedOnNewsSection();
      expect(result).toBe(false);
    });
  });

  describe('isVideoArticle()', () => {
    it('will return true if the article is of video hero type', () => {
      const result = isVideoArticle(HERO_TYPE_VIDEO);
      expect(result).toBe(true);
    });

    it('will return false if the article is not of video hero type', () => {
      const result = isVideoArticle(mockNonVideoHeroType);
      expect(result).toBe(false);
    });
  });

  describe('isLaptop()', () => {
    it('will return true if the window width is greater than the laptop breakpoint', () => {
      mockLaptopWindowSize();
      const result = isLaptop();
      expect(result).toBe(true);
    });

    it('will return false if the window width is less than the laptop breakpoint', () => {
      mockNonLaptopWindowSize();
      const result = isLaptop();
      expect(result).toBe(false);
    });
  });

  describe('grabArticleHeroType()', () => {
    it('will return the article hero type if it exists', () => {
      mockHeroVideoType();
      const result = grabArticleHeroType();
      expect(result).toBe(HERO_TYPE_VIDEO);
    });

    it('will return an empty string if the article hero type does not exist', () => {
      const result = grabArticleHeroType();
      expect(result).toBe('');
    });
  });

  describe('default()', () => {
    describe('unit tests', () => {
      let mockHasPushPrimerRenderedOnNewsSection: jest.SpyInstance;
      let mockGrabArticleHeroType: jest.SpyInstance;
      let mockIsVideoArticle: jest.SpyInstance;
      let mockIsLaptop: jest.SpyInstance;

      beforeEach(() => {
        mockHasPushPrimerRenderedOnNewsSection = jest
          .spyOn(thatModule, 'hasPushPrimerRenderedOnNewsSection')
          .mockImplementation();
        mockGrabArticleHeroType = jest
          .spyOn(thatModule, 'grabArticleHeroType')
          .mockImplementation();
        mockIsVideoArticle = jest
          .spyOn(thatModule, 'isVideoArticle')
          .mockImplementation();
        mockIsLaptop = jest.spyOn(thatModule, 'isLaptop').mockImplementation();
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it('will return false if the push primer is not rendered on the page for news section', () => {
        mockHasPushPrimerRenderedOnNewsSection.mockReturnValueOnce(false);
        const result = shouldRenderPushPrimerOnNewsArticles();
        expect(result).toBeFalse();
        expect(mockHasPushPrimerRenderedOnNewsSection).toHaveBeenCalledTimes(1);
      });

      it('will return true if the article is of video hero type and the window is greater than the laptop breakpoint', () => {
        mockHasPushPrimerRenderedOnNewsSection.mockReturnValueOnce(true);
        mockGrabArticleHeroType.mockReturnValueOnce(HERO_TYPE_VIDEO);
        mockIsVideoArticle.mockReturnValueOnce(true);
        mockIsLaptop.mockReturnValueOnce(true);
        const result = shouldRenderPushPrimerOnNewsArticles();
        expect(result).toBeTrue();
        expect(mockGrabArticleHeroType).toHaveBeenCalledTimes(1);
        expect(mockIsVideoArticle).toHaveBeenCalledTimes(1);
        expect(mockIsVideoArticle).toHaveBeenCalledWith(HERO_TYPE_VIDEO);
        expect(mockIsLaptop).toHaveBeenCalledTimes(1);
      });

      it('will return false if the article is of video hero type but the window is not greater than the laptop breakpoint', () => {
        mockHasPushPrimerRenderedOnNewsSection.mockReturnValueOnce(true);
        mockGrabArticleHeroType.mockReturnValueOnce(HERO_TYPE_VIDEO);
        mockIsVideoArticle.mockReturnValueOnce(true);
        mockIsLaptop.mockReturnValueOnce(false);
        const result = shouldRenderPushPrimerOnNewsArticles();
        expect(result).toBeFalse();
      });

      it('will return true if the article is not of video hero type', () => {
        mockHasPushPrimerRenderedOnNewsSection.mockReturnValueOnce(true);
        mockGrabArticleHeroType.mockReturnValueOnce(mockNonVideoHeroType);
        mockIsVideoArticle.mockReturnValueOnce(false);
        const result = shouldRenderPushPrimerOnNewsArticles();
        expect(result).toBeTrue();
        expect(thatModule.isVideoArticle).toHaveBeenCalledWith(
          mockNonVideoHeroType,
        );
        expect(thatModule.isLaptop).not.toHaveBeenCalled();
      });
    });

    describe('integration tests', () => {
      it('will return false if the push primer is not rendered on the page for news section', () => {
        const result = shouldRenderPushPrimerOnNewsArticles();
        expect(result).toBeFalse();
      });

      it('will return true if the article is of video hero type and the window is greater than the laptop breakpoint', () => {
        mockPushPrimerInDom();
        mockHeroVideoType();
        mockLaptopWindowSize();
        const result = shouldRenderPushPrimerOnNewsArticles();
        expect(result).toBeTrue();
      });

      it('will return false if the article is of video hero type but the window is not greater than the laptop breakpoint', () => {
        mockPushPrimerInDom();
        mockHeroVideoType();
        mockNonLaptopWindowSize();
        const result = shouldRenderPushPrimerOnNewsArticles();
        expect(result).toBeFalse();
      });

      it('will return true if the article is not of video hero type', () => {
        mockPushPrimerInDom();
        window.JSGlobals.article = {
          heroType: mockNonVideoHeroType,
        } as unknown as typeof window.JSGlobals.article;
        const result = shouldRenderPushPrimerOnNewsArticles();
        expect(result).toBeTrue();
      });
    });
  });
});

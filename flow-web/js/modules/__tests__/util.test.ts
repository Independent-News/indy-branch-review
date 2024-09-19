/**
 * @jest-environment jsdom
 */

import {
  hasSpanishBrowserLanguage,
  getParameter,
  getParametersByNames,
  loadJS,
} from '../util';

describe('public/js/modules/util', () => {
  describe('hasSpanishBrowserLanguage', () => {
    describe('when browser language does not include Spanish', () => {
      it('should return false', () => {
        expect(hasSpanishBrowserLanguage(['en'])).toBe(false);
      });
    });

    describe('when browser language does not include Spanish', () => {
      it('should return false', () => {
        expect(hasSpanishBrowserLanguage(['en', ''])).toBe(false);
      });
    });

    describe('when browser language includes Spanish', () => {
      it('should return true', () => {
        expect(hasSpanishBrowserLanguage(['ja', 'es'])).toBe(true);
      });
    });

    describe('when browser language includes Spanish', () => {
      it('should return true', () => {
        expect(hasSpanishBrowserLanguage(['zh', 'en', 'es'])).toBe(true);
      });
    });
  });

  describe('getParameter', () => {
    it('should return a parameter by name', () => {
      const result = getParameter(
        'test',
        'http://test.com?test=test&test2=test2',
      );

      expect(result).toBe('test');
    });

    it("should return null if a parameter doesn't exist", () => {
      const result = getParameter(
        'foo',
        'http://test.com?test=test&test2=test2',
      );

      expect(result).toBe(null);
    });
  });

  describe('getParametersByNames', () => {
    it('should return a parameter by name', () => {
      const result = getParametersByNames(
        ['test', 'test2'],
        'http://test.com?test=test&test2=test2',
      );

      expect(result).toEqual([
        { key: 'test', value: 'test' },
        { key: 'test2', value: 'test2' },
      ]);
    });

    it('should return only 1 parameter', () => {
      const result = getParametersByNames(
        ['test'],
        'http://test.com?test=test&test2=test2',
      );

      expect(result).toEqual([{ key: 'test', value: 'test' }]);
    });

    it('should return 1 parameter with value and 1 parameter with null', () => {
      const result = getParametersByNames(
        ['test', 'foo'],
        'http://test.com?test=test&test2=test2',
      );

      expect(result).toEqual([
        { key: 'test', value: 'test' },
        { key: 'foo', value: '' },
      ]);
    });
  });

  describe('loadJS', () => {
    afterEach(() => {
      document.head.innerHTML = '';
      document.body.innerHTML = '';
    });

    it('will add a script to the body by default', () => {
      loadJS('some-script.js');

      expect(document.body.outerHTML).toBe(
        '<body><script async="" src="some-script.js"></script></body>',
      );
    });

    it('will add a script to the head if specified', () => {
      loadJS('some-script.js', { parent: document.head });

      expect(document.head.outerHTML).toBe(
        '<head><script async="" src="some-script.js"></script></head>',
      );
    });

    it('will add a multiple scripts', () => {
      loadJS(['some-script.js', 'some-other-script.js'], {
        parent: document.head,
      });

      expect(document.head.outerHTML).toBe(
        '<head><script async="" src="some-script.js"></script><script async="" src="some-other-script.js"></script></head>',
      );
    });

    it('will add defer if specified', () => {
      loadJS(['some-script.js'], {
        parent: document.head,
        defer: true,
      });

      expect(document.head.outerHTML).toBe(
        '<head><script defer="" src="some-script.js"></script></head>',
      );
    });

    it('will add misc. attributes if specified', () => {
      loadJS(['some-script.js'], {
        parent: document.head,
        attributes: [['foo', 'bar']],
      });

      expect(document.head.outerHTML).toBe(
        '<head><script async="" foo="bar" src="some-script.js"></script></head>',
      );
    });
  });
});

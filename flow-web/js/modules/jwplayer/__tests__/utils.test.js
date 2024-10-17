/**
 * @jest-environment jest-environment-jsdom-global
 */

import dot from 'dot-object';

import * as mantisDataFormatters from '#app/util/mantisDataFormatters';

import { AdTagURL } from '../../adTag/AdTagURL';
import * as aps from '../../aps';
import * as prebid from '../../instreamVideoPrebid';
import * as log from '../../log';
import { PARAM_AD_POS } from '../constants';
import * as thatModule from '../utils';

describe('jwplayer utils module', () => {
  describe('isTV()', () => {
    it('should return true when current path starts with "tv"', () => {
      global.jsdom.reconfigure({
        url: 'https://localhost/tv/section',
      });
      expect(thatModule.isTV()).toBe(true);
    });
    it('should return false when current path does not start with "tv"', () => {
      global.jsdom.reconfigure({
        url: 'https://localhost/non-tv/section',
      });
      expect(thatModule.isTV()).toBe(false);
    });
  });
  describe('getArticleId()', () => {
    it('should return page id in digits from JSGlobals', () => {
      global.JSGlobals = { pageId: '123abc' };
      expect(thatModule.getArticleId()).toBe('123');
    });
  });
  describe('getCustParamArticle()', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('should return "videohub" when it is TV hub', () => {
      const isTV = jest.spyOn(thatModule, 'isTV').mockReturnValue(true);
      expect(thatModule.getCustParamArticle()).toBe('videohub');
      expect(isTV).toBeCalled();
    });
    it('should return the article ID when it is not TV hub', () => {
      const isTV = jest.spyOn(thatModule, 'isTV').mockReturnValue(false);
      const getArticleId = jest
        .spyOn(thatModule, 'getArticleId')
        .mockReturnValue('123');
      expect(thatModule.getCustParamArticle()).toBe('123');
      expect(isTV).toBeCalled();
      expect(getArticleId).toBeCalled();
    });
  });
  describe('getTopicTags()', () => {
    afterEach(() => {
      delete global.JSGlobals;
    });
    it('should return topic tags in csv string', () => {
      global.JSGlobals = {
        topictags: Array(3).fill('tag'),
      };
      expect(thatModule.getTopicTags()).toMatchInlineSnapshot(`"tag,tag,tag"`);
    });
  });
  describe('getReferrer()', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    afterAll(() => {
      jest.restoreAllMocks();
    });
    it('should return the referrer url without the query string', () => {
      jest
        .spyOn(global.document, 'referrer', 'get')
        .mockReturnValue('http://example.com/?key=value');
      expect(thatModule.getReferrer()).toBe('http://example.com/');
    });
  });
  describe('getMantisTargeting()', () => {
    afterEach(() => {
      jest.resetAllMocks();
      delete global.JSGlobals;
    });
    afterAll(() => {
      jest.restoreAllMocks();
    });
    it('should return $expected when JSGlobals.article.autoVideo has value $value', () => {
      const mockRating = ['rating0', 'rating1'];
      const mockFormattedRating = 'mock-formatted-rating';

      const formatMantisRatings = jest
        .spyOn(mantisDataFormatters, 'formatMantisRatings')
        .mockReturnValue(mockFormattedRating);
      global.JSGlobals = dot.object({
        'mantis_channels.ratings': mockRating,
      });

      expect(thatModule.getMantisTargeting()).toEqual(mockFormattedRating);
      expect(formatMantisRatings).nthCalledWith(1, mockRating);
    });
  });
  describe('getPixelsTargeting()', () => {
    afterEach(() => {
      delete global.JSGlobals;
    });
    it.each`
      value              | expected
      ${null}            | ${''}
      ${'video swapped'} | ${'swapped'}
      ${'other value'}   | ${'reset'}
    `(
      'should return $expected when JSGlobals.article.autoVideo has value $value',
      ({ value, expected }) => {
        global.JSGlobals = dot.object({ 'article.autoVideo': value });
        expect(thatModule.getPixelsTargeting()).toBe(expected);
      },
    );
  });
  describe('getPermutive()', () => {
    afterEach(() => {
      global.localStorage.clear();
    });
    it('should return permutive values as csv string', () => {
      global.localStorage.setItem('_pdfps', JSON.stringify(Array(5).fill(0)));
      expect(thatModule.getPermutive()).toMatchInlineSnapshot(`"0,0,0,0,0"`);
    });
    it('should return max 250 of permutive values ', () => {
      global.localStorage.setItem('_pdfps', JSON.stringify(Array(300).fill(0)));
      expect(thatModule.getPermutive().split(',').length).toEqual(250);
    });
  });
  describe('getAdPos()', () => {
    let origURL;
    beforeEach(() => {
      origURL = global.URL;
    });
    afterEach(() => {
      global.URL = origURL;
    });

    it.each`
      expected | value   | valueDescription
      ${0}     | ${null} | ${'not found'}
      ${0}     | ${0}    | ${'having value "1"'}
      ${2}     | ${2}    | ${'having value "2"'}
    `(
      `should return $expected if "${PARAM_AD_POS}" search parameter is $valueDescription`,
      ({ expected, value }) => {
        global.URL = class {
          get searchParams() {
            return { get: jest.fn().mockReturnValue(value) };
          }
        };

        expect(thatModule.getAdPos()).toBe(expected);
      },
    );
  });
  describe('getPlayerState()', () => {
    it.each`
      expected   | isFloat
      ${'float'} | ${true}
      ${'hero'}  | ${false}
    `(
      'it should return string "$expected" when the floating state of player is $isFloat',
      ({ expected, isFloat }) => {
        const mockInstance = {
          getFloating: jest.fn().mockReturnValue(isFloat),
        };
        expect(thatModule.getPlayerState(mockInstance)).toBe(expected);
      },
    );
  });
  describe('setInitialParamsToAdTag()', () => {
    it('should initialise all default querystring', () => {
      global.JSGlobals = dot.object({
        'cmp.enabled': true,
      });

      const adTag = new AdTagURL('http://example.com');
      thatModule.setInitialParamsToAdTag(adTag);
      expect(adTag.search).toMatchInlineSnapshot(
        `"sz=640x480&iu=undefined&impl=s&gdfp_req=1&ad_rule=0&env=vp&output=vast&unviewed_position_start=1&description_url=__page-url__&correlator=__timestamp__&gdpr=__gdpr__&gdpr_consent=__gdpr_consent__&addtl_consent=__addtl_consent__&cust_params=videoID%3Dundefined%26article%3D%26playerstate%3Dhero%26topictags%3D%26referrer%3D%26mantis%3Dundefined%26pixels%3D%26permutive%3D"`,
      );
    });
  });
  describe('timeToSeconds()', () => {
    it.each`
      input             | expectedOutput
      ${'00:01:30.000'} | ${90}
      ${'01:30.000'}    | ${90}
      ${'00:01:30.500'} | ${90}
      ${'30.500'}       | ${30}
      ${0.5}            | ${0}
      ${30.5}           | ${30}
      ${90}             | ${90}
    `(
      'returns $expectedOutput when given $input',
      ({ input, expectedOutput }) => {
        expect(thatModule.timeToSeconds(input)).toBe(expectedOutput);
      },
    );
  });
  describe('timeElapsed()', () => {
    let elapsed;
    beforeEach(() => {
      elapsed = [];
    });

    it('returns true if position is greater than or equal to time and time is not in elapsed', () => {
      const result = thatModule.timeElapsed(10, 5, elapsed);
      expect(result).toBe(true);
      expect(elapsed).toContain(5);
    });

    it('returns false if position is less than time', () => {
      const result = thatModule.timeElapsed(5, 10, elapsed);
      expect(result).toBe(false);
      expect(elapsed).not.toContain(10);
    });

    it('returns false if time is in elapsed', () => {
      elapsed.push(5);
      const result = thatModule.timeElapsed(10, 5, elapsed);
      expect(result).toBe(false);
      expect(elapsed).toContain(5);
    });
  });
  describe('quarterTimeElapsed()', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('should return false if the position has not elapsed or already elapsed to the quartiles of given duration', () => {
      jest
        .spyOn(thatModule, 'timeElapsed')
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(false);
      const result = thatModule.quarterTimeElapsed(0, 0, []);
      expect(result).toEqual(false);
    });

    it.each`
      q1       | q2       | q3       | q4       | expectedOutput | ordinal
      ${true}  | ${false} | ${false} | ${false} | ${true}        | ${'1st'}
      ${false} | ${true}  | ${false} | ${false} | ${true}        | ${'2nd'}
      ${false} | ${false} | ${true}  | ${false} | ${true}        | ${'3rd'}
      ${false} | ${false} | ${false} | ${true}  | ${true}        | ${'4th'}
    `(
      'should return $expectedOutput if the position has just elapsed to the $ordinal quartiles of given duration',
      ({ q1, q2, q3, q4, expectedOutput }) => {
        const fn = thatModule.timeElapsed;
        fn.mockReturnValueOnce(q1)
          .mockReturnValueOnce(q2)
          .mockReturnValueOnce(q3)
          .mockReturnValueOnce(q4);
        const result = thatModule.quarterTimeElapsed(0, 0, []);
        expect(result).toEqual(expectedOutput);
      },
    );
  });
  describe('generatePermutiveUUID()', () => {
    it('should generate a valid UUID', () => {
      const uuid = thatModule.generatePermutiveUUID();
      const uuidRegex =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[8|9|aA|bB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
      expect(uuid).toMatch(uuidRegex);
    });
  });
  describe('getPermutiveClient()', () => {
    const originalLocation = window.location;
    const originalNavigator = window.navigator;

    beforeEach(() => {
      delete window.location;
      delete window.navigator;
      window.location = {
        href: 'https://www.example.com',
        hostname: 'www.example.com',
      };
      window.navigator = {
        userAgent: 'Test user agent',
      };
    });

    afterEach(() => {
      window.location = originalLocation;
      window.navigator = originalNavigator;
    });

    it('should return an client object for permutive tracking', () => {
      const result = thatModule.getPermutiveClient();
      expect(result).toEqual(
        expect.objectContaining({
          url: 'https://www.example.com',
          type: 'web',
          domain: 'www.example.com',
          user_agent: 'Test user agent',
        }),
      );
    });
  });

  describe('getBidsTargeting()', () => {
    beforeEach(() => {
      jest.spyOn(aps, 'loadScript').mockImplementation();
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should return an empty object if no bids are passed', async () => {
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({});
      jest.spyOn(prebid, 'getTargeting').mockResolvedValue({});
      const result = await thatModule.getBidsTargeting();
      expect(aps.loadScript).toHaveBeenCalledTimes(1);
      expect(aps.getTargeting).toHaveBeenCalledTimes(1);
      expect(aps.loadScript).toHaveBeenCalledBefore(prebid.getTargeting);
      expect(prebid.getTargeting).toHaveBeenCalledTimes(1);
      expect(result).toEqual({});
    });
    it('should return an object with aps targeting if aps bids are passed', async () => {
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({ aps: 'test' });
      jest.spyOn(prebid, 'getTargeting').mockResolvedValue({});
      const result = await thatModule.getBidsTargeting();
      expect(aps.loadScript).toHaveBeenCalledTimes(1);
      expect(aps.getTargeting).toHaveBeenCalledTimes(1);
      expect(aps.loadScript).toHaveBeenCalledBefore(prebid.getTargeting);
      expect(prebid.getTargeting).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ aps: 'test' });
    });
    it('should return an object with prebid targeting if prebid bids are passed', async () => {
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({});
      jest.spyOn(prebid, 'getTargeting').mockResolvedValue({ prebid: 'test' });
      const result = await thatModule.getBidsTargeting();
      expect(aps.loadScript).toHaveBeenCalledTimes(1);
      expect(aps.getTargeting).toHaveBeenCalledTimes(1);
      expect(aps.loadScript).toHaveBeenCalledBefore(prebid.getTargeting);
      expect(prebid.getTargeting).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ prebid: 'test' });
    });
    it('should return an object with other targeting if one of the requests is rejected', async () => {
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({ aps: 'test' });
      jest
        .spyOn(prebid, 'getTargeting')
        .mockRejectedValue(new Error('test-error'));
      jest.spyOn(log, 'warn').mockImplementation();
      const result = await thatModule.getBidsTargeting();
      expect(aps.loadScript).toHaveBeenCalledTimes(1);
      expect(aps.getTargeting).toHaveBeenCalledTimes(1);
      expect(aps.loadScript).toHaveBeenCalledBefore(prebid.getTargeting);
      expect(prebid.getTargeting).toHaveBeenCalledTimes(1);
      expect(prebid.getTargeting).rejects.toThrow(new Error('test-error'));
      expect(result).toEqual({ aps: 'test' });
      expect(log.warn).toHaveBeenCalledWith(new Error('test-error'));
    });
  });

  describe('initAdTag()', () => {
    it.todo('should initialise ad tag with all required bid targeting');
  });
});

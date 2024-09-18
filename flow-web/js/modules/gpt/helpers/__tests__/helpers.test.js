/**
 * @jest-environment jsdom
 */
import { getWindowWidth } from '#app/public/js/modules/util';

import * as helpersModule from '../helpers';

const {
  createAd,
  isHidden,
  getSizeFromAttributes,
  findMPUsForRefreshCheck,
  findUninitialisedMPUs,
  getConfig,
  getSizeFromConfig,
  getSizeConfigAtWidth,
} = helpersModule;

describe('gpt/helpers.js', () => {
  describe('createAd', () => {
    it('creates an ad element', () => {
      const adElement = createAd('AD_ID', '100x100', '/some/ad/unit/path');

      expect(adElement).toMatchSnapshot();
    });
  });

  describe('isHidden', () => {
    let testElem;
    let mockClientRects;

    beforeEach(() => {
      mockClientRects = [];
      testElem = {
        offsetHeight: 0,
        offsetWidth: 0,
        getClientRects: () => mockClientRects,
      };
    });

    it('will return false if element is visible on page', () => {
      testElem.offsetHeight = 100;

      expect(isHidden(testElem)).toBeFalsy();

      testElem.offsetHeight = 0;
      testElem.offsetWidth = 100;

      expect(isHidden(testElem)).toBeFalsy();

      testElem.offsetWidth = 0;
      mockClientRects = [{}];

      expect(isHidden(testElem)).toBeFalsy();

      testElem.offsetHeight = 10;
      testElem.offsetWidth = 10;
      mockClientRects = [{}];

      expect(isHidden(testElem)).toBeFalsy();
    });

    it('will return false if element is not visible on page', () => {
      expect(isHidden(testElem)).toBeTruthy();
    });
  });

  describe('getSizeFromAttributes(el, width, breakPoints)', () => {
    const breakPoints = { laptop: 1000, tablet: 500 };
    const elem = document.createElement('div');
    elem.dataset.desktopSizes = 'DESKTOP_SIZES';
    elem.dataset.tabletSizes = 'TABLET_SIZES';
    elem.dataset.mobileSizes = 'MOBILE_SIZES';

    it('will report desktop sizes if desktop sized', () => {
      expect(getSizeFromAttributes(elem, 1500, breakPoints)).toBe(
        'DESKTOP_SIZES',
      );
    });

    it('will report tablet sizes if tablet sized', () => {
      expect(getSizeFromAttributes(elem, 700, breakPoints)).toBe(
        'TABLET_SIZES',
      );
    });

    it('will report mobile sizes if mobile sized', () => {
      expect(getSizeFromAttributes(elem, 300, breakPoints)).toBe(
        'MOBILE_SIZES',
      );
    });

    it("will report device size independent sizes if general 'size' attribute is specified alone", () => {
      const elem = document.createElement('div');
      elem.dataset.sizes = 'SOME_SIZES';

      expect(getSizeFromAttributes(elem, 300, breakPoints)).toBe('SOME_SIZES');
    });
  });

  describe('findMPUsForRefeshCheck(elem)', () => {
    it('will find all MPUs that require a refresh check', () => {
      const testElem = document.createElement('div');

      testElem.innerHTML = `
<div id="mpu1" data-refresh-check="true" data-mpu></div>
<div id="mpu2" data-refresh-check="false" data-mpu></div>
<div id="mpu3" data-mpu></div>
<div></div>
<div id="mpu4" data-refresh-check="true" data-mpu></div>
<div id="mpu5" data-mpu></div>
<div id="mpu6" data-refresh-check="true" data-mpu></div>
<div id="mpu7" data-refresh-check="true"></div>`;

      expect(findMPUsForRefreshCheck(testElem)).toMatchSnapshot();
    });
  });

  describe('findUninitialisedMPUs(elem)', () => {
    it('can find uninitialised MPUs', () => {
      const testElem = document.createElement('div');

      testElem.innerHTML = `
<div id="mpu1" data-mpu></div>
<div id="mpu2" data-initialised="true" data-mpu></div>
<div id="mpu3" data-mpu></div>
<div></div>
<div id="mpu4" data-initialised="false" data-mpu></div>
<div id="mpu5" data-mpu></div>
<div id="mpu6" data-mpu></div>
<div id="mpu7"></div>`;

      expect(findUninitialisedMPUs(testElem)).toMatchSnapshot();
    });
  });

  describe('findUninitialisedVisibleMPUs(elem)', () => {
    const mockParentElem = document.createElement('div');

    mockParentElem.innerHTML = `
<div id="mpu1"></div>
<div id="mpu2"></div>
<div id="mpu3"></div>
<div id="mpu4"></div>
<div id="mpu5"></div>`;

    beforeAll(async () => {
      jest
        .spyOn(helpersModule, 'findUninitialisedMPUs')
        .mockReturnValue(mockParentElem.children);
      jest
        .spyOn(helpersModule, 'isHidden')
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true)
        .mockReturnValue(false);
    });

    it('can find uninitialised visible MPUs', () => {
      expect(
        helpersModule.findUninitialisedVisibleMPUs(mockParentElem),
      ).toMatchSnapshot();

      expect(helpersModule.findUninitialisedMPUs).toBeCalledTimes(1);
      expect(helpersModule.findUninitialisedMPUs).toHaveBeenCalledWith(
        mockParentElem,
      );
      expect(helpersModule.isHidden).toBeCalledTimes(5);
    });
  });

  describe('getConfig(mpuName, pageWidth, adConfig)', () => {
    const mockAdTypes = {
      AN_MPU_NAME: [
        { from: 0, ident: 'mobile' },
        { from: 600, ident: 'tablet' },
        { from: 1000, ident: 'desktop' },
      ],
    };

    it('will get the correct config for an ad based on page width', () => {
      expect(getConfig('AN_MPU_NAME', 340, mockAdTypes).ident).toBe('mobile');
      expect(getConfig('AN_MPU_NAME', 700, mockAdTypes).ident).toBe('tablet');
      expect(getConfig('AN_MPU_NAME', 999, mockAdTypes).ident).toBe('tablet');
      expect(getConfig('AN_MPU_NAME', 1000, mockAdTypes).ident).toBe('desktop');
      expect(getConfig('AN_MPU_NAME', Infinity, mockAdTypes).ident).toBe(
        'desktop',
      );
    });

    it('will return undefined if MPU name is not recognised', () => {
      expect(getConfig('UNKNOWN_MPU', Infinity, mockAdTypes)).toBeUndefined();
    });
  });

  describe('getSizeFromConfig(mpuName, pageWidth, adConfig)', () => {
    const mockAdTypes = {
      AN_MPU_NAME: [
        { from: 600, ident: 'tablet' },
        {
          from: 1000,
          ident: 'desktop',
          supportedSizes: [
            [3, 2],
            [4, 3],
          ],
        },
      ],
    };

    it('will get size from config', () => {
      expect(getSizeFromConfig('AN_MPU_NAME', Infinity, mockAdTypes)).toEqual([
        [3, 2],
        [4, 3],
      ]);
    });

    it('will return null if MPU is not recognised', () => {
      expect(getSizeFromConfig('UNKNOWN_MPU', 1100, mockAdTypes)).toBeNull();
    });

    it('will return null if size is not supported', () => {
      expect(getSizeFromConfig('AN_MPU_NAME', 200, mockAdTypes)).toBeNull();
    });
  });

  describe('getAdSizes(el, width, adConfig, breakPoints)', () => {
    let adSizes;

    const elm = document.createElement('div');
    const breakPoints = { desktop: 1000, tablet: 600 };

    const mockAdTypes = {
      SKIN: [
        {
          from: 1000,
          supportedSizes: [
            [300, 250],
            [300, 600],
          ],
        },
      ],
    };

    describe('given elm is using a sizeKey dataset', () => {
      beforeAll(() => {
        elm.dataset.sizeKey = 'SKIN';

        adSizes = getSizeConfigAtWidth(
          elm,
          getWindowWidth(),
          mockAdTypes,
          breakPoints,
        );
      });

      afterAll(() => {
        elm.dataset.sizeKey = '';
      });

      it('will have a valid sizeKey value', () => {
        expect(elm.dataset.sizeKey).toBeTruthy();
      });

      it('will return ad sizes', () => {
        expect(adSizes).toEqual({
          str: '300x250|300x600',
          arr: [
            [300, 250],
            [300, 600],
          ],
        });
      });

      it('will return null for unsupported sizes', () => {
        const sizes = getSizeConfigAtWidth(elm, 500, mockAdTypes, breakPoints);

        expect(sizes).toBeNull();
      });
    });

    describe('given elm is not using a sizeKey dataset', () => {
      beforeAll(() => {
        adSizes = getSizeConfigAtWidth(
          elm,
          getWindowWidth(),
          mockAdTypes,
          breakPoints,
        );
      });

      it('will not have a sizeKey value', () => {
        expect(elm.dataset.sizeKey).toBeFalsy();
      });

      it('will return size', () => {
        expect(adSizes).toEqual({
          str: '300x250',
          arr: [[300, 250]],
        });
      });
    });
  });

  describe('createSlot(adUnitPath, size, id, targeting = {})', () => {});

  describe('initialiseAd(el, { registerAsCurrentAd, adConfig, breakPoints })', () => {});

  describe('destroyConditionalAds(slotIds, destroyAdFn)', () => {});

  describe('destroyConditionalAdsOnRefresh(destroyAd)', () => {});

  describe('getAdRefreshIndex(el)', () => {});

  describe('createAdUnitPathFromOther(adUnitPath, adId)', () => {});

  describe('loadOutOfPageAd()', () => {});

  describe('refreshDetectedAdsMetaData', () => {
    it('should add the total current detected ads that share the same lineItemId', () => {
      const dummyData = {
        bish: { lineItemId: 'xxx' },
        bash: { lineItemId: 'xxx' },
        fizz: { lineItemId: 'xxx' },
        buzz: { lineItemId: 'yyy' },
      };

      helpersModule.refreshDetectedAdMetaData(dummyData);

      expect(dummyData).toEqual({
        bish: { lineItemId: 'xxx', lineItemCount: 3 },
        bash: { lineItemId: 'xxx', lineItemCount: 3 },
        fizz: { lineItemId: 'xxx', lineItemCount: 3 },
        buzz: { lineItemId: 'yyy', lineItemCount: 1 },
      });
    });
  });
});

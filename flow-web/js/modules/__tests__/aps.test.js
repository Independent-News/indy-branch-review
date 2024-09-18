/**
 * @jest-environment jsdom
 */
import * as thatModule from '../aps';

describe('aps module', () => {
  describe('init()', () => {
    beforeEach(() => {
      window.apstag = {
        init: jest.fn(),
      };
    });
    afterEach(() => {
      delete window.apstag;
    });

    it('should call apstag.init with the correct parameters', () => {
      thatModule.init();
      expect(window.apstag.init).toHaveBeenCalledWith({
        pubID: '3579',
        adServer: 'googletag',
        videoAdServer: 'DFP',
        deals: true,
      });
    });
  });

  describe('requestBids()', () => {
    beforeEach(() => {
      jest.spyOn(thatModule, 'init').mockImplementation();
      const mockInit = (config, callback) => {
        callback([
          {
            slotID: 'hero_player',
            mediaType: 'video',
            targeting: {
              amzniid: 'test-id',
              amznp: 'sebwn4',
              amznsz: '640x480',
              amznbid: 'v_hurc3k',
              amznactt: 'OPEN',
            },
          },
        ]);
      };
      window.apstag = {
        fetchBids: jest.fn().mockImplementation(mockInit),
      };
    });
    afterEach(() => {
      jest.restoreAllMocks();
      delete window.apstag;
    });

    it('should call apstag.fetchBids with the correct parameters', async () => {
      const bids = await thatModule.requestBids('hero_player');
      expect(window.apstag.fetchBids).toHaveBeenCalledWith(
        expect.objectContaining({
          slots: [
            {
              slotID: 'hero_player',
              mediaType: 'video',
            },
          ],
          timeout: 5000,
        }),
        expect.any(Function),
      );
      expect(bids).toEqual([
        {
          slotID: 'hero_player',
          mediaType: 'video',
          targeting: {
            amzniid: 'test-id',
            amznp: 'sebwn4',
            amznsz: '640x480',
            amznbid: 'v_hurc3k',
            amznactt: 'OPEN',
          },
        },
      ]);
    });
  });

  describe('getTargeting()', () => {
    beforeEach(() => {
      jest.spyOn(thatModule, 'requestBids').mockResolvedValue([
        {
          slotID: 'hero_player',
          mediaType: 'video',
          targeting: {
            amzniid: 'test-id',
            amznp: 'sebwn4',
            amznsz: '640x480',
            amznbid: 'v_hurc3k',
            amznactt: 'OPEN',
          },
        },
      ]);
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should return targeting key-value pairs', async () => {
      const targeting = await thatModule.getTargeting('hero_player');
      expect(targeting).toEqual({
        amzniid: 'test-id',
        amznp: 'sebwn4',
        amznsz: '640x480',
        amznbid: 'v_hurc3k',
        amznactt: 'OPEN',
      });
    });
  });
});

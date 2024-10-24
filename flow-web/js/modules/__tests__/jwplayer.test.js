/**
 * @jest-environment jest-environment-jsdom-global
 */

import * as thatModule from '../jwplayer';
import * as eventHandlers from '../jwplayer/eventHandlers';
import * as jwUtils from '../jwplayer/utils';
import * as permutiveModule from '../permutive';
import * as utils from '../util';
import * as shareOptionsModule from '../videoPlayer/sharedOptions';

describe('jwplayer module', () => {
  describe('bindEvents()', () => {
    const handlerNames = [
      'onReady',
      'onPlayListItem',
      'onBeforePlay',
      'onPlay',
      'onPause',
      'onSeek',
      'onTime',
      'onAdRequest',
      'onAdImpression',
      'onAdTime',
      'onAdPlay',
      'onAdClick',
      'onAdsManager',
      'onComplete',
    ];
    const mockOn = jest.fn().mockImplementation(() => {});

    afterEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });

    it('should create a player instance and bind event handlers on it', () => {
      const mockInstance = {
        on: mockOn,
      };
      const mockOptions = {
        nextUrl: 'test-next-url',
        consent: true,
      };
      thatModule.bindEvents(mockInstance, mockOptions);
      expect(mockOn).toHaveBeenCalledTimes(handlerNames.length);
      expect(mockOn).toBeCalledWith('ready', eventHandlers.onReady);
      expect(mockOn).toBeCalledWith(
        'playlistItem',
        eventHandlers.onPlayListItem,
      );
      expect(mockOn).toBeCalledWith('beforePlay', eventHandlers.onBeforePlay);
      expect(mockOn).toBeCalledWith('adRequest', eventHandlers.onAdRequest);
      expect(mockOn).toBeCalledWith('play', eventHandlers.onPlay);
      expect(mockOn).toBeCalledWith('pause', eventHandlers.onPause);
      expect(mockOn).toBeCalledWith('seek', eventHandlers.onSeek);
      expect(mockOn).toBeCalledWith('time', eventHandlers.onTime);
      expect(mockOn).toBeCalledWith(
        'adImpression',
        eventHandlers.onAdImpression,
      );
      expect(mockOn).toBeCalledWith('adTime', eventHandlers.onAdTime);
      expect(mockOn).toBeCalledWith('adPlay', eventHandlers.onAdPlay);
      expect(mockOn).toBeCalledWith('adClick', eventHandlers.onAdClick);
      expect(mockOn).toBeCalledWith('adsManager', eventHandlers.onAdsManager);
    });
  });

  describe('setup()', () => {
    const mockBindEvents = jest.fn();
    const mockJwplayerSetup = jest.fn();
    const mockInstance = 'test-instance';

    beforeEach(() => {
      jest.spyOn(thatModule, 'bindEvents').mockImplementation(mockBindEvents);
      window.jwplayer = jest.fn().mockImplementation(() => ({
        setup: mockJwplayerSetup.mockReturnValue(mockInstance),
      }));
    });

    afterEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
      delete window.jwplayer;
    });

    it('should create player instance and call function to bind events', () => {
      const mockArgs = {
        containerId: 'test-container',
        options: {},
        nextUrl: 'test-next-url',
        consent: true,
      };
      thatModule.setup(mockArgs);
      expect(window.jwplayer).toBeCalledWith('test-container');
      expect(mockJwplayerSetup).toBeCalledWith(mockArgs.options);
      expect(mockBindEvents).toBeCalledWith(
        mockInstance,
        expect.objectContaining({
          nextUrl: mockArgs.nextUrl,
          consent: mockArgs.consent,
        }),
      );
    });
  });

  describe('jwplayerSetupWithPermutive()', () => {
    beforeEach(() => {
      jest.spyOn(jwUtils, 'permutiveEnabled');
      jest.spyOn(thatModule, 'setup').mockImplementation(() => {});
      jest
        .spyOn(thatModule.setup, 'bind')
        .mockImplementation(() => 'bound setup');
      window.permutive = {
        readyWithTimeout: jest.fn().mockImplementation(() => {}),
      };
    });
    afterEach(() => {
      jest.restoreAllMocks();
      jest.resetAllMocks();
      delete window.permutive;
    });

    it('should set up with permutive API if permutive is enabled', () => {
      jwUtils.permutiveEnabled.mockReturnValue(true);
      const mockArgs = { consent: true };
      thatModule.jwplayerSetupWithPermutive(mockArgs);
      expect(window.permutive.readyWithTimeout).toBeCalledWith(
        'bound setup',
        'realtime',
        2500,
      );
      expect(thatModule.setup.bind).toBeCalledWith(this, mockArgs);
    });
    it('should set up without permutive API if permutive is not enabled', () => {
      jwUtils.permutiveEnabled.mockReturnValue(false);
      const mockArgs = { consent: true };
      thatModule.jwplayerSetupWithPermutive(mockArgs);
      expect(window.permutive.readyWithTimeout).not.toBeCalled();
      expect(thatModule.setup).toBeCalledWith(mockArgs);
    });
  });

  describe('initWithPlayerId()', () => {
    const mockInitAdTag = jest.fn();
    const mockJwplayerSetupWithPermutive = jest.fn();
    const mockSharedOptions = {};

    beforeEach(() => {
      jest.spyOn(jwUtils, 'initAdTag').mockImplementation(mockInitAdTag);
      jest
        .spyOn(thatModule, 'jwplayerSetupWithPermutive')
        .mockImplementation(mockJwplayerSetupWithPermutive);
      jest
        .spyOn(shareOptionsModule, 'sharedOptions')
        .mockReturnValue(mockSharedOptions);
      window.JSGlobals = {
        videoAdUnitPath: 'test-ad-unit-path',
        article: {
          heroMediaId: 'test-media-id',
        },
      };
    });

    afterEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
      delete window.JSGlobals;
    });

    it('should call all necessary functions', async () => {
      mockInitAdTag
        .mockResolvedValueOnce('test-ad-tag-1')
        .mockResolvedValueOnce('test-ad-tag-2');
      const mockConsent = true;

      document.body.innerHTML =
        '<div id="test-id-1" data-jwplayer data-jwplayer-player-type="test-player-type-1" data-jwplayer-data="{}" data-jwplayer-next-url="test-next-url-1" data-ad-unit-code="test-ad-unit-code-1"></div>' +
        '<div id="test-id-2" data-jwplayer data-jwplayer-player-type="test-player-type-2" data-jwplayer-data="{}" data-jwplayer-next-url="test-next-url-2" data-ad-unit-code="test-ad-unit-code-2"></div>';
      const elements = document.querySelectorAll('[data-jwplayer]');

      await thatModule.initWithPlayerId(elements, mockConsent);

      expect(mockInitAdTag).toHaveBeenNthCalledWith(
        1,
        'https://pubads.g.doubleclick.net/gampad/ads',
        {
          containerId: 'test-id-1',
          mediaId: 'test-media-id',
          adUnitCode: 'test-ad-unit-code-1',
          adUnitPath: 'test-ad-unit-path',
        },
      );
      expect(mockInitAdTag).toHaveBeenNthCalledWith(
        2,
        'https://pubads.g.doubleclick.net/gampad/ads',
        {
          containerId: 'test-id-2',
          mediaId: 'test-media-id',
          adUnitCode: 'test-ad-unit-code-2',
          adUnitPath: 'test-ad-unit-path',
        },
      );
      expect(mockJwplayerSetupWithPermutive).toHaveBeenNthCalledWith(1, {
        containerId: 'test-id-1',
        playerType: 'test-player-type-1',
        options: expect.objectContaining({
          advertising: {
            client: 'googima',
            outstream: false,
            tag: 'test-ad-tag-1',
            autoplayadsmuted: true,
          },
        }),
        nextUrl: 'test-next-url-1',
        consent: mockConsent,
      });
      expect(mockJwplayerSetupWithPermutive).toHaveBeenNthCalledWith(2, {
        containerId: 'test-id-2',
        playerType: 'test-player-type-2',
        options: expect.objectContaining({
          advertising: {
            client: 'googima',
            outstream: false,
            tag: 'test-ad-tag-2',
            autoplayadsmuted: true,
          },
        }),
        nextUrl: 'test-next-url-2',
        consent: mockConsent,
      });
    });
  });

  describe('initWithPlacement()', () => {
    const mockInitAdTag = jest.fn();
    const mockLoadJS = jest.fn();
    const mockPlacementReadyPromise = jest.fn();
    const mockBindEvents = jest.fn();

    beforeEach(() => {
      jest.spyOn(jwUtils, 'initAdTag').mockImplementation(mockInitAdTag);
      jest.spyOn(utils, 'loadJS').mockImplementation(mockLoadJS);
      jest.spyOn(thatModule, 'bindEvents').mockImplementation(mockBindEvents);
      window.JSGlobals = {
        jwplayerSiteId: 'test-jwplayer-site-id',
        videoAdUnitPath: 'test-ad-unit-path',
        article: {
          heroMediaId: 'test-media-id',
        },
      };
      window.jwplacements = {
        _getPlacementReadyPromise: mockPlacementReadyPromise,
      };
    });

    afterEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });

    it('should call all necessary functions', async () => {
      const mockDataStore1 = {
        'next-url': 'test-url-1',
        media_id: 'test-media-id-1',
        'ad-unit-code': 'test-ad-unit-code-1',
      };
      const mockDataStore2 = {
        'next-url': 'test-url-2',
        media_id: 'test-media-id-2',
        'ad-unit-code': 'test-ad-unit-code-2',
      };

      document.body.innerHTML =
        `<script class="jw-data-store" data-placement-id="placement-id-1" data-target="div-id-1">${JSON.stringify(
          mockDataStore1,
        )}</script>` +
        `<script class="jw-data-store" data-placement-id="placement-id-2" data-target="div-id-2">${JSON.stringify(
          mockDataStore2,
        )}</script>` +
        '<div data-jw-placement-id="placement-id-1"></div>' +
        '<div data-jw-placement-id="placement-id-2"></div>';

      const elements = document.querySelectorAll('[data-jw-placement-id]');
      const mockPlacementPlayer1 = { player: {} };
      const mockPlacementPlayer2 = { player: {} };
      const mockConsent = true;

      mockInitAdTag
        .mockResolvedValueOnce('test-ad-tag-1')
        .mockResolvedValueOnce('test-ad-tag-2');

      mockPlacementReadyPromise
        .mockResolvedValueOnce(mockPlacementPlayer1)
        .mockResolvedValueOnce(mockPlacementPlayer2);

      await thatModule.initWithPlacement(elements, mockConsent);

      expect(mockInitAdTag).toHaveBeenNthCalledWith(
        1,
        'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/71347885/_main_independent&impl=s&gdfp_req=1&ad_rule=0&env=vp&output=vast&unviewed_position_start=1&description_url=__page-url__&correlator=__timestamp__',
        {
          containerId: 'div-id-1',
          mediaId: 'test-media-id-1',
          adUnitCode: 'test-ad-unit-code-1',
          adUnitPath: 'test-ad-unit-path',
        },
      );
      expect(mockInitAdTag).toHaveBeenNthCalledWith(
        2,
        'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/71347885/_main_independent&impl=s&gdfp_req=1&ad_rule=0&env=vp&output=vast&unviewed_position_start=1&description_url=__page-url__&correlator=__timestamp__',
        {
          containerId: 'div-id-2',
          mediaId: 'test-media-id-2',
          adUnitCode: 'test-ad-unit-code-2',
          adUnitPath: 'test-ad-unit-path',
        },
      );
      expect(mockPlacementReadyPromise).toHaveBeenNthCalledWith(
        1,
        'placement-id-1',
      );
      expect(mockPlacementReadyPromise).toHaveBeenNthCalledWith(
        2,
        'placement-id-2',
      );
      expect(mockBindEvents).toHaveBeenNthCalledWith(
        1,
        mockPlacementPlayer1.player,
        {
          nextUrl: 'test-url-1',
          consent: mockConsent,
        },
      );
      expect(mockBindEvents).toHaveBeenNthCalledWith(
        2,
        mockPlacementPlayer2.player,
        {
          nextUrl: 'test-url-2',
          consent: mockConsent,
        },
      );
      expect(mockLoadJS).toBeCalledWith([
        'https://cdn.jwplayer.com/v2/sites/test-jwplayer-site-id/placements/embed.js',
      ]);
      expect(mockLoadJS).toHaveBeenCalledBefore(mockPlacementReadyPromise);
      expect(mockPlacementReadyPromise).toHaveBeenCalledBefore(mockBindEvents);
    });
  });

  describe('init()', () => {
    beforeEach(() => {
      jest.spyOn(thatModule, 'initWithPlayerId').mockImplementation();
      jest.spyOn(thatModule, 'initWithPlacement').mockImplementation();
      jest.spyOn(document, 'addEventListener').mockImplementation();
    });
    afterEach(() => {
      document.body.innerHTML = '';
      window.jwplayer = undefined;
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });
    it('should call initWithPlayerId() when jwplayer is ready', async () => {
      document.body.innerHTML =
        '<div id="test-id-1" data-jwplayer data-jwplayer-player-type="test-player-type-1" data-jwplayer-data="{}" data-jwplayer-next-url="test-next-url-1" data-ad-unit-code="test-ad-unit-code-1"></div>' +
        '<div id="test-id-2" data-jwplayer data-jwplayer-player-type="test-player-type-2" data-jwplayer-data="{}" data-jwplayer-next-url="test-next-url-2" data-ad-unit-code="test-ad-unit-code-2"></div>';
      window.jwplayer = () => {};
      const mockConsent = false;
      await thatModule.init(mockConsent);
      expect(thatModule.initWithPlayerId).toHaveBeenCalled();
    });
    it('should call initWithPlayerId() when jwplayer is not ready', async () => {
      document.body.innerHTML =
        '<div id="test-id-1" data-jwplayer data-jwplayer-player-type="test-player-type-1" data-jwplayer-data="{}" data-jwplayer-next-url="test-next-url-1" data-ad-unit-code="test-ad-unit-code-1"></div>' +
        '<div id="test-id-2" data-jwplayer data-jwplayer-player-type="test-player-type-2" data-jwplayer-data="{}" data-jwplayer-next-url="test-next-url-2" data-ad-unit-code="test-ad-unit-code-2"></div>';
      const mockConsent = false;
      await thatModule.init(mockConsent);
      expect(document.addEventListener).toHaveBeenCalledWith(
        'jwplayerLoaded',
        expect.any(Function),
      );
    });
    it('should call initWithPlacement()', async () => {
      document.body.innerHTML =
        '<div data-jw-placement-id="placement-id-1"></div>' +
        '<div data-jw-placement-id="placement-id-2"></div>';
      const mockConsent = false;
      await thatModule.init(mockConsent);
      expect(thatModule.initWithPlacement).toHaveBeenCalled();
    });
  });

  describe('default export', () => {
    afterEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });
    it('should call initPermutiveReadyWithTimeout() when permutive is enabled', async () => {
      jest.spyOn(thatModule, 'init').mockImplementation();
      jest.spyOn(jwUtils, 'permutiveEnabled').mockReturnValue(true);
      jest
        .spyOn(permutiveModule, 'initPermutiveReadyWithTimeout')
        .mockImplementation();
      const mockConsent = true;
      await thatModule.default(mockConsent);
      expect(jwUtils.permutiveEnabled).toHaveBeenCalledWith(mockConsent);
      expect(permutiveModule.initPermutiveReadyWithTimeout).toHaveBeenCalled();
      expect(thatModule.init).toHaveBeenCalledWith(mockConsent);
    });
    it('should call init() only', async () => {
      jest.spyOn(thatModule, 'init').mockImplementation();
      jest.spyOn(jwUtils, 'permutiveEnabled').mockReturnValue(false);
      jest
        .spyOn(permutiveModule, 'initPermutiveReadyWithTimeout')
        .mockImplementation();
      const mockConsent = true;
      await thatModule.default(mockConsent);
      expect(jwUtils.permutiveEnabled).toHaveBeenCalledWith(mockConsent);
      expect(
        permutiveModule.initPermutiveReadyWithTimeout,
      ).not.toHaveBeenCalled();
      expect(thatModule.init).toHaveBeenCalledWith(mockConsent);
    });
  });
});

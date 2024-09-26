/* globals jwplayer, jwplacements, jwDataStore, JSGlobals, permutive */
/* cSpell:enableCompoundWords */
/* cSpell:ignore addtl */

import { CLASS_JW_DATA_STORE } from '#app/constants/classNames';

import { isSubscriber } from '../utils/isSubscriber';

import * as thisModule from './jwplayer';
import {
  onReady,
  onPlayListItem,
  onBeforePlay,
  onPlay,
  onPause,
  onSeek,
  onTime,
  onAdRequest,
  onAdImpression,
  onAdTime,
  onAdPlay,
  onAdClick,
  onAdsManager,
  onComplete,
} from './jwplayer/eventHandlers';
import { initAdTag, permutiveEnabled } from './jwplayer/utils';
import { warn } from './log';
import { initPermutiveReadyWithTimeout } from './permutive';
import * as timer from './timer';
import { loadJS } from './util';
import { sharedOptions } from './videoPlayer/sharedOptions';

export const bindEvents = (playerInstance, { nextUrl, consent }) => {
  playerInstance.nextUrl = nextUrl;
  playerInstance.isFullscreen = false;
  playerInstance.consent = consent || false;
  playerInstance.playerNow = new Date();

  playerInstance.on('ready', onReady);

  playerInstance.on('playlistItem', onPlayListItem);

  playerInstance.on('beforePlay', onBeforePlay);

  playerInstance.on('adRequest', onAdRequest);

  playerInstance.on('play', onPlay);

  playerInstance.on('pause', onPause);

  playerInstance.on('seek', onSeek);

  playerInstance.on('time', onTime);

  playerInstance.on('adImpression', onAdImpression);

  playerInstance.on('adTime', onAdTime);

  playerInstance.on('adPlay', onAdPlay);

  playerInstance.on('adClick', onAdClick);

  playerInstance.on('adsManager', onAdsManager);

  playerInstance.on('complete', onComplete);
};

export const setup = ({ containerId, options, nextUrl, consent }) => {
  timer.start('JWPlayerSetup');

  const playerInstance = jwplayer(containerId).setup(options);
  thisModule.bindEvents(playerInstance, { nextUrl, consent });

  timer.end('JWPlayerSetup');
};

export const jwplayerSetupWithPermutive = (args) => {
  const { consent } = args;
  // Player initialisation, inside the Permutive readyWithTimeout function, to start the player when Permutive segments are available
  if (permutiveEnabled(consent)) {
    permutive.readyWithTimeout(
      thisModule.setup.bind(this, args),
      'realtime',
      2500,
    );
  } else {
    thisModule.setup(args);
  }
};

export const initWithPlayerId = async (elements, consent) => {
  elements.forEach(async (element) => {
    const containerId = element.id;
    const playerType = element.dataset.jwplayerPlayerType;
    const data = JSON.parse(element.dataset.jwplayerData);
    const nextUrl = element.dataset.jwplayerNextUrl;
    const adUnitCode = element.dataset.adUnitCode;
    const adUnitPath = JSGlobals.videoAdUnitPath;
    const mediaId = JSGlobals.article.heroMediaId;

    const hasAd = !isSubscriber();

    // This advertising object will override the ad schedule set from the jwplayer.
    // jwplayer doesn't provide API to modify the ad tag from the config option on the fly if we use the ad schedule
    // so we set ad tag in `advertising.tag` and do all the modification and start ad play in `beforePlay` handler
    const advertising = hasAd
      ? {
          client: 'googima',
          outstream: false,
          tag: await initAdTag('https://pubads.g.doubleclick.net/gampad/ads', {
            containerId,
            mediaId,
            adUnitCode,
            adUnitPath,
          }),
          autoplayadsmuted: true,
        }
      : null;

    thisModule.jwplayerSetupWithPermutive({
      containerId,
      playerType,
      options: {
        ...data,
        ...sharedOptions(),
        advertising,
      },
      nextUrl,
      consent,
    });
  });
};

export const initWithPlacement = async (elements, consent) => {
  window.jwDataStore = { custom: {} };
  const stores = document.querySelectorAll(`.${CLASS_JW_DATA_STORE}`) || [];

  await Promise.all(
    Array.from(stores).map(async (element) => {
      const placementId = element.dataset.placementId;

      let data = {};
      try {
        data = JSON.parse(element.textContent);
      } catch (e) {
        warn(e);
      }
      data['ad_tag'] = await initAdTag(
        'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/71347885/_main_independent&impl=s&gdfp_req=1&ad_rule=0&env=vp&output=vast&unviewed_position_start=1&description_url=__page-url__&correlator=__timestamp__',
        {
          containerId: element.dataset.target,
          mediaId: data['media_id'],
          adUnitCode: data['ad-unit-code'],
          adUnitPath: JSGlobals.videoAdUnitPath,
        },
      );

      window.jwDataStore.custom[placementId] = data;
    }),
  );

  await loadJS([
    `https://cdn.jwplayer.com/v2/sites/${JSGlobals.jwplayerSiteId}/placements/embed.js`,
  ]);

  await Promise.all(
    [...elements].map(async (element) => {
      const placementId = element.dataset.jwPlacementId;

      const placement =
        await jwplacements?._getPlacementReadyPromise(placementId);

      if (placement?.player) {
        placement.player._placementId = placementId;
        placement.player._isPlacement = true;
        thisModule.bindEvents(placement.player, {
          nextUrl: jwDataStore.custom[placementId]?.['next-url'],
          consent,
        });
      }
    }),
  );
};

export const init = async (consent) => {
  const jwElements = document.querySelectorAll('[data-jwplayer]');
  const jwPlacementElements = document.querySelectorAll(
    '[data-jw-placement-id]',
  );

  if (typeof jwplayer === 'function' && jwElements.length > 0) {
    // jwplayer already loaded, therefore event has already fired; too late to set up a listener
    // get set-up parameters from data attributes on jwplayer script tag
    await thisModule.initWithPlayerId(jwElements, consent);
  } else {
    // jwplayer not loaded yet, set up a listener for the event that will be dispatched once it loads
    // get set-up parameters from event
    document.addEventListener('jwplayerLoaded', async () => {
      await thisModule.init(consent);
    });
  }

  if (jwPlacementElements.length > 0) {
    await thisModule.initWithPlacement(jwPlacementElements, consent);
  }
};

export default async (consent) => {
  permutiveEnabled(consent) && initPermutiveReadyWithTimeout();

  await thisModule.init(consent);
};

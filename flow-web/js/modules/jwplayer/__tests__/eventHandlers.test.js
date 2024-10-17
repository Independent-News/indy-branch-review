/* @jest-environment jsdom */

import { AdTagURL } from '#app/public/js/modules/adTag/AdTagURL';

import { onPlayListItem } from '../eventHandlers';
import * as utils from '../utils';

describe('jwplayer eventHandlers', () => {
  const placementId = 123;

  beforeEach(() => {
    window.jwDataStore = {
      custom: {
        [placementId]: {
          ad_tag: 'https://example.com/ad_tag',
        },
      },
    };

    jest.spyOn(utils, 'getPlayerState').mockReturnValue('hero');
  });

  afterEach(() => {
    window.jwDataStore = {};
  });

  describe('onPlayListItem', () => {
    it('should increase the "adpos" for each play list item', () => {
      const jwplayer = {
        _isPlacement: true,
        _placementId: placementId,
        adCount: 0,
        getConfig: () => ({ autostart: false }),
      };

      onPlayListItem.call(jwplayer);
      const adTag = new AdTagURL(window.jwDataStore.custom[placementId].ad_tag);
      expect(adTag.custParams.get('adpos')).toBe('0');

      onPlayListItem.call(jwplayer);
      const adTag1 = new AdTagURL(
        window.jwDataStore.custom[placementId].ad_tag,
      );
      expect(adTag1.custParams.get('adpos')).toBe('1');
    });
  });
});

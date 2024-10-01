/**
 * @jest-environment jsdom
 */

import { getVideoPlacementValue } from '#app/config/vendors/helpers/prebid';

import { prebidAdConfig, formatBids } from '../prebid';

const mockBidders = [
  (() => {
    const adIds = {
      ad1: {
        web: 'bidder1_id01',
      },
      ad2: {
        web: 'bidder1_id02',
      },
      mpu4: {
        web: 'bidder1_id03',
      },
    };
    const params = ({ id }) => {
      const data = adIds[id];
      return data ? { bidder: 'bidder1' } : null;
    };
    return {
      params,
    };
  })(),
  (() => {
    const adIds = {
      ad1: {
        web: 'bidder2_id01',
      },
      ad2: {
        web: 'bidder2_id02',
      },
      mpu3: {
        web: 'bidder2_id03',
      },
    };
    const params = ({ id }) => {
      const data = adIds[id];
      return data ? { bidder: 'bidder2' } : null;
    };
    return {
      params,
    };
  })(),
  (() => {
    const excludedAdIds = ['ad1'];
    const params = ({ id }) => {
      return excludedAdIds.includes(id) ? null : { bidder: 'bidder3' };
    };
    return {
      params,
    };
  })(),
];

describe('prebid', () => {
  describe('formatBids()', () => {
    const nonExcludedAdIds = 'ad2';
    const excludedAdIds = 'ad1';
    const resultNonExcludedBidders = [
      {
        bidder: 'bidder1',
        params: { keywords: { permutive: [] } },
      },
      {
        bidder: 'bidder2',
        params: { keywords: { permutive: [] } },
      },
      {
        bidder: 'bidder3',
        params: { keywords: { permutive: [] } },
      },
    ];
    const resultExcludedBidders = [
      {
        bidder: 'bidder1',
        params: { keywords: { permutive: [] } },
      },
      {
        bidder: 'bidder2',
        params: { keywords: { permutive: [] } },
      },
    ];

    it('returns bidders if it has params', () => {
      const bids = formatBids({ id: nonExcludedAdIds, bidders: mockBidders });
      expect(bids).toEqual(resultNonExcludedBidders);
    });

    it('returns bidders if it does not have params', () => {
      const bids = formatBids({ id: excludedAdIds, bidders: mockBidders });
      expect(bids).toEqual(resultExcludedBidders);
    });
  });

  describe('prebidAdConfig()', () => {
    it('returns correctly formatted object', () => {
      global.JSGlobals = {};
      let adsList = [
        {
          id: 'ad1',
          sizes: [{ from: 0, supportedSizes: [[300, 250]] }],
        },
        {
          id: 'mpu3',
          sizes: [{ from: 0, supportedSizes: [[300, 250]] }],
        },
        {
          id: 'mpu4',
          sizes: [{ from: 0, supportedSizes: [[300, 250]] }],
        },
      ];

      const config = prebidAdConfig(adsList, mockBidders);
      expect(config).toMatchInlineSnapshot(`
        [
          {
            "bids": [
              {
                "bidder": "bidder1",
                "params": {
                  "keywords": {
                    "article": undefined,
                    "commercial": "n",
                    "liveblog": "n",
                    "mantis": undefined,
                    "mantis_context": undefined,
                    "pageType": undefined,
                    "permutive": [],
                    "topictags": undefined,
                  },
                },
              },
              {
                "bidder": "bidder2",
                "params": {
                  "keywords": {
                    "article": undefined,
                    "commercial": "n",
                    "liveblog": "n",
                    "mantis": undefined,
                    "mantis_context": undefined,
                    "pageType": undefined,
                    "permutive": [],
                    "topictags": undefined,
                  },
                },
              },
            ],
            "code": "ad1",
            "mediaTypes": {
              "banner": {
                "sizeConfig": [
                  {
                    "minViewPort": [
                      0,
                      0,
                    ],
                    "sizes": [
                      [
                        300,
                        250,
                      ],
                    ],
                  },
                ],
              },
            },
          },
          {
            "bids": [
              {
                "bidder": "bidder2",
                "params": {
                  "keywords": {
                    "article": undefined,
                    "commercial": "n",
                    "liveblog": "n",
                    "mantis": undefined,
                    "mantis_context": undefined,
                    "pageType": undefined,
                    "permutive": [],
                    "topictags": undefined,
                  },
                },
              },
              {
                "bidder": "bidder3",
                "params": {
                  "keywords": {
                    "article": undefined,
                    "commercial": "n",
                    "liveblog": "n",
                    "mantis": undefined,
                    "mantis_context": undefined,
                    "pageType": undefined,
                    "permutive": [],
                    "topictags": undefined,
                  },
                },
              },
            ],
            "code": "mpu3",
            "mediaTypes": {
              "banner": {
                "sizeConfig": [
                  {
                    "minViewPort": [
                      0,
                      0,
                    ],
                    "sizes": [
                      [
                        300,
                        250,
                      ],
                    ],
                  },
                ],
              },
            },
          },
          {
            "bids": [
              {
                "bidder": "bidder1",
                "params": {
                  "keywords": {
                    "article": undefined,
                    "commercial": "n",
                    "liveblog": "n",
                    "mantis": undefined,
                    "mantis_context": undefined,
                    "pageType": undefined,
                    "permutive": [],
                    "topictags": undefined,
                  },
                },
              },
              {
                "bidder": "bidder3",
                "params": {
                  "keywords": {
                    "article": undefined,
                    "commercial": "n",
                    "liveblog": "n",
                    "mantis": undefined,
                    "mantis_context": undefined,
                    "pageType": undefined,
                    "permutive": [],
                    "topictags": undefined,
                  },
                },
              },
            ],
            "code": "mpu4",
            "mediaTypes": {
              "banner": {
                "sizeConfig": [
                  {
                    "minViewPort": [
                      0,
                      0,
                    ],
                    "sizes": [
                      [
                        300,
                        250,
                      ],
                    ],
                  },
                ],
              },
            },
          },
        ]
      `);
    });
  });

  describe('getVideoPlacementValue', () => {
    it.each([
      {
        path: '/tv/video-article',
        expectedOutput: 1,
        description: '1 if TV video article',
      },
      {
        path: '/non-tv/video-article',
        expectedOutput: 2,
        description: '2 if non-TV video article',
      },
    ])('should return $description', ({ path, expectedOutput }) => {
      Object.defineProperty(window, 'location', {
        value: { pathname: path },
        writable: true,
      });

      expect(getVideoPlacementValue()).toBe(expectedOutput);
    });
  });

  // Update installedModules with the latest downloaded module list to check for differences
  describe('Bundle Modules Test', () => {
    beforeAll(() => {
      global.pbjs = {};
    });

    const mockBundles = [
      {
        name: 'UK bundle',
        installedModules: [
          'paapi',
          'rtdModule',
          'userId',
          'adyoulikeBidAdapter',
          'appnexusBidAdapter',
          'criteoBidAdapter',
          'gridBidAdapter',
          'gumgumBidAdapter',
          'invibesBidAdapter',
          'ixBidAdapter',
          'ozoneBidAdapter',
          'pubmaticBidAdapter',
          'riseBidAdapter',
          'rubiconBidAdapter',
          'teadsBidAdapter',
          'ttdBidAdapter',
          'pubxaiAnalyticsAdapter',
          'consentManagementTcf',
          'gptPreAuction',
          'tcfControl',
          'adpod',
          'currency',
          'paapiForGpt',
          'priceFloors',
          'sizeMappingV2',
          'dfpAdServerVideo',
          'jwplayerRtdProvider',
          'permutiveRtdProvider',
          'pubxaiRtdProvider',
          'sharedIdSystem',
          'teadsIdSystem',
        ],
        expectedModules: [
          'paapi',
          'rtdModule',
          'userId',
          'adyoulikeBidAdapter',
          'appnexusBidAdapter',
          'criteoBidAdapter',
          'gridBidAdapter',
          'gumgumBidAdapter',
          'invibesBidAdapter',
          'ixBidAdapter',
          'ozoneBidAdapter',
          'pubmaticBidAdapter',
          'rubiconBidAdapter',
          'teadsBidAdapter',
          'pubxaiAnalyticsAdapter',
          'consentManagementTcf',
          'gptPreAuction',
          'adpod',
          'currency',
          'paapiForGpt',
          'priceFloors',
          'sizeMappingV2',
          'dfpAdServerVideo',
          'jwplayerRtdProvider',
          'permutiveRtdProvider',
          'sharedIdSystem',
          'teadsIdSystem',
          'pubxaiRtdProvider',
          'tcfControl',
          'ttdBidAdapter',
          'riseBidAdapter',
        ],
      },
      {
        name: 'NON UK bundle',
        installedModules: [
          'paapi',
          'rtdModule',
          'userId',
          'adagioBidAdapter',
          'adyoulikeBidAdapter',
          'appnexusBidAdapter',
          'criteoBidAdapter',
          'gridBidAdapter',
          'gumgumBidAdapter',
          'ixBidAdapter',
          'kargoBidAdapter',
          'nextMillenniumBidAdapter',
          'ozoneBidAdapter',
          'pubmaticBidAdapter',
          'riseBidAdapter',
          'rubiconBidAdapter',
          'ttdBidAdapter',
          'vidazooBidAdapter',
          'pubxaiAnalyticsAdapter',
          'consentManagementGpp',
          'consentManagementTcf',
          'gppControl_usnat',
          'gptPreAuction',
          'tcfControl',
          'adpod',
          'consentManagementUsp',
          'currency',
          'priceFloors',
          'paapiForGpt',
          'sizeMappingV2',
          'dfpAdServerVideo',
          'jwplayerRtdProvider',
          'permutiveRtdProvider',
          'sharedIdSystem',
        ],
        expectedModules: [
          'paapi',
          'rtdModule',
          'userId',
          'adyoulikeBidAdapter',
          'appnexusBidAdapter',
          'criteoBidAdapter',
          'gridBidAdapter',
          'gumgumBidAdapter',
          'ixBidAdapter',
          'kargoBidAdapter',
          'nextMillenniumBidAdapter',
          'ozoneBidAdapter',
          'pubmaticBidAdapter',
          'riseBidAdapter',
          'rubiconBidAdapter',
          'vidazooBidAdapter',
          'pubxaiAnalyticsAdapter',
          'consentManagementTcf',
          'consentManagementGpp',
          'consentManagementUsp',
          'gppControl_usnat',
          'gptPreAuction',
          'adpod',
          'currency',
          'paapiForGpt',
          'priceFloors',
          'sizeMappingV2',
          'dfpAdServerVideo',
          'jwplayerRtdProvider',
          'permutiveRtdProvider',
          'sharedIdSystem',
          'adagioBidAdapter',
          'tcfControl',
          'ttdBidAdapter',
        ],
      },
    ];

    it.each(mockBundles)(
      'should contain all required modules for $name',
      ({ _name, installedModules, expectedModules }) => {
        global.pbjs.installedModules = installedModules;

        expect(global.pbjs.installedModules.sort()).toEqual(
          expectedModules.sort(),
        );
      },
    );
  });
});

/**
 * @jest-environment jsdom
 */

import { filterAdsToAuction } from '../apsAlongsidePrebid';

describe('filterAdsToAuction', () => {
  const mockAds = [
    {
      id: 'mpu3',
      sizes: [{ from: 0, supportedSizes: [[300, 250]] }],
    },
    {
      id: 'mpu4',
      sizes: [{ from: 0, supportedSizes: [[300, 250]] }],
    },
  ];

  it('should not be empty', () => {
    const mockSlot = document.createElement('div');
    mockSlot.id = 'mpu3';

    expect(filterAdsToAuction(mockAds, [mockSlot])).not.toEqual([]);
  });
});

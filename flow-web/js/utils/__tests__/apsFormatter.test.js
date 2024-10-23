/**
 * @jest-environment jsdom
 */

import apsFormatter from '../apsFormatter';

describe('apsFormatter()', () => {
  it('should return correct APS adslots data', () => {
    const mockAdSlot = document.createElement('div');
    mockAdSlot.id = 'mpu1';
    mockAdSlot.setAttribute('data-ad-unit-path', 'test/path');

    const mockAdsToAuction = [mockAdSlot];

    expect(apsFormatter(mockAdsToAuction)).toStrictEqual([
      {
        sizes: [
          [300, 250],
          [300, 600],
        ],
        slotID: 'mpu1',
        slotName: 'test/path',
      },
    ]);
  });
});

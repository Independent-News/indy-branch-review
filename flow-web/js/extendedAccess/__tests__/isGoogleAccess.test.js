/**
 * @jest-environment jsdom
 */

import {
  hasValidReferrer,
  hasValidParams,
  isGoogleAccess,
} from '../isGoogleAccess';

function dateStringToHex(dateString) {
  const date = new Date(dateString);
  const timestamp = date.getTime();
  const timestamp_seconds = timestamp / 1000;
  const hex = timestamp_seconds.toString(16);
  return hex;
}

const searchString =
  '?gaa_at=la&gaa_n=AYc4ystB-xErVAdVdZi9xgDJkCLZG-AxCDX8XBr4i8WuFNlpN2jx-g3HCOII0_TsFSc8ebdxxBDDiiXktBodoUvbllZRgw8F_mbUAR8gYj4P&gaa_ts=6087f111&gaa_sig=JENB346DAKYRGPwoMGZFo1IjD45R7YSliBr3rnRsy6pADPvk-SbP2u6SeZFkfACKKyV4HfBjk6x8UdlBYRUJ-w%3D%3D';
const referrer = 'https://google.com';

describe('isGoogleAccess()', () => {
  it('should return true if referrer and search string pass rules', () => {
    const nowString = '2018-12-17T03:24:00';
    const now = new Date(nowString);
    expect(isGoogleAccess(referrer, '', searchString, now)).toBe(true);
  });
});

describe('hasValidReferrer()', () => {
  it('should return true when protocol is `https` AND domain is `google.com`', () => {
    expect(hasValidReferrer('https://google.com')).toBe(true);
  });

  it('should return false when protocol is NOT `https`', () => {
    expect(hasValidReferrer('http://google.com')).toBe(false);
  });
});

describe('hasValidParams()', () => {
  it('should return false when `gaa_ts` param has date in past', () => {
    const nowString = '1995-12-17T03:24:00';
    const tsString = '1995-12-17T03:23:59';

    const now = new Date(nowString);

    expect(
      hasValidParams(
        {
          gaa_at: 'alpha',
          gaa_n: 'beta',
          gaa_sig: 'gamma',
          gaa_ts: dateStringToHex(tsString),
        },
        now.getTime(),
      ),
    ).toBe(false);
  });

  it('should return true when `gaa_ts` param has current date', () => {
    const nowString = '1995-12-17T03:24:00';
    const tsString = '1995-12-17T03:24:00';

    const now = new Date(nowString);

    expect(
      hasValidParams(
        {
          gaa_at: 'alpha',
          gaa_n: 'beta',
          gaa_sig: 'gamma',
          gaa_ts: dateStringToHex(tsString),
        },
        now.getTime(),
      ),
    ).toBe(true);
  });

  it('should return true when `gaa_ts` param has future date', () => {
    const nowString = '1995-12-17T03:24:00';
    const tsString = '1995-12-17T03:24:01';

    const now = new Date(nowString);

    expect(
      hasValidParams(
        {
          gaa_at: 'alpha',
          gaa_n: 'beta',
          gaa_sig: 'gamma',
          gaa_ts: dateStringToHex(tsString),
        },
        now.getTime(),
      ),
    ).toBe(true);
  });

  it('should return false when `gaa_at` param is not provided', () => {
    const nowString = '1995-12-17T03:24:00';
    const tsString = '1995-12-17T03:24:01';

    const now = new Date(nowString);

    expect(
      hasValidParams(
        {
          gaa_n: 'beta',
          gaa_sig: 'gamma',
          gaa_ts: dateStringToHex(tsString),
        },
        now.getTime(),
      ),
    ).toBe(false);
  });

  it('should return false when `gaa_n` param is not provided', () => {
    const nowString = '1995-12-17T03:24:00';
    const tsString = '1995-12-17T03:24:01';

    const now = new Date(nowString);

    expect(
      hasValidParams(
        {
          gaa_at: 'alpha',
          gaa_sig: 'gamma',
          gaa_ts: dateStringToHex(tsString),
        },
        now.getTime(),
      ),
    ).toBe(false);
  });

  it('should return false when `gaa_sig` param is not provided', () => {
    const nowString = '1995-12-17T03:24:00';
    const tsString = '1995-12-17T03:24:01';

    const now = new Date(nowString);

    expect(
      hasValidParams(
        {
          gaa_at: 'alpha',
          gaa_n: 'beta',
          gaa_ts: dateStringToHex(tsString),
        },
        now.getTime(),
      ),
    ).toBe(false);
  });

  it('should return false when `gaa_ts` param is not provided', () => {
    const nowString = '1995-12-17T03:24:00';

    const now = new Date(nowString);

    expect(
      hasValidParams(
        {
          gaa_at: 'alpha',
          gaa_n: 'beta',
          gaa_sig: 'gamma',
        },
        now.getTime(),
      ),
    ).toBe(false);
  });
});

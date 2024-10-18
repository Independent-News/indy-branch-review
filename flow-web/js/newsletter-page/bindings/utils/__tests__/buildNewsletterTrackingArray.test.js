import { buildNewsletterTrackingArray } from '../buildNewsletterTrackingArray';

describe('buildNewsletterTrackingArray()', () => {
  it('should return comma separated list of newsletters as string', () => {
    const newsletterKeys = ['receiveIndyFootballNews', 'receiveIndySports'];

    expect(buildNewsletterTrackingArray(newsletterKeys)).toEqual(
      'receiveIndyFootballNews,receiveIndySports',
    );
  });
});

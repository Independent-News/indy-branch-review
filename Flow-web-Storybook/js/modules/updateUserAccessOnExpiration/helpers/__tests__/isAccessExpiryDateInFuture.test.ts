import isAccessExpiryDateInFuture from '../isAccessExpiryDateInFuture';

describe('isAccessExpiryDateInFuture()', () => {
  it('will return "false" if the access expiry date is in the past', () => {
    const mockExpiryTimestampInSeconds = (Date.now() - 1000) / 1000;
    const result = isAccessExpiryDateInFuture(mockExpiryTimestampInSeconds);
    expect(result).toBe(false);
  });

  it('will return "false" if no access expiry date is provided', () => {
    const result = isAccessExpiryDateInFuture(null);
    expect(result).toBe(false);
  });

  it('will return "true" if access expiry date is in the future', () => {
    const mockExpiryTimestampInSeconds = (Date.now() + 1000) / 1000;
    const result = isAccessExpiryDateInFuture(mockExpiryTimestampInSeconds);
    expect(result).toBe(true);
  });
});

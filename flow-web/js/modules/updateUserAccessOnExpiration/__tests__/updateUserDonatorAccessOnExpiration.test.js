import { error } from '../../log';
import * as isAccessExpiryDateInFuture from '../helpers/isAccessExpiryDateInFuture';
import * as updateUserAccessViaApi from '../helpers/updateUserAccessViaApi';
import updateUserDonatorAccessOnExpiration from '../updateUserDonatorAccessOnExpiration';

jest.mock('../../log');

describe('updateUserDonatorAccessOnExpiration()', () => {
  const mockPastTimestampSeconds = (Date.now() - 1000) / 1000;
  const mockFutureTimestampSeconds = (Date.now() + 1000) / 1000;

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('unit tests', () => {
    let updateUserAccessViaApiSpy;
    let isAccessExpiryDateInFutureSpy;

    beforeEach(() => {
      updateUserAccessViaApiSpy = jest
        .spyOn(updateUserAccessViaApi, 'default')
        .mockImplementation();
      isAccessExpiryDateInFutureSpy = jest
        .spyOn(isAccessExpiryDateInFuture, 'default')
        .mockImplementation();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('will not check if access has yet to expire or attempt to update donator access if access is not currently granted', async () => {
      await updateUserDonatorAccessOnExpiration(
        false,
        mockPastTimestampSeconds,
      );
      expect(isAccessExpiryDateInFutureSpy).not.toHaveBeenCalled();
      expect(updateUserAccessViaApiSpy).not.toHaveBeenCalled();
    });

    it('will check if active access has yet to expire and not attempt to update if has yet to expire', async () => {
      isAccessExpiryDateInFutureSpy.mockReturnValueOnce(true);
      await updateUserDonatorAccessOnExpiration(
        true,
        mockFutureTimestampSeconds,
      );
      expect(isAccessExpiryDateInFutureSpy).toHaveBeenCalledTimes(1);
      expect(isAccessExpiryDateInFutureSpy).toHaveBeenCalledWith(
        mockFutureTimestampSeconds,
      );
      expect(updateUserAccessViaApiSpy).not.toHaveBeenCalled();
    });

    it('will attempt to update donator active access if it has expired', async () => {
      isAccessExpiryDateInFutureSpy.mockReturnValueOnce(false);
      updateUserAccessViaApiSpy.mockResolvedValueOnce(null);
      await updateUserDonatorAccessOnExpiration(true, mockPastTimestampSeconds);
      expect(isAccessExpiryDateInFutureSpy).toHaveBeenCalledTimes(1);
      expect(isAccessExpiryDateInFutureSpy).toHaveBeenCalledWith(
        mockPastTimestampSeconds,
      );
      expect(updateUserAccessViaApiSpy).toHaveBeenCalledTimes(1);
    });

    it('will not throw but console error if fails to update expired donator access', async () => {
      const mockError = 'API error';
      isAccessExpiryDateInFutureSpy.mockReturnValueOnce(false);
      updateUserAccessViaApiSpy.mockRejectedValueOnce(new Error(mockError));
      await updateUserDonatorAccessOnExpiration(true, mockPastTimestampSeconds);
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        `Error, failed to update user's donator access on expiration: ${mockError}`,
      );
    });
  });

  describe('integration tests', () => {
    beforeAll(() => {
      global.fetch = jest.fn();
    });

    afterAll(() => {
      delete global.fetch;
    });

    it('will not attempt to update donator access if it has yet to expire', async () => {
      await updateUserDonatorAccessOnExpiration(
        true,
        mockFutureTimestampSeconds,
      );
      expect(fetch).not.toHaveBeenCalled();
    });

    it('will attempt to update donator active access if it has expired', async () => {
      global.fetch.mockResolvedValueOnce({ ok: true });
      await updateUserDonatorAccessOnExpiration(true, mockPastTimestampSeconds);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('/api/user/logged-in-cookies/update', {
        method: 'POST',
      });
    });

    it('will attempt to update donator active access if no access if provided', async () => {
      global.fetch.mockResolvedValueOnce({ ok: true });
      await updateUserDonatorAccessOnExpiration(true, undefined);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('will not throw but console error if fails to update expired donator access', async () => {
      const mockError = 'some-error';
      global.fetch.mockRejectedValueOnce(new Error(mockError));
      await updateUserDonatorAccessOnExpiration(true, mockPastTimestampSeconds);
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        `Error, failed to update user's donator access on expiration: ${mockError}`,
      );
    });
  });
});

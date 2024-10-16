import { error } from '../../log';
import * as isAccessExpiryDateInFuture from '../helpers/isAccessExpiryDateInFuture';
import * as updateUserAccessViaApi from '../helpers/updateUserAccessViaApi';
import updateUserDonatorAccessOnExpiration from '../updateUserDonatorAccessOnExpiration';

import type { MockedFetch } from '#types/jest';

jest.mock('../../log');

describe('updateUserDonatorAccessOnExpiration()', () => {
  const mockPastTimestampSeconds = (Date.now() - 1000) / 1000;
  const mockFutureTimestampSeconds = (Date.now() + 1000) / 1000;

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('unit tests', () => {
    let updateUserAccessViaApiSpy: jest.SpyInstance;
    let isAccessExpiryDateInFutureSpy: jest.SpyInstance;

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
    const originalFetch = global.fetch;
    let mockFetch: MockedFetch;

    beforeAll(() => {
      global.fetch = jest.fn();
      mockFetch = global.fetch as MockedFetch;
    });

    afterAll(() => {
      global.fetch = originalFetch;
    });

    it('will not attempt to update donator access if it has yet to expire', async () => {
      await updateUserDonatorAccessOnExpiration(
        true,
        mockFutureTimestampSeconds,
      );
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('will attempt to update donator active access if it has expired', async () => {
      mockFetch.mockResolvedValueOnce({ ok: true } as Response);
      await updateUserDonatorAccessOnExpiration(true, mockPastTimestampSeconds);
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
        '/api/user/logged-in-cookies/update',
        {
          method: 'POST',
        },
      );
    });

    it('will attempt to update donator active access if no access if provided', async () => {
      mockFetch.mockResolvedValueOnce({ ok: true } as Response);
      await updateUserDonatorAccessOnExpiration(true, 0);
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it('will not throw but console error if fails to update expired donator access', async () => {
      const mockError = 'some-error';
      mockFetch.mockRejectedValueOnce(new Error(mockError));
      await updateUserDonatorAccessOnExpiration(true, mockPastTimestampSeconds);
      expect(error).toHaveBeenCalledTimes(1);
      expect(error).toHaveBeenCalledWith(
        `Error, failed to update user's donator access on expiration: ${mockError}`,
      );
    });
  });
});

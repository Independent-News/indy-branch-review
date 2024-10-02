/**
 * @jest-environment jsdom
 */

import { COOKIE_LOGGED_IN } from '#app/constants/cookies';

import * as cookieUtils from '#app/public/js/utils/cookie';
import * as isUserLoggedInClientSide from '#app/util/isUserLoggedInClientSide';

import * as logUtils from '../../log';
import * as deleteExpiredSubscriberConsent from '../helpers/deleteExpiredSubscriberConsent';
import * as isAccessExpiryDateInFuture from '../helpers/isAccessExpiryDateInFuture';
import * as updateUserAccessViaApi from '../helpers/updateUserAccessViaApi';
import * as thatModule from '../updateUserAdFreeAccessOnExpiration';
import updateUserAdFreeAccessOnExpiration, {
  deleteUserConsentIfExpiredUser,
  identifyUserAsExpiredInPianoCustomFields,
} from '../updateUserAdFreeAccessOnExpiration';

import type { MockedFetch } from '#types/jest';

describe('updateUserAdFreeAccessOnExpiration()', () => {
  const mockPastTimestampInSeconds = Date.now() / 1000 - 1000;
  const mockFutureTimestampInSeconds = Date.now() / 1000 + 1000;
  const mockServerErrorMessage = 'some-server-error';
  const expectedConsoleError = `Error, failed to update user's ad-free access on expiration: ${mockServerErrorMessage}`;
  const originalFetch = global.fetch;
  let mockFetch: MockedFetch;

  beforeAll(() => {
    global.fetch = jest.fn();
    mockFetch = global.fetch as MockedFetch;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  describe('updateUserAccessIfCancelledViaDashboard()', () => {
    let updateUserAccessViaApiSpy: jest.SpyInstance;

    beforeEach(() => {
      updateUserAccessViaApiSpy = jest.spyOn(updateUserAccessViaApi, 'default');
    });

    it('will attempt to update user access via API when called', async () => {
      updateUserAccessViaApiSpy.mockResolvedValueOnce(null);
      await thatModule.updateUserAccessIfCancelledViaDashboard();
      expect(updateUserAccessViaApi.default).toHaveBeenCalledTimes(1);
    });

    it("will throw if any error occurs whilst updating the user's access via api", async () => {
      updateUserAccessViaApiSpy.mockRejectedValueOnce(
        new Error(mockServerErrorMessage),
      );
      await expect(
        thatModule.updateUserAccessIfCancelledViaDashboard(),
      ).rejects.toThrow(mockServerErrorMessage);
    });
  });

  describe('identifyUserAsActiveInPianoCustomFields()', () => {
    beforeEach(() => {
      jest.spyOn(logUtils, 'error').mockImplementation();
    });

    it('will attempt to identify the ad-free subscriber as active in their Piano custom fields and not console error on successful request', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
      } as Response);
      await thatModule.identifyUserAsActiveInPianoCustomFields();
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
        '/api/user/ad-free-access/enable',
        {
          method: 'POST',
        },
      );
      expect(logUtils.error).not.toHaveBeenCalled();
    });

    it('will console error on unsuccessful request to identify ad-free subscriber as active in their Piano custom fields', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValueOnce(mockServerErrorMessage),
      } as unknown as Response);
      await thatModule.identifyUserAsActiveInPianoCustomFields();
      expect(logUtils.error).toHaveBeenCalledTimes(1);
      expect(logUtils.error).toHaveBeenCalledWith(
        `Error, failed to identify user as active in Piano custom fields: ${mockServerErrorMessage}`,
      );
    });
  });

  describe('identifyUserAsExpiredInPianoCustomFields()', () => {
    it('will make request to Piano and not throw error when successful', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
      } as Response);
      await identifyUserAsExpiredInPianoCustomFields();
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
        '/api/user/ad-free-access/disable',
        {
          method: 'POST',
        },
      );
    });

    it('will throw error on unsuccessful Piano request', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValueOnce(mockServerErrorMessage),
      } as unknown as Response);
      await expect(identifyUserAsExpiredInPianoCustomFields()).rejects.toThrow(
        mockServerErrorMessage,
      );
    });
  });

  describe('deleteUserConsentIfExpiredUser()', () => {
    beforeEach(() => {
      jest.spyOn(deleteExpiredSubscriberConsent, 'default').mockResolvedValue();
      jest
        .spyOn(thatModule, 'identifyUserAsExpiredInPianoCustomFields')
        .mockResolvedValue();
    });

    it('will make request to check user ad-free access in Piano custom fields and throw error on unsuccessful request', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: jest
          .fn()
          .mockResolvedValueOnce({ message: mockServerErrorMessage }),
      } as unknown as Response);
      await expect(deleteUserConsentIfExpiredUser()).rejects.toThrow(
        mockServerErrorMessage,
      );
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('/api/user/ad-free-access/status');
    });

    it('will not attempt to delete user consent in SourcePoint or update ad-free access in Piano custom fields if user access is not granted in Piano custom fields', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({ isAdFreeUser: false }),
      } as unknown as Response);
      await deleteUserConsentIfExpiredUser();
      expect(deleteExpiredSubscriberConsent.default).not.toHaveBeenCalled();
      expect(
        thatModule.identifyUserAsExpiredInPianoCustomFields,
      ).not.toHaveBeenCalled();
    });

    it('will attempt to delete user consent in SourcePoint and update ad-free access in Piano custom fields if user access is granted in Piano', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({ isAdFreeUser: true }),
      } as unknown as Response);
      await deleteUserConsentIfExpiredUser();
      expect(deleteExpiredSubscriberConsent.default).toHaveBeenCalledTimes(1);
      expect(
        thatModule.identifyUserAsExpiredInPianoCustomFields,
      ).toHaveBeenCalledTimes(1);
    });
  });

  describe('wipeAdFreeStatusFromSiteAndThirdParties()', () => {
    beforeEach(() => {
      jest.spyOn(updateUserAccessViaApi, 'default').mockResolvedValue();
      jest.spyOn(deleteExpiredSubscriberConsent, 'default').mockResolvedValue();
      jest
        .spyOn(thatModule, 'identifyUserAsExpiredInPianoCustomFields')
        .mockResolvedValue();
    });

    it("will attempt to completely remove the user's ad-free status side wide and via SourcePoint and Piano", async () => {
      await thatModule.wipeAdFreeStatusFromSiteAndThirdParties();
      expect(updateUserAccessViaApi.default).toHaveBeenCalledTimes(1);
      expect(deleteExpiredSubscriberConsent.default).toHaveBeenCalledTimes(1);
      expect(
        thatModule.identifyUserAsExpiredInPianoCustomFields,
      ).toHaveBeenCalledTimes(1);
    });

    it('will throw error on unsuccessful request to update user access via API', async () => {
      (updateUserAccessViaApi.default as jest.Mock).mockRejectedValueOnce(
        new Error(mockServerErrorMessage),
      );
      await expect(
        thatModule.wipeAdFreeStatusFromSiteAndThirdParties(),
      ).rejects.toThrow(mockServerErrorMessage);
    });

    it('will throw error on unsuccessful request to delete user consent via SourcePoint', async () => {
      (
        deleteExpiredSubscriberConsent.default as jest.Mock
      ).mockRejectedValueOnce(new Error(mockServerErrorMessage));
      await expect(
        thatModule.wipeAdFreeStatusFromSiteAndThirdParties(),
      ).rejects.toThrow(mockServerErrorMessage);
    });

    it('will throw error on unsuccessful request to update user access in Piano custom fields', async () => {
      (
        thatModule.identifyUserAsExpiredInPianoCustomFields as jest.Mock
      ).mockRejectedValueOnce(new Error(mockServerErrorMessage));
      await expect(
        thatModule.wipeAdFreeStatusFromSiteAndThirdParties(),
      ).rejects.toThrow(mockServerErrorMessage);
    });
  });

  describe('ensureAdFreeUsersAreCorrectlyIdentified()', () => {
    beforeEach(() => {
      jest
        .spyOn(thatModule, 'identifyUserAsActiveInPianoCustomFields')
        .mockResolvedValue();
      jest
        .spyOn(thatModule, 'updateUserAccessIfCancelledViaDashboard')
        .mockResolvedValue();
    });

    it('will ensure ad-free users are correctly identified as active in their Piano custom fields and updates user access if they have been cancelled via dashboard', async () => {
      await thatModule.ensureAdFreeUsersAreCorrectlyIdentified();
      expect(
        thatModule.identifyUserAsActiveInPianoCustomFields,
      ).toHaveBeenCalledTimes(1);
      expect(
        thatModule.updateUserAccessIfCancelledViaDashboard,
      ).toHaveBeenCalledTimes(1);
    });

    it('will throw error on unsuccessful request to identify ad-free users as active in their Piano custom fields', async () => {
      (
        thatModule.identifyUserAsActiveInPianoCustomFields as jest.Mock
      ).mockRejectedValueOnce(new Error(mockServerErrorMessage));
      await expect(
        thatModule.ensureAdFreeUsersAreCorrectlyIdentified(),
      ).rejects.toThrow(mockServerErrorMessage);
    });

    it('will throw error on unsuccessful request to update user access if they have been cancelled via dashboard', async () => {
      (
        thatModule.updateUserAccessIfCancelledViaDashboard as jest.Mock
      ).mockRejectedValueOnce(new Error(mockServerErrorMessage));
      await expect(
        thatModule.ensureAdFreeUsersAreCorrectlyIdentified(),
      ).rejects.toThrow(mockServerErrorMessage);
    });
  });

  describe('default', () => {
    const mockServerError = new Error(mockServerErrorMessage);

    describe('unit tests', () => {
      let error: jest.SpyInstance;
      let isUserLoggedInClientSideSpy: jest.SpyInstance;

      beforeEach(() => {
        isUserLoggedInClientSideSpy = jest
          .spyOn(isUserLoggedInClientSide, 'default')
          .mockReturnValue(true);
        error = jest.spyOn(logUtils, 'error').mockImplementation();
        jest
          .spyOn(thatModule, 'deleteUserConsentIfExpiredUser')
          .mockResolvedValue();
        jest
          .spyOn(thatModule, 'ensureAdFreeUsersAreCorrectlyIdentified')
          .mockResolvedValue([] as never);
        jest
          .spyOn(isAccessExpiryDateInFuture, 'default')
          .mockReturnValue(false);
        jest
          .spyOn(thatModule, 'wipeAdFreeStatusFromSiteAndThirdParties')
          .mockResolvedValue([] as never);
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it('will not update anything if user is anonymous', async () => {
        isUserLoggedInClientSideSpy.mockReturnValue(false);
        await updateUserAdFreeAccessOnExpiration(
          false,
          mockFutureTimestampInSeconds,
        );
        expect(isUserLoggedInClientSideSpy).toHaveBeenCalledTimes(1);
        expect(
          thatModule.deleteUserConsentIfExpiredUser,
        ).not.toHaveBeenCalled();
        expect(isAccessExpiryDateInFuture.default).not.toHaveBeenCalled();
        expect(
          thatModule.ensureAdFreeUsersAreCorrectlyIdentified,
        ).not.toHaveBeenCalled();
        expect(
          thatModule.wipeAdFreeStatusFromSiteAndThirdParties,
        ).not.toHaveBeenCalled();
      });

      it('will only attempt to delete potentially expired user consent via SourcePoint if logged in user without ad-free access', async () => {
        await updateUserAdFreeAccessOnExpiration(
          false,
          mockFutureTimestampInSeconds,
        );
        expect(thatModule.deleteUserConsentIfExpiredUser).toHaveBeenCalledTimes(
          1,
        );
        expect(isAccessExpiryDateInFuture.default).not.toHaveBeenCalled();
        expect(
          thatModule.ensureAdFreeUsersAreCorrectlyIdentified,
        ).not.toHaveBeenCalled();
        expect(
          thatModule.wipeAdFreeStatusFromSiteAndThirdParties,
        ).not.toHaveBeenCalled();

        await updateUserAdFreeAccessOnExpiration(
          true,
          mockFutureTimestampInSeconds,
        );
        expect(thatModule.deleteUserConsentIfExpiredUser).toHaveBeenCalledTimes(
          1,
        );
      });

      it('will only ensure ad-free user is identified in the correct state if they are active', async () => {
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockFutureTimestampInSeconds,
        );
        expect(
          thatModule.ensureAdFreeUsersAreCorrectlyIdentified,
        ).toHaveBeenCalledTimes(1);
      });

      it("will not attempt to update active user's access if access expiry timestamp is in the future", async () => {
        (isAccessExpiryDateInFuture.default as jest.Mock).mockReturnValueOnce(
          true,
        );
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockFutureTimestampInSeconds,
        );
        expect(isAccessExpiryDateInFuture.default).toHaveBeenCalledTimes(1);
        expect(isAccessExpiryDateInFuture.default).toHaveBeenCalledWith(
          mockFutureTimestampInSeconds,
        );
        expect(
          thatModule.wipeAdFreeStatusFromSiteAndThirdParties,
        ).not.toHaveBeenCalled();
      });

      it("will attempt to update user's access if access has expired and will not console error on successful request", async () => {
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockPastTimestampInSeconds,
        );
        expect(
          thatModule.wipeAdFreeStatusFromSiteAndThirdParties,
        ).toHaveBeenCalledTimes(1);
        expect(error).not.toHaveBeenCalled();
      });

      it("will console error on unsuccessful request to wipe user's ad free status from the site and within third parties", async () => {
        (
          thatModule.wipeAdFreeStatusFromSiteAndThirdParties as jest.Mock
        ).mockRejectedValueOnce(mockServerError);
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockPastTimestampInSeconds,
        );
        expect(error).toHaveBeenCalledTimes(1);
        expect(error).toHaveBeenCalledWith(expectedConsoleError);
      });
    });

    describe('integration tests', () => {
      const mockConsentUUID = 'some-consent-uuid';
      const collectCalledFetchEndpoints = () =>
        mockFetch.mock.calls.map(([endpoint]) => endpoint);
      const mockActiveAdFreeUserRes = () =>
        jest.fn().mockResolvedValueOnce({ isAdFreeUser: true });
      let expectedSourcePointEndpoint: string;

      beforeAll(() => {
        window._sp_ = {
          metricData: {
            propertyId: 123,
          },
          config: {
            authId: 'some-auth-id',
          },
        } as unknown as typeof window._sp_;
        expectedSourcePointEndpoint = `https://cdn.privacy-mgmt.com/consent/tcfv2/consent/v3/${window._sp_?.metricData?.propertyId}?consentUUID=${mockConsentUUID}&authId=${window._sp_?.config?.authId}`;
      });

      beforeEach(() => {
        jest.spyOn(cookieUtils, 'getCookie').mockImplementation(
          (cookieName) =>
            ({
              [COOKIE_LOGGED_IN]: 'true',
              consentUUID: mockConsentUUID,
              __DEBUG__: 'true', // force console error
            })[cookieName] ?? '',
        );
      });

      afterAll(() => {
        delete window._sp_;
      });

      it('will only check potentially expired user ad-free access in Piano custom fields if logged in user identified without ad-free access', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: jest.fn().mockResolvedValueOnce({ isAdFreeUser: false }),
        } as unknown as Response);
        await updateUserAdFreeAccessOnExpiration(
          false,
          mockFutureTimestampInSeconds,
        );
        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(
          '/api/user/ad-free-access/status',
        );
      });

      it('will attempt to delete expired user ad-free access in Piano custom fields and via SourcePoint if logged in user identified without ad-free access', async () => {
        mockFetch.mockImplementation((url) =>
          Promise.resolve({
            ...(typeof url === 'string' &&
            url.includes('/api/user/ad-free-access/status')
              ? ({
                  json: mockActiveAdFreeUserRes(),
                } as unknown as Response)
              : ({} as Response)),
            ok: true,
          } as Response),
        );
        await updateUserAdFreeAccessOnExpiration(
          false,
          mockPastTimestampInSeconds,
        );
        expect(mockFetch).toHaveBeenCalledTimes(3);
        expect(collectCalledFetchEndpoints()).toEqual([
          '/api/user/ad-free-access/status',
          expectedSourcePointEndpoint,
          '/api/user/ad-free-access/disable',
        ]);
      });

      it('will console error on failed attempt to delete expired user consent via SourcePoint if logged in user identified without ad-free access', async () => {
        mockFetch
          .mockResolvedValueOnce({
            ok: true,
            json: mockActiveAdFreeUserRes(),
          } as unknown as Response)
          .mockRejectedValueOnce(mockServerError);
        await updateUserAdFreeAccessOnExpiration(
          false,
          mockPastTimestampInSeconds,
        );
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(expectedConsoleError);
      });

      it('will console error on failed attempt to remove expired user access in Piano custom fields if logged in user identified without ad-free access', async () => {
        mockFetch
          .mockResolvedValueOnce({
            ok: true,
            json: mockActiveAdFreeUserRes(),
          } as unknown as Response)
          .mockResolvedValueOnce({
            ok: true,
          } as Response)
          .mockRejectedValueOnce(mockServerError);
        await updateUserAdFreeAccessOnExpiration(
          false,
          mockPastTimestampInSeconds,
        );
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(expectedConsoleError);
      });

      it('will only ensure ad-free user is identified in the correct state if they are active', async () => {
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockFutureTimestampInSeconds,
        );
        expect(fetch).toHaveBeenCalledTimes(2);
        expect(collectCalledFetchEndpoints()).toEqual([
          '/api/user/ad-free-access/enable',
          '/api/user/logged-in-cookies/update',
        ]);
      });

      it("will assume access has expired and attempt to update active ad-free user's access if no access expiry timestamp is detected", async () => {
        mockFetch.mockResolvedValue({ ok: true } as Response);
        await updateUserAdFreeAccessOnExpiration(true, null);
        const apiEndpointsCalled = mockFetch.mock.calls.map(
          ([endpoint]) => endpoint,
        );
        expect(mockFetch).toHaveBeenCalledTimes(5);
        expect(apiEndpointsCalled).toEqual([
          '/api/user/ad-free-access/enable',
          '/api/user/logged-in-cookies/update',
          '/api/user/logged-in-cookies/update',
          `https://cdn.privacy-mgmt.com/consent/tcfv2/consent/v3/${window._sp_?.metricData?.propertyId}?consentUUID=${mockConsentUUID}&authId=${window._sp_?.config?.authId}`,
          '/api/user/ad-free-access/disable',
        ]);
        expect(console.error).not.toHaveBeenCalled();
      });

      it("will attempt to update active ad-free user's access if access has expired", async () => {
        mockFetch.mockResolvedValue({ ok: true } as Response);
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockPastTimestampInSeconds,
        );
        expect(mockFetch).toHaveBeenCalledTimes(5);
      });

      it("will console error on unsuccessful request to update active ad-free user's access via API if access has expired", async () => {
        mockFetch
          .mockRejectedValueOnce(mockServerError)
          .mockResolvedValueOnce({ ok: true } as Response)
          .mockResolvedValueOnce({ ok: true } as Response);
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockPastTimestampInSeconds,
        );
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(expectedConsoleError);
      });

      it("will console error on unsuccessful request to delete active ad-free user's consent via SourcePoint if access has expired", async () => {
        mockFetch
          .mockResolvedValueOnce({ ok: true } as Response)
          .mockRejectedValueOnce(mockServerError)
          .mockResolvedValueOnce({ ok: true } as Response);
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockPastTimestampInSeconds,
        );
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(expectedConsoleError);
      });

      it("will console error on unsuccessful request to remove active ad-free user's access via Piano custom fields if access has expired", async () => {
        mockFetch
          .mockResolvedValueOnce({ ok: true } as Response)
          .mockResolvedValueOnce({ ok: true } as Response)
          .mockRejectedValueOnce(mockServerError);
        await updateUserAdFreeAccessOnExpiration(
          true,
          mockPastTimestampInSeconds,
        );
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(expectedConsoleError);
      });
    });
  });
});

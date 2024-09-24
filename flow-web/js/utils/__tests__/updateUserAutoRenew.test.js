/**
 * @jest-environment jsdom
 */
import {
  BRAZE_EVENT_AUTORENEWAL_ON,
  BRAZE_EVENT_AUTORENEWAL_OFF,
} from '#app/public/js/modules/braze/constants';
import initBrazeSDK from '#app/public/js/modules/braze/initBrazeSDK';
import { InternalApi } from '#app/public/js/utils/internalApi';

import { updateUserAutoRenew } from '../updateUserAutoRenew';

jest.mock('#app/public/js/utils/internalApi');
jest.mock('#app/public/js/modules/braze/initBrazeSDK');

describe('#app/public/js/utils/updateUserAutoRenew', () => {
  const cancellationJourneyDataInitialState = {
    shouldRenderManageSubscriptionAfterCancellation: false,
    targetSubscriptionStatus: '',
    subscriptionIdToUpdate: '',
    userSubscriptionAutoRenewStatus: null, // mock on mount scenario
  };
  const mockCancellationJourneyData = {
    current: { ...cancellationJourneyDataInitialState },
  };

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
    mockCancellationJourneyData.current = {
      ...cancellationJourneyDataInitialState,
    };
  });

  describe('updateUserAutoRenew', () => {
    const mockSubId = 'test-sub-id';
    let mockArgs;

    beforeEach(() => {
      mockArgs = {
        subscriptionId: mockSubId,
        autoRenew: true,
        onSuccessfulRequest: jest.fn(),
      };
    });

    it('will call successful request prop on successful request', async () => {
      InternalApi.post.mockResolvedValue({ ok: true });
      await updateUserAutoRenew(mockArgs);
      expect(InternalApi.post).toHaveBeenCalledTimes(1);
      expect(InternalApi.post).toHaveBeenCalledWith('subscription/cancel', {
        autoRenew: mockArgs.autoRenew,
        subscriptionId: mockArgs.subscriptionId,
      });
      expect(mockArgs.onSuccessfulRequest).toHaveBeenCalledTimes(1);
      expect(console.error).not.toHaveBeenCalled();
    });

    it('will console error correctly on unsuccessful request', async () => {
      InternalApi.post.mockResolvedValue({ ok: false });
      await updateUserAutoRenew(mockArgs);
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        'Fetch failed: ',
        'Network response was not ok.',
      );
    });
  });

  describe('braze', () => {
    const logCustomEvent = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    beforeAll(() => {
      global.braze = {
        logCustomEvent,
      };
    });

    afterAll(() => {
      delete global.braze;
      jest.restoreAllMocks();
    });

    it('will send braze event for autorenew ON', async () => {
      initBrazeSDK.mockResolvedValueOnce(true);

      await updateUserAutoRenew({
        subscriptionId: 'test-sub-id',
        autoRenew: true,
      });

      expect(logCustomEvent).toHaveBeenCalledTimes(1);
      expect(logCustomEvent).toHaveBeenCalledWith(
        BRAZE_EVENT_AUTORENEWAL_ON,
        undefined,
      );
    });

    it('will send braze event for autorenew ON', async () => {
      initBrazeSDK.mockResolvedValueOnce(true);

      await updateUserAutoRenew({
        subscriptionId: 'test-sub-id',
        autoRenew: false,
      });

      expect(logCustomEvent).toHaveBeenCalledTimes(1);
      expect(logCustomEvent).toHaveBeenCalledWith(
        BRAZE_EVENT_AUTORENEWAL_OFF,
        undefined,
      );
    });
  });
});

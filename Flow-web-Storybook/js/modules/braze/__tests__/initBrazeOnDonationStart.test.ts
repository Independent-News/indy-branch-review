/**
 * @jest-environment jsdom
 */

import { BRAZE_EVENT_DONATION_START } from '../constants';
import * as ensureBrazeDataIsImmediatelyLogged from '../ensureBrazeDataIsImmediatelyLogged';
import * as thatModule from '../initBrazeOnDonationStart';
import * as initBrazeSDK from '../initBrazeSDK';

describe('initBrazeOnDonationStart module', () => {
  beforeAll(() => {
    window.braze = {
      logCustomEvent: jest.fn(),
      requestImmediateDataFlush: jest.fn(),
    } as unknown as typeof window.braze;
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete window.braze;
    jest.restoreAllMocks();
  });

  describe('unit test', () => {
    let initBrazeSDKMock: jest.SpyInstance<Promise<boolean>, [], unknown>;
    let ensureBrazeDataIsImmediatelyLoggedMock: jest.SpyInstance<void>;

    beforeEach(() => {
      initBrazeSDKMock = jest
        .spyOn(initBrazeSDK, 'default')
        .mockImplementation();
      ensureBrazeDataIsImmediatelyLoggedMock = jest
        .spyOn(ensureBrazeDataIsImmediatelyLogged, 'default')
        .mockImplementation();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('will correctly initialise the Braze SDK and submit the donation_start event whilst ensuring the event is immediately dispatched', async () => {
      initBrazeSDKMock.mockResolvedValueOnce(true);
      await thatModule.initBrazeOnDonationStart();
      expect(initBrazeSDKMock).toHaveBeenCalledTimes(1);
      expect(window.braze?.logCustomEvent).toHaveBeenCalledTimes(1);
      expect(window.braze?.logCustomEvent).toHaveBeenCalledWith(
        BRAZE_EVENT_DONATION_START,
      );
      expect(ensureBrazeDataIsImmediatelyLoggedMock).toHaveBeenCalledTimes(1);
      expect(console.error).not.toHaveBeenCalled();
    });

    it('will recover and print error message to console if fails to initialise the Braze SDK', async () => {
      const mockErrorMessage = 'test error';
      initBrazeSDKMock.mockImplementationOnce(() => {
        throw new Error(mockErrorMessage);
      });
      await thatModule.initBrazeOnDonationStart();
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        `Error logging ${BRAZE_EVENT_DONATION_START} Braze event:`,
        mockErrorMessage,
      );
      expect(window.braze?.logCustomEvent).not.toHaveBeenCalled();
      expect(ensureBrazeDataIsImmediatelyLoggedMock).not.toHaveBeenCalled();
    });
  });

  describe('integration test', () => {
    it('will correctly initialise the Braze SDK and submit the donation_start event whilst ensuring the event is immediately dispatched', async () => {
      await thatModule.initBrazeOnDonationStart();
      expect(window.braze?.logCustomEvent).toHaveBeenCalledTimes(1);
      expect(window.braze?.logCustomEvent).toHaveBeenCalledWith(
        BRAZE_EVENT_DONATION_START,
      );
      expect(window.braze?.requestImmediateDataFlush).toHaveBeenCalledOnce();
    });
  });
});

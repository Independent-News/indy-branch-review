/**
 * @jest-environment jsdom
 */

import { initBrazeOnDonationFinish } from '../InitBrazeOnDonationFinish';
import { BRAZE_EVENT_DONATION_FINISH } from '../constants';
import ensureBrazeDataIsImmediatelyLogged from '../ensureBrazeDataIsImmediatelyLogged';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');
jest.mock('../ensureBrazeDataIsImmediatelyLogged');

describe('initBrazeOnDonationFinish()', () => {
  const initBrazeSDKMock = initBrazeSDK as jest.MockedFunction<
    typeof initBrazeSDK
  >;

  beforeAll(() => {
    window.braze = {
      logCustomEvent: jest.fn(),
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

  it('will correctly initialise the Braze SDK and submit the donation_finish event whilst ensuring the event is immediately dispatched', async () => {
    initBrazeSDKMock.mockResolvedValueOnce(true);
    await initBrazeOnDonationFinish();
    expect(initBrazeSDKMock).toHaveBeenCalledTimes(1);
    expect(window.braze?.logCustomEvent).toHaveBeenCalledTimes(1);
    expect(window.braze?.logCustomEvent).toHaveBeenCalledWith(
      BRAZE_EVENT_DONATION_FINISH,
    );
    expect(ensureBrazeDataIsImmediatelyLogged).toHaveBeenCalledTimes(1);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will recover and print error message to console if fails to initialise the Braze SDK', async () => {
    const mockErrorMessage = 'test error';
    initBrazeSDKMock.mockImplementationOnce(() => {
      throw new Error(mockErrorMessage);
    });
    await initBrazeOnDonationFinish();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      `Error logging ${BRAZE_EVENT_DONATION_FINISH} Braze event:`,
      mockErrorMessage,
    );
    expect(window.braze?.logCustomEvent).not.toHaveBeenCalled();
    expect(ensureBrazeDataIsImmediatelyLogged).not.toHaveBeenCalled();
  });
});

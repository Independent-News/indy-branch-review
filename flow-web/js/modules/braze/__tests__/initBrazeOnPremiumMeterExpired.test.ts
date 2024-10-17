/**
 * @jest-environment jsdom
 */

import { BRAZE_EVENT_PREMIUM_METER_EXPIRED } from '../constants';
import ensureBrazeDataIsImmediatelyLogged from '../ensureBrazeDataIsImmediatelyLogged';
import { initBrazeOnPremiumMeterExpired } from '../initBrazeOnPremiumMeterExpired';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');
jest.mock('../ensureBrazeDataIsImmediatelyLogged');

describe('initBrazeOnPremiumMeterExpired()', () => {
  const mockInitBrazeSDK = initBrazeSDK as jest.MockedFunction<
    typeof initBrazeSDK
  >;

  beforeAll(() => {
    window.braze = {
      logCustomEvent: jest.fn(),
    } as unknown as typeof window.braze;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete window.braze;
  });

  it('will correctly init the Braze SDK and log the premium meter expired event, ensuring the event is immediately dispatched by the SDK', async () => {
    mockInitBrazeSDK.mockResolvedValueOnce(true);
    (ensureBrazeDataIsImmediatelyLogged as jest.Mock).mockReturnValueOnce(null);
    await initBrazeOnPremiumMeterExpired();
    expect(mockInitBrazeSDK).toHaveBeenCalledTimes(1);
    expect(window.braze?.logCustomEvent).toHaveBeenCalledTimes(1);
    expect(window.braze?.logCustomEvent).toHaveBeenCalledWith(
      BRAZE_EVENT_PREMIUM_METER_EXPIRED,
      {},
    );
    expect(ensureBrazeDataIsImmediatelyLogged).toHaveBeenCalledTimes(1);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will recover and print error message to console if fails to log custom event via Braze', async () => {
    const mockErrorMessage = 'test error';
    mockInitBrazeSDK.mockRejectedValueOnce(new Error(mockErrorMessage));
    await initBrazeOnPremiumMeterExpired();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      `Error logging ${BRAZE_EVENT_PREMIUM_METER_EXPIRED} Braze event:`,
      mockErrorMessage,
    );
  });
});

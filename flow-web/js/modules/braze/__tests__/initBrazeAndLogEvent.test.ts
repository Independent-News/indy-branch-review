/**
 * @jest-environment jsdom
 */

import ensureBrazeDataIsImmediatelyLogged from '../ensureBrazeDataIsImmediatelyLogged';
import { initBrazeAndLogEvent } from '../initBrazeAndLogEvent';
import initBrazeSDK from '../initBrazeSDK';

import type { BrazeEvents } from '#types/braze';

jest.mock('../initBrazeSDK');
jest.mock('../ensureBrazeDataIsImmediatelyLogged');

describe('initBrazeAndLogEvent()', () => {
  const mockEventName = 'custom_braze_event' as BrazeEvents;
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

  const mockPayload = { type: 'auto_renew', value: true };

  it('will correctly init the Braze SDK and log the provided event, ensuring the event is immediately dispatched by the SDK', async () => {
    mockInitBrazeSDK.mockResolvedValueOnce(true);
    (ensureBrazeDataIsImmediatelyLogged as jest.Mock).mockReturnValueOnce(null);
    await initBrazeAndLogEvent(mockEventName, mockPayload);
    expect(mockInitBrazeSDK).toHaveBeenCalledTimes(1);
    expect(window.braze?.logCustomEvent).toHaveBeenCalledTimes(1);
    expect(window.braze?.logCustomEvent).toHaveBeenCalledWith(
      mockEventName,
      mockPayload,
    );
    expect(ensureBrazeDataIsImmediatelyLogged).toHaveBeenCalledTimes(1);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will recover and print error message to console if fails to log custom event via Braze', async () => {
    const mockErrorMessage = 'test error';
    mockInitBrazeSDK.mockRejectedValueOnce(new Error(mockErrorMessage));
    await initBrazeAndLogEvent(mockEventName, mockPayload);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      'Error logging custom_braze_event Braze event:',
      mockErrorMessage,
    );
  });
});

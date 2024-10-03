/**
 * @jest-environment jsdom
 */

import initBrazeSDK from '../initBrazeSDK';
import initBrazeSDKAndOpenSession from '../initBrazeSDKAndOpenSession';

jest.mock('../initBrazeSDK');

describe('initBrazeSDKAndOpenSession()', () => {
  beforeAll(() => {
    window.braze = {
      openSession: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete window.braze;
  });

  it('will initialise the Braze SDK and open a new session if it has initialised successfully', async () => {
    initBrazeSDK.mockResolvedValueOnce(true);
    await initBrazeSDKAndOpenSession();
    expect(window.braze.openSession).toHaveBeenCalledTimes(1);
  });

  it('will NOT open a new session if the Braze SDK has not initialised successfully', async () => {
    initBrazeSDK.mockResolvedValueOnce(false);
    await initBrazeSDKAndOpenSession();
    expect(window.braze.openSession).not.toHaveBeenCalled();
  });
});

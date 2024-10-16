/**
 * @jest-environment jsdom
 */

import { warn } from '#app/public/js/modules/log';

import ensureBrazeDataIsImmediatelyLogged, {
  BRAZE_DATA_FLUSH_WARN_MESSAGE,
} from '../ensureBrazeDataIsImmediatelyLogged';

jest.mock('#app/public/js/modules/log');

describe('ensureBrazeDataIsImmediatelyLogged()', () => {
  const requestImmediateDataFlushMock = jest.fn();
  const mockLoadedBrazeSDK = () =>
    (window.braze = {
      requestImmediateDataFlush: requestImmediateDataFlushMock,
    } as unknown as typeof window.braze);

  afterEach(() => {
    jest.resetAllMocks();
    delete window.braze;
  });

  it('will do nothing if the Braze SDK has not loaded', () => {
    ensureBrazeDataIsImmediatelyLogged();
    expect(requestImmediateDataFlushMock).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();
  });

  it('will correctly request an immediate data flush from the Braze SDK if it has loaded', async () => {
    mockLoadedBrazeSDK();
    ensureBrazeDataIsImmediatelyLogged();
    expect(requestImmediateDataFlushMock).toHaveBeenCalledTimes(1);
    expect(requestImmediateDataFlushMock).toHaveBeenCalledWith(
      expect.any(Function),
    );
  });

  it('will correctly console warn if the requested data flush was not successful', async () => {
    requestImmediateDataFlushMock.mockImplementationOnce((callback) => {
      const mockWasDataFlushSuccessful = false;
      callback(mockWasDataFlushSuccessful);
    });
    mockLoadedBrazeSDK();
    ensureBrazeDataIsImmediatelyLogged();
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(BRAZE_DATA_FLUSH_WARN_MESSAGE);
  });

  it('will not console warn if the requested data flush was successful', async () => {
    requestImmediateDataFlushMock.mockImplementationOnce((callback) => {
      const mockWasDataFlushSuccessful = true;
      callback(mockWasDataFlushSuccessful);
    });
    mockLoadedBrazeSDK();
    ensureBrazeDataIsImmediatelyLogged();
    expect(warn).not.toHaveBeenCalled();
  });
});

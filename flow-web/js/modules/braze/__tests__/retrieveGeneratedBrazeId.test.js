import { error } from '../../log';
import retrieveBrazeDeviceId from '../retrieveBrazeDeviceId';
import retrieveGeneratedBrazeId from '../retrieveGeneratedBrazeId';

jest.mock('../../log');
jest.mock('../retrieveBrazeDeviceId');

describe('retrieveGeneratedBrazeId()', () => {
  const mockJson = jest.fn();

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('will console error and return null if Braze device id cannot be fetched', async () => {
    retrieveBrazeDeviceId.mockResolvedValue(null);
    const result = await retrieveGeneratedBrazeId();
    expect(result).toBeNull();
    expect(error).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledWith(
      'Unable to retrieve generated Braze id: Error: failed to retrieve Braze device id',
    );
  });

  it('will console error and return null if fails to fetch generated Braze id from server', async () => {
    global.fetch.mockResolvedValueOnce({
      json: mockJson,
      ok: false,
    });
    mockJson.mockResolvedValueOnce({ message: 'some-error' });
    retrieveBrazeDeviceId.mockResolvedValue('some-braze-device-id');
    const result = await retrieveGeneratedBrazeId();
    expect(result).toBeNull();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/user/braze-generated-id?device_id=some-braze-device-id',
    );
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledWith(
      'Unable to retrieve generated Braze id: some-error',
    );
  });

  it('will not console error and return 200 with generated Braze id on successful request', async () => {
    global.fetch.mockResolvedValueOnce({
      json: mockJson,
      ok: true,
    });
    mockJson.mockResolvedValueOnce({ generatedBrazeId: 'some-braze-id' });
    retrieveBrazeDeviceId.mockResolvedValue('some-braze-device-id');
    const result = await retrieveGeneratedBrazeId();
    expect(result).toBe('some-braze-id');
    expect(error).not.toHaveBeenCalled();
  });
});

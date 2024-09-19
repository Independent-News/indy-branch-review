import { error } from '../../log';
import retrieveBrazeDeviceId from '../retrieveBrazeDeviceId';

jest.mock('../../log');

describe('retrieveBrazeDeviceId()', () => {
  afterEach(() => {
    jest.resetAllMocks();
    delete global.braze;
  });

  it('will return null and console error if Braze has not loaded', async () => {
    const result = await retrieveBrazeDeviceId();
    expect(result).toBeNull();
    expect(error).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledWith(
      'Unable to retrieve Braze device id: braze is not defined',
    );
  });

  it('will return null and console error if Braze has not loaded', async () => {
    global.braze = {
      getDeviceId: jest.fn((callback) => callback('some-device-id')),
    };
    const result = await retrieveBrazeDeviceId();
    expect(result).toBe('some-device-id');
    expect(error).not.toHaveBeenCalled();
  });
});

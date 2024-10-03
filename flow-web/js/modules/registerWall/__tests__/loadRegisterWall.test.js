/**
 * @jest-environment jsdom
 */

import { error } from '../../log';
import { loadJS } from '../../util';
import loadRegisterWall from '../loadRegisterWall';

jest.mock('../../log');
jest.mock('../../util');

describe('loadRegisterWall()', () => {
  beforeEach(() => {
    window.JSGlobals = {
      manifest: {},
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete window.JSGlobals;
  });

  it('will correctly load the register wall if initialisation script is available from build manifest', async () => {
    const mockRegWallInitScript = 'some-register-wall-init-script';
    window.JSGlobals.manifest['init_register_wall.js'] = mockRegWallInitScript;
    await loadRegisterWall();
    expect(loadJS).toHaveBeenCalledTimes(1);
    expect(loadJS).toHaveBeenCalledWith(mockRegWallInitScript);
    expect(error).not.toHaveBeenCalled();
  });

  it('will console error and not attempt to load the initialisation script if it is not available from the build manifest', async () => {
    await loadRegisterWall();
    expect(loadJS).not.toHaveBeenCalled();
    expect(error).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledWith(
      'Failed to load register wall: ',
      new Error('Register wall init script not found in build manifest'),
    );
  });
});

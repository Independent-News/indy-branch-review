import { error } from '../log';
import { loadJS } from '../util';

export default async () => {
  try {
    const { manifest } = window.JSGlobals;
    const registerWallInitScript = manifest['init_register_wall.js'];
    if (!registerWallInitScript) {
      throw new Error('Register wall init script not found in build manifest');
    }
    await loadJS(manifest['init_register_wall.js']);
  } catch (e) {
    error('Failed to load register wall: ', e);
  }
};

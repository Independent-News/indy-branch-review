/**
 * @jest-environment jsdom
 */
import { loadJS } from '#app/public/js/modules/util';

import initReact from '../initReact';

jest.mock('#app/public/js/modules/util');

describe('initReact()', () => {
  beforeEach(() => {
    window.JSGlobals = {
      manifest: { 'react-archipelago.js': 'react-archipelago-path.js' },
    };
  });

  afterEach(() => {
    delete window.JSGlobals;
    jest.resetAllMocks();
  });

  it('should load React from CDN if it does not exist', async () => {
    loadJS.mockImplementation();

    await initReact();

    expect(loadJS).toHaveBeenCalledTimes(1);
    expect(loadJS).toHaveBeenCalledWith('react-archipelago-path.js');
  });

  it('should not load React if it exists', async () => {
    const dummyScriptElement = document.createElement('script');
    dummyScriptElement.src = 'react-archipelago-path.js';

    document.body.appendChild(dummyScriptElement);

    await initReact();

    expect(loadJS).not.toHaveBeenCalled();
  });
});

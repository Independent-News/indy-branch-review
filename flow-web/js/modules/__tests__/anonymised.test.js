import initAnonymised from '../anonymised';
import { loadJS } from '../util';

jest.mock('../util');

describe('anonymised init', () => {
  it('will load the anonymised lib', async () => {
    global.JSGlobals = {};
    loadJS.mockResolvedValue(undefined);

    await initAnonymised();

    expect(loadJS).toHaveBeenCalledWith(
      '//static.anonymised.io/light/loader.js',
      {
        id: 'idward-plugin-js',
        attributes: [
          ['idw_client_id', 'NDEx'],
          ['idw_hide_button', 'true'],
        ],
      },
    );
  });
});

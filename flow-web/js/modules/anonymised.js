import { checkVendorConsent } from './cmp';
import { loadJS } from './util';

const SP_VENDOR_ID = '6274ee2d293cdf1bf415179b';

export default async () => {
  if (await checkVendorConsent(SP_VENDOR_ID, 'anonymised')) {
    await loadJS('//static.anonymised.io/light/loader.js', {
      id: 'idward-plugin-js',
      attributes: [
        ['idw_client_id', 'NDEx'],
        ['idw_hide_button', 'true'],
      ],
    });
  }
};

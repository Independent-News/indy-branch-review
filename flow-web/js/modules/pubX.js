import { checkVendorConsent } from './cmp';
import { loadJS } from './util';

// this vendor ID is copied from source point
const SP_VENDOR_ID = '654a71546725a6047bda1db7';

export default async () => {
  if (await checkVendorConsent(SP_VENDOR_ID, 'pubX')) {
    loadJS('https://cdn.pbxai.com/b5a8c20e-7642-44b9-82a5-8c896cbfc109.js');
  }
};

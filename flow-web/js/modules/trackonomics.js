/* global JSGlobals */

import { loadJS } from './util';

export default () => {
  if (JSGlobals?.article?.isBest && JSGlobals?.trackonomics?.customerId) {
    const customerId = JSGlobals.trackonomics.customerId;
    const url = `https://cdn-magiclinks.trackonomics.net/client/static/v2/${customerId}.js`;
    const attributes = [
      ['id', 'funnel-relay-installer'],
      ['data-property-id', 'PROPERTY_ID'],
      ['data-customer-id', customerId],
    ];
    loadJS(url, { attributes, async: true });
  }
};

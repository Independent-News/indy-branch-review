/**
 * @jest-environment jsdom
 */

import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_SUBSCRIPTION_SAVE_OFFER_PAGE } from '#app/constants/ids';

import subscriptionSaveOffer from '../subscription-save-offer';

jest.mock('@indy/archipelago/bootstrap');
jest.mock('#app/component/library/Hydration/IndyClientIslandWrapper', () => ({
  __esModule: true,
  default: 'HydrateIslandWrapper',
}));
jest.mock(
  '#app/component/pages/subscribe/SaveOfferPage/Content/OfferCardWithDetails',
  () => ({
    __esModule: true,
    default: 'OfferCardWithDetails',
  }),
);

describe('subscription-save-offer', () => {
  afterEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = '';
  });

  it('will immediately hydrate correct error banner component', () => {
    document.body.innerHTML = `<div id="${ID_SUBSCRIPTION_SAVE_OFFER_PAGE}"></div>`;
    subscriptionSaveOffer();
    expect((hydrateComponent as jest.Mock).mock.calls.at(0))
      .toMatchInlineSnapshot(`
      [
        <div
          id="subscription-save-offer-page"
        />,
        {
          "OfferCardWithDetails": "OfferCardWithDetails",
        },
        {
          "Wrapper": "HydrateIslandWrapper",
        },
      ]
    `);
  });
});

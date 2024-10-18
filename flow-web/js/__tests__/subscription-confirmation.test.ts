/**
 * @jest-environment jsdom
 */
import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_SUBSCRIBE_CONFIRMATION_NEWSLETTERS } from '#app/constants/ids';

import JSGlobals from '#app/__types__/JSGlobals';

import { initBrazeOnSubscriptionFinish } from '../modules/braze/initBrazeOnSubscriptionFinish';
import { subscriptionConfirmation } from '../subscription-confirmation';

jest.mock('@indy/archipelago/bootstrap');
jest.mock('../modules/digital-data/digital-data-session');
jest.mock('../modules/taboola');
jest.mock('../utils/internalApi');
jest.mock(
  '#app/component/library/StaticPage/PaymentFlow/Confirmation/OnboardingJourney',
  () => ({
    HeaderWithMultiStepForm: 'HeaderWithMultiStepForm',
  }),
);
jest.mock('#app/component/library/StaticPage/PaymentFlow/Confirmation', () => ({
  NewsletterOptions: 'NewsletterOptions',
}));
jest.mock('#app/component/library/Hydration/IndyClientIslandWrapper', () => ({
  default: 'HydrationWrapper',
  __esModule: true,
}));
jest.mock('../modules/braze/initBrazeOnSubscriptionFinish');

describe('Subscription-confirmation', () => {
  beforeAll(() => {
    window.JSGlobals = {} as unknown as JSGlobals;
  });

  beforeEach(() => {
    window.JSGlobals.featureFlags = {} as unknown as JSGlobals['featureFlags'];
    jest.spyOn(document, 'addEventListener');
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
    document.body.innerHTML = '';
  });

  afterAll(() => {
    window.JSGlobals = undefined as unknown as JSGlobals;
  });

  it('will hydrate the onboarding confirmation page', async () => {
    document.body.innerHTML = `
      <div id=${ID_SUBSCRIBE_CONFIRMATION_NEWSLETTERS}></div>
    `;
    await subscriptionConfirmation();
    expect(hydrateComponent).toHaveBeenCalledTimes(1);
    expect(initBrazeOnSubscriptionFinish).toHaveBeenCalled();
    expect((hydrateComponent as jest.Mock).mock.calls[0])
      .toMatchInlineSnapshot(`
      [
        <div
          id="subscribe-confirmation-newsletters"
        />,
        {
          "HeaderWithMultiStepForm": "HeaderWithMultiStepForm",
        },
        {
          "Wrapper": "HydrationWrapper",
        },
      ]
    `);
  });
});

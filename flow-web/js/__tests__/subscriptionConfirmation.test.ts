/**
 * @jest-environment jest-environment-jsdom-global
 */
import { hydrateComponent } from '@indy/archipelago/bootstrap';

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

describe('Subscription Confirmation', () => {
  beforeAll(() => {
    window.JSGlobals = {} as unknown as typeof window.JSGlobals;
  });

  beforeEach(() => {
    window.JSGlobals = {
      featureFlags: {},
    } as unknown as typeof window.JSGlobals;
    jest.spyOn(document, 'addEventListener');
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  afterAll(() => {
    window.JSGlobals = undefined as unknown as typeof window.JSGlobals;
  });

  it('will hydrate the onboarding confirmation page', async () => {
    const mockDiv = document.createElement('div');
    document.getElementById = jest.fn().mockReturnValue(mockDiv);
    await subscriptionConfirmation();
    // once on file load, once on test
    expect(hydrateComponent).toHaveBeenCalledTimes(1);
    expect(initBrazeOnSubscriptionFinish).toHaveBeenCalled();
    expect((hydrateComponent as jest.Mock).mock.calls[0])
      .toMatchInlineSnapshot(`
      [
        <div />,
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

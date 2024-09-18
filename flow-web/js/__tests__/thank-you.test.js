/**
 * @jest-environment jsdom
 */

import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_REG_ONBOARDING_WRAPPER } from '#app/constants/ids';

import { trackSubscriptionCause } from '../modules/taboola';
import { thankYou } from '../thank-you';

jest.mock('@indy/archipelago/bootstrap');
jest.mock('../modules/taboola');
jest.mock('#app/component/library/Hydration/IndyClientIslandWrapper', () => ({
  __esModule: true,
  default: 'HydrateWrapper',
}));
jest.mock('#app/component/library/StaticPage/ThankYou', () => ({
  __esModule: true,
  default: 'RegistrationOnboardingJourney',
}));

describe('thankYou()', () => {
  beforeAll(() => {
    jest.spyOn(document, 'getElementById').mockReturnValue('root');
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        removeItem: jest.fn(),
      },
    });
  });

  afterEach(() => {
    delete window.opener;
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  afterAll(() => {
    document.getElementById.mockRestore();
  });

  it('will hydrate the RegistrationOnboardingJourney component', () => {
    thankYou();
    expect(document.getElementById).toHaveBeenCalledTimes(1);
    expect(document.getElementById).toHaveBeenCalledWith(
      ID_REG_ONBOARDING_WRAPPER,
    );
    expect(hydrateComponent).toHaveBeenCalled();
    const calls = hydrateComponent.mock.calls;

    expect(calls[calls.length - 1]).toMatchInlineSnapshot(`
      [
        "root",
        {
          "ThankYouOnboardingContent": [Function],
        },
        {
          "Wrapper": "HydrateWrapper",
        },
      ]
    `);
  });

  it('will track subscription cause via Taboola and reload page on refresh button click', () => {
    window.opener = {
      location: {
        reload: jest.fn(),
      },
    };
    document.body.innerHTML = `<button class="refresh-parent"></button>`;
    thankYou();
    const refreshParent = document.querySelector('.refresh-parent');
    refreshParent.dispatchEvent(new Event('click'));
    expect(trackSubscriptionCause).toHaveBeenCalledTimes(1);
    expect(window.opener.location.reload).toHaveBeenCalled();
  });

  it('will reload page on return button click if window opener defined and return button found within dom', () => {
    window.opener = {
      location: {
        reload: jest.fn(),
      },
    };
    jest.spyOn(window, 'close').mockImplementation(() => {});
    document.body.innerHTML = `<button class="return-btn"></button>`;
    thankYou();
    const returnButton = document.querySelector('.return-btn');
    returnButton.dispatchEvent(new Event('click'));
    expect(window.opener.location.reload).toHaveBeenCalled();
    expect(window.close).toHaveBeenCalled();
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.getItem).toHaveBeenCalledWith('returnUrl');
    expect(window.localStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('returnUrl');
  });
});

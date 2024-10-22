/**
 * @jest-environment jsdom
 */

import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { CLASS_HYDRATE_ROOT } from '#app/constants/classNames';
import { ID_SUBSCRIPTION_CONSENT_PAGE } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import SubscribeConsentContent from '#app/component/pages/SubscribeConsent/SubscribeConsentContent';

import subscribeConsent from '../subscribe-consent';

jest.mock('@indy/archipelago/bootstrap');

describe('subscribeConsent()', () => {
  it('will hydrate the subscribe consent page correctly', () => {
    const mockElement = document.createElement('div');
    mockElement.id = CLASS_HYDRATE_ROOT;
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);
    subscribeConsent();
    expect(document.getElementById).toHaveBeenCalledWith(
      ID_SUBSCRIPTION_CONSENT_PAGE,
    );
    expect(hydrateComponent).toHaveBeenCalledWith(
      mockElement,
      { SubscribeConsentContent },
      { Wrapper },
    );
  });
});

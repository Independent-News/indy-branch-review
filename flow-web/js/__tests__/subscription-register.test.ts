/**
 * @jest-environment jsdom
 */

import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import {
  CUSTOM_EVENT_REGISTRATION_ERROR,
  CUSTOM_EVENT_REGISTRATION_SUCCESS,
} from '#app/constants/customEvents';
import {
  ID_FORM_RECEIVE_OFFER,
  SUBSCRIBE_REGISTER_FORM_ID,
} from '#app/constants/ids';

import { dispatchRegistrationFailed } from '../modules/custom-event-dispatchers';
import {
  getDigitalDataByKeys,
  storeDigitalData,
} from '../modules/digital-data/digital-data-session';
import { getParametersByNames } from '../modules/util';
import subscriptionRegister from '../subscription-register';
import initCrossDomainLogin from '../utils/initCrossDomainLogin';
import { redirect } from '../utils/redirect';

jest.mock('@indy/archipelago/bootstrap');
jest.mock('../modules/custom-event-dispatchers');
jest.mock('../modules/digital-data/digital-data-session');
jest.mock('../modules/util');
jest.mock('../utils/initCrossDomainLogin');
jest.mock('#app/component/library/Hydration/IndyClientIslandWrapper', () => ({
  __esModule: true,
  default: 'Wrapper',
}));
jest.mock('#app/component/library/Register/SubscribeRegister', () => ({
  __esModule: true,
  default: 'SubscribeRegisterForm',
}));
jest.mock('../utils/redirect');

describe('subscription-register script', () => {
  beforeAll(() => {
    window.hj = jest.fn();
  });

  beforeEach(() => {
    // subscriptionRegister executes immediately when imported so we must clear in before each so all mocks aren't called twice as much in below tests
    jest.resetAllMocks();
    jest.clearAllMocks();
    jest.spyOn(document.body, 'addEventListener');
    document.body.innerHTML = `
      <input type="checkbox" id="${ID_FORM_RECEIVE_OFFER}" checked>
      <div id="${SUBSCRIBE_REGISTER_FORM_ID}"></div>
      `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  afterAll(() => {
    jest.restoreAllMocks();
    delete window.hj;
  });

  it('will collect tracking data, identify opt-in checkbox, init cross domain login and hydrate register form on execution', async () => {
    subscriptionRegister();
    expect(initCrossDomainLogin).toHaveBeenCalledTimes(1);
    expect(getDigitalDataByKeys).toHaveBeenCalledTimes(1);
    expect(getDigitalDataByKeys).toHaveBeenCalledWith(TRACKING_PAYMENT_KEYS);
    expect(hydrateComponent).toHaveBeenCalledTimes(1);
    expect((hydrateComponent as jest.Mock).mock.calls.at(0))
      .toMatchInlineSnapshot(`
      [
        <div
          id="subscribe-register-form"
        />,
        {
          "SubscribeRegister": "SubscribeRegisterForm",
        },
        {
          "Wrapper": "Wrapper",
        },
      ]
    `);
  });

  it('will setup correct registration error event listener on body which will track failure correctly', async () => {
    subscriptionRegister();
    expect(document.body.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.body.addEventListener).toHaveBeenNthCalledWith(
      1,
      CUSTOM_EVENT_REGISTRATION_ERROR,
      expect.any(Function),
    );
    expect(window.hj).not.toHaveBeenCalled();
    expect(dispatchRegistrationFailed).not.toHaveBeenCalled();
    document.body.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT_REGISTRATION_ERROR),
    );
    expect(window.hj).toHaveBeenCalled();
    expect(window.hj).toHaveBeenCalledWith('formSubmitFailed');
    expect(dispatchRegistrationFailed).toHaveBeenCalled();
  });

  it('will setup correct registration success event listener on body which will track success and redirect to payment page correctly', async () => {
    (getParametersByNames as jest.Mock).mockReturnValue([
      { key: 'offerId', value: 'test-offer-id' },
    ]);
    (getDigitalDataByKeys as jest.Mock).mockReturnValue({});
    subscriptionRegister();
    expect(document.body.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.body.addEventListener).toHaveBeenNthCalledWith(
      2,
      CUSTOM_EVENT_REGISTRATION_SUCCESS,
      expect.any(Function),
    );
    expect(window.hj).not.toHaveBeenCalled();
    expect(getParametersByNames).not.toHaveBeenCalled();
    expect(storeDigitalData).not.toHaveBeenCalled();
    document.body.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT_REGISTRATION_SUCCESS),
    );
    expect(window.hj).toHaveBeenCalled();
    expect(window.hj).toHaveBeenCalledWith('formSubmitSuccessful');
    expect(getParametersByNames).toHaveBeenCalled();
    expect(getParametersByNames).toHaveBeenCalledWith(['offerId', 'termId']);
    expect(storeDigitalData).toHaveBeenCalled();
    expect(storeDigitalData).toHaveBeenCalledWith({
      marketing_opt_in: true,
    });
    expect(dispatchRegistrationFailed).not.toHaveBeenCalled();
    expect(redirect).toHaveBeenCalledWith(
      '/subscribe/payment?offerId=test-offer-id',
    );
  });
});

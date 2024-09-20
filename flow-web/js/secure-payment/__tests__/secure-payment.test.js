import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';
import {
  STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
  STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
  STRIPE_ELEMENTS_SUCCESS_TERM_ID,
} from '#app/constants/piano';

import { getDigitalDataByKeys } from '../../modules/digital-data/digital-data-session';
import { getParametersByNames } from '../../modules/util';
import { addPianoHandlers } from '../add-piano-handlers';

jest.mock('../../modules/digital-data/digital-data-session');
jest.mock('../../modules/util');
jest.mock('../add-piano-handlers');

describe('secure-payment script', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should setup Piano event handlers with relevant extracted Piano query parameters and tracking data', async () => {
    getParametersByNames.mockReturnValueOnce([
      { value: 'some-offer-id' },
      { value: 'some-term-id' },
      { value: 'some-stripe-success-term-id' },
    ]);
    getDigitalDataByKeys.mockReturnValueOnce('some-tracking-data');
    await import('../secure-payment');
    expect(getParametersByNames).toHaveBeenCalledTimes(1);
    expect(getParametersByNames).toHaveBeenCalledWith([
      STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
      STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
      STRIPE_ELEMENTS_SUCCESS_TERM_ID,
    ]);
    expect(getDigitalDataByKeys).toHaveBeenCalledTimes(1);
    expect(getDigitalDataByKeys).toHaveBeenCalledWith(TRACKING_PAYMENT_KEYS);
    expect(addPianoHandlers).toHaveBeenCalledTimes(1);
    expect(addPianoHandlers).toHaveBeenCalledWith(
      'some-offer-id',
      'some-term-id',
      'some-tracking-data',
      true,
    );
  });
});

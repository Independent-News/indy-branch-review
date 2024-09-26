import {
  FORM_FIELD_EMAIL,
  FORM_FIELD_RECAPTURE,
} from '#app/constants/formFieldNames';

import { buildRequestBody } from '../buildRequestBody';

const TEST_EMAIL = 'rich@dev.com';
const NEWSLETTER_A = 'newsletter-a';
const NEWSLETTER_B = 'newsletter-b';
const GREPTCHA_TOKEN = 'token';

describe('buildRequestBody()', () => {
  describe('when `offers` is false', () => {
    it('should return request body', () => {
      const state = {
        data: {
          offers: false,
          newsletters: {
            intransit: [NEWSLETTER_A, NEWSLETTER_B],
          },
          [FORM_FIELD_EMAIL]: {
            value: TEST_EMAIL,
          },
        },
      };

      expect(buildRequestBody(state, GREPTCHA_TOKEN)).toEqual({
        [FORM_FIELD_EMAIL]: TEST_EMAIL,
        newsletters: [NEWSLETTER_A, NEWSLETTER_B],
        [FORM_FIELD_RECAPTURE]: GREPTCHA_TOKEN,
        regSourceMethod: 'Newsletters%20Page',
      });
    });
  });

  describe('when `offers` is true', () => {
    let state;
    let requestBody;

    beforeEach(() => {
      state = {
        data: {
          offers: true,
          newsletters: {
            intransit: [NEWSLETTER_A, NEWSLETTER_B],
          },
          [FORM_FIELD_EMAIL]: {
            value: TEST_EMAIL,
          },
        },
      };

      requestBody = buildRequestBody(state, GREPTCHA_TOKEN);
    });

    it('should return request body with `receiveIndyOffers`', () => {
      expect(requestBody).toEqual({
        [FORM_FIELD_EMAIL]: TEST_EMAIL,
        newsletters: [NEWSLETTER_A, NEWSLETTER_B, 'receiveIndyOffers'],
        [FORM_FIELD_RECAPTURE]: GREPTCHA_TOKEN,
        regSourceMethod: 'Newsletters%20Page',
      });
    });

    it('should NOT change original `intransit` array', () => {
      expect(state.data.newsletters.intransit).toEqual([
        NEWSLETTER_A,
        NEWSLETTER_B,
      ]);
    });
  });
});

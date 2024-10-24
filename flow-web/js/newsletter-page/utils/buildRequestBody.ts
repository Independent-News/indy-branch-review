import {
  FORM_FIELD_EMAIL,
  FORM_FIELD_RECAPTURE,
} from '#app/constants/formFieldNames';
import { NEWSLETTERS_PAGE_RSM } from '#app/constants/regSourceMethods';

import { FormState } from '../FormState';

export const buildRequestBody = (state: FormState, token: string) => {
  const newsletters = [...state.data.newsletters.intransit];

  if (state.data?.offers) {
    newsletters.push('receiveIndyOffers');
  }

  return {
    [FORM_FIELD_EMAIL]: state.data?.[FORM_FIELD_EMAIL]?.value || '',
    newsletters,
    [FORM_FIELD_RECAPTURE]: token,
    regSourceMethod: encodeURIComponent(NEWSLETTERS_PAGE_RSM),
  };
};

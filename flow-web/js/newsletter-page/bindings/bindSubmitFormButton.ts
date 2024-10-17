import { dispatchCustomEvent } from '../../utils/dispatchCustomEvent';
import { FormState } from '../FormState';
import { SUBMIT_BUTTON_ID } from '../constants';
import { postNewsletters } from '../postNewsletters';

import { buildNewsletterTrackingArray } from './utils/buildNewsletterTrackingArray';

const TRACKING_EVENT = 'newsletter_page_signup_button_click';

export const bindSubmitFormButton = (state: FormState) => {
  const submitFormButton = document.getElementById(SUBMIT_BUTTON_ID);

  submitFormButton?.addEventListener('click', () => {
    dispatchCustomEvent(TRACKING_EVENT, {
      newsletters: buildNewsletterTrackingArray([
        ...state.data.newsletters.selected,
      ]),
    });

    postNewsletters(state);
  });
};

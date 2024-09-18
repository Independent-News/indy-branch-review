import { FormState } from '../FormState';
import { OFFERS_CHECKBOX_ID } from '../constants';

export const bindOffersCheckbox = (state: FormState) => {
  const offersCheckbox = document.getElementById(OFFERS_CHECKBOX_ID);

  offersCheckbox?.addEventListener('change', (event) => {
    if ((event.target as HTMLInputElement)?.checked) {
      state.selectOffers();
    } else {
      state.deselectOffers();
    }
  });
};

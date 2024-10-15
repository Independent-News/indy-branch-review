import { EVENT_PIANO_READY } from '#app/constants/customEvents';
import {
  ID_PIANO_SUBSCRIPTION_REACTIVATION_BUTTON,
  ID_PIANO_SUBSCRIPTION_REACTIVATION_CONTAINER,
} from '#app/constants/ids';

const containerElement = document.getElementById(
  ID_PIANO_SUBSCRIPTION_REACTIVATION_CONTAINER,
);

const buttonElement = document.getElementById(
  ID_PIANO_SUBSCRIPTION_REACTIVATION_BUTTON,
);

const { offerId = '', termId = '' } = containerElement?.dataset || {};

const tp = window.tp || [];
window.tp = tp;

document.addEventListener(EVENT_PIANO_READY, () => {
  buttonElement?.addEventListener('click', () => {
    if (Array.isArray(window.tp)) {
      return;
    }
    window.tp.offer.show({
      offerId,
      displayMode: 'inline',
      containerSelector: `#${ID_PIANO_SUBSCRIPTION_REACTIVATION_CONTAINER}`,
      termId,
      showCloseButton: false,
      complete: () => {},
    });
  });
});

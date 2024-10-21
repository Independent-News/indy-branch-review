import { loadJS } from '../modules/util';

import { FormState } from './FormState';
import { bindEmailInputField } from './bindings/bindEmailInputField';
import { bindOffersCheckbox } from './bindings/bindOffersCheckbox';
import { bindSubmitFormButton } from './bindings/bindSubmitFormButton';
import { bindSuccessPopup } from './bindings/bindSuccessPopup';
import { watchButtonText } from './watchers/watchButtonText';
import { watchEmail } from './watchers/watchEmail';
import { watchErrorMessage } from './watchers/watchErrorMessage';
import { watchFormValidity } from './watchers/watchFormValidity';
import { watchNewsletters } from './watchers/watchNewsletters';
import { watchShowInputWidget } from './watchers/watchShowInputWidget';
import { watchSubmittingRequest } from './watchers/watchSubmittingRequest';
import { watchSuccessMessage } from './watchers/watchSuccessMessage';

function init() {
  const state = new FormState();

  bindEmailInputField(state);
  bindOffersCheckbox(state);
  bindSubmitFormButton(state);
  bindSuccessPopup(state);

  watchButtonText(state);
  watchEmail(state);
  watchErrorMessage(state);
  watchFormValidity(state);
  watchNewsletters(state);
  watchShowInputWidget(state);
  watchSubmittingRequest(state);
  watchSuccessMessage(state);
}

loadJS(
  `https://www.google.com/recaptcha/api.js?render=${window.JSGlobals.recaptureV3Key}`,
).then(init);

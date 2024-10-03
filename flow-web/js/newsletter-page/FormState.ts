import { FORM_ERROR_EMAIL_INVALID } from '#app/constants/formErrorMessages';
import { FORM_FIELD_EMAIL } from '#app/constants/formFieldNames';

import { buildMessageText } from './utils/buildMessageText';
import { buildSuccessMessageText } from './utils/buildSuccessMessageText';
import { State } from './utils/state';

export const EMAIL_ERROR_MESSAGE = FORM_ERROR_EMAIL_INVALID;

export class FormState extends State {
  constructor() {
    super({
      valid: false,
      offers: false,
      buttonText: '',
      showInputWidget: false,
      successMessage: '',
      submittingRequest: false,
      errorMessage: '',
      newsletters: {
        selected: [],
        intransit: [],
        subscribed: [],
      },
      [FORM_FIELD_EMAIL]: {
        valid: false,
        dirty: false,
        touched: false,
        value: '',
      },
    });
  }

  startRequest() {
    this.data = {
      ...this.data,
      submittingRequest: true,
      newsletters: {
        ...this.data.newsletters,
        selected: [],
        intransit: this.data.newsletters.selected,
      },
    };

    this.digest();
  }

  onSuccess() {
    let showInputWidget = true;

    // close the input widget if no newsletters are selected
    if (this.data.newsletters.selected.length === 0) {
      showInputWidget = false;
    }

    this.data = {
      ...this.data,
      showInputWidget,
      successMessage: buildSuccessMessageText(
        this.data.newsletters.intransit.length,
      ),
      newsletters: {
        ...this.data.newsletters,
        intransit: [],
        // add intransit newsletters to subscribed array
        subscribed: [
          ...this.data.newsletters.subscribed,
          ...this.data.newsletters.intransit,
        ],
      },
    };

    this.digest();
  }

  onError(errorMessage: string) {
    // put intransit newsletters back into selected array
    const selected = [
      ...this.data.newsletters.selected,
      ...this.data.newsletters.intransit,
    ];

    this.data = {
      ...this.data,
      buttonText: buildMessageText(selected.length),
      errorMessage,
      newsletters: {
        ...this.data.newsletters,
        selected,
        intransit: [],
      },
    };

    this.digest();
  }

  endRequest() {
    this.data = {
      ...this.data,
      submittingRequest: false,
    };

    this.digest();
  }

  updateSelectedNewsletters(key: string, selected: boolean) {
    let selectedNewsletters = [];
    let showInputWidget = this.data.showInputWidget;

    if (selected) {
      selectedNewsletters = [...this.data.newsletters.selected, key];
    } else {
      selectedNewsletters = this.data.newsletters.selected.filter(
        (ns: string) => ns !== key,
      );
    }

    const valid =
      selectedNewsletters.length > 0 && this.data[FORM_FIELD_EMAIL].valid;

    // if no newsletters are selected, we want to close the input widget
    if (selectedNewsletters.length > 0) {
      showInputWidget = true;
    } else {
      showInputWidget = false;
    }

    this.data = {
      ...this.data,
      showInputWidget,
      buttonText: buildMessageText(selectedNewsletters.length),
      newsletters: {
        ...this.data.newsletters,
        selected: selectedNewsletters,
      },
      valid,
    };

    this.digest();
  }

  markEmailFieldTouched() {
    this.data = {
      ...this.data,
      [FORM_FIELD_EMAIL]: {
        ...this.data[FORM_FIELD_EMAIL],
        touched: true,
      },
    };

    this.digest();
  }

  markEmailFieldDirty() {
    this.data = {
      ...this.data,
      // need to set this here too since change event occurs after input event
      errorMessage: !this.data[FORM_FIELD_EMAIL].valid
        ? EMAIL_ERROR_MESSAGE
        : '',
      [FORM_FIELD_EMAIL]: {
        ...this.data[FORM_FIELD_EMAIL],
        dirty: true,
      },
    };

    this.digest();
  }

  setEmail(value: string, valid: boolean) {
    const formIsValid = valid && this.data.newsletters.selected.length > 0;

    this.data = {
      ...this.data,
      errorMessage:
        !valid && this.data[FORM_FIELD_EMAIL].dirty ? EMAIL_ERROR_MESSAGE : '',
      valid: formIsValid,
      [FORM_FIELD_EMAIL]: {
        ...this.data[FORM_FIELD_EMAIL],
        value,
        valid,
      },
    };

    this.digest();
  }

  hideSuccessMessage() {
    this.data.successMessage = '';

    this.digest();
  }

  selectOffers() {
    this.data = {
      ...this.data,
      offers: true,
    };

    this.digest();
  }

  deselectOffers() {
    this.data = {
      ...this.data,
      offers: false,
    };

    this.digest();
  }
}

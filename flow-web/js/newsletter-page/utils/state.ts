import { FORM_FIELD_EMAIL } from '#app/constants/formFieldNames';

type Newsletters = string[];

interface StateData {
  valid: boolean;
  offers: boolean;
  buttonText: string;
  showInputWidget: boolean;
  successMessage: string;
  submittingRequest: boolean;
  errorMessage: string;
  newsletters: {
    selected: Newsletters;
    intransit: Newsletters;
    subscribed: Newsletters;
  };
  [FORM_FIELD_EMAIL]: {
    valid: boolean;
    dirty: boolean;
    touched: boolean;
    value: string;
  };
}

type Watcher<T> = (data: StateData) => T;
type Listener<T> = (newValue: T, oldValue: T | null, data: StateData) => void;

/*
 *  A simple utility class for managing state and DOM updates
 *  Using this, it is possible to keep these tasks separate
 *
 *  This is an 'abstract' class which should be extended
 */

/*
 *  watchExpression: a function that takes the data model and returns the value of one of the properties within it.
 *  listener: runs when the value returned from the watch expression has changed. Listener functions should normally update the DOM with the new data.
 *  It is important not to update the model from within a listener as this could result in infinite loops.
 */

function createWatcher<T>(
  watchExpression: Watcher<T>,
  listener: Listener<T>,
  data: StateData,
) {
  let value = watchExpression(data);
  listener(value, null, data);

  return (data: StateData) => {
    const newValue = watchExpression(data);

    if (newValue !== value) {
      listener(newValue, value, data);
      value = newValue;
    }
  };
}

export class State {
  initialState;
  data;
  watchers: Watcher<unknown>[];
  submittingRequest?: boolean;

  constructor(initial: StateData) {
    this.initialState = initial;

    this.data = {
      ...initial,
    };

    this.watchers = [];
  }

  watch<T>(watcher: Watcher<T>, listener: Listener<T>) {
    this.watchers.push(createWatcher(watcher, listener, this.data));
  }

  digest() {
    this.watchers.forEach((watcher) => {
      watcher(this.data);
    });
  }
}

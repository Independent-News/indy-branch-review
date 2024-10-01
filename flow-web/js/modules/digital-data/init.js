import pipe from '#app/util/pipe';

import setDigitalDataFromBrowser from './digital-data-browser';
import setDigitalDataFromServer from './digital-data-server';
import setDigitalDataFromSession from './digital-data-session';

export default () => {
  window.digitalData = pipe(
    setDigitalDataFromServer,
    setDigitalDataFromBrowser,
    setDigitalDataFromSession,
  )();
};

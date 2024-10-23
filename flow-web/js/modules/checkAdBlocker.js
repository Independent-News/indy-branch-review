import { dispatchAdBlockDetected } from './custom-event-dispatchers';

export default async () => {
  // try to load dotmetrics - if this is blocked we know we have an ad-blocker running
  try {
    await fetch('https://www.npttech.com/advertising.js');
  } catch {
    dispatchAdBlockDetected();
    return true;
  }
  return false;
};

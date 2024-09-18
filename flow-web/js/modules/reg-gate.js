import { EVENT_REG_WALL_LOADED } from '#app/constants/customEvents';

export default () =>
  new Promise((resolve) => {
    let resolved = false; // prevent multiple resolve
    const resolveOnce = (value) => {
      if (!resolved) {
        resolve(value);
        resolved = true;
      }
    };

    // setup a timeout in-case piano does not respond
    const timeoutId = setTimeout(() => {
      console.warn(
        'Piano register wall experience failed to execute within 2 seconds, continuing with hasRegGate = false',
      );
      resolveOnce(false);
    }, 2000);

    // piano experience execution event called after experiences have been executed
    // if reg wall loaded event not fired within experience - we know reg wall isn't visible
    window.tp.push([
      'addHandler',
      'experienceExecute',
      async () => {
        clearTimeout(timeoutId);
        resolveOnce(false);
      },
    ]);

    document.body.addEventListener(EVENT_REG_WALL_LOADED, () => {
      resolveOnce(true);
      clearTimeout(timeoutId);
    });
  });

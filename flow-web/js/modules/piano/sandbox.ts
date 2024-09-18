import { getPianoGlobal } from './shared';

import type { PianoTemplate } from '#types/piano';

export const onTemplateShow = (template: PianoTemplate) => {
  // close any modals if we are running the mock environment
  // so they don't interfere with our automated tests
  if (window.JSGlobals.MOCK_ENV && template.displayMode === 'modal') {
    const pianoGlobal = getPianoGlobal();
    if (Array.isArray(pianoGlobal)) {
      return;
    }
    pianoGlobal.template.close();
  }
};

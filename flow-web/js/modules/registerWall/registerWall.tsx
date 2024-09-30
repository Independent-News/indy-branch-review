import { createRoot } from 'react-dom/client';

import { EVENT_REG_WALL_LOADED } from '#app/constants/customEvents';
import { ID_PIANO_REGISTER_WALL } from '#app/constants/ids';
import { CLASS_LIMITED_ACCESS_NON_PREMIUM } from '#app/constants/piano';
import * as registerWallVariants from '#app/constants/registerWallVariants';

import initReact from '#app/public/js/utils/initReact';

import RegisterWallRenderer from '#app/component/library/Article/RegisterWall/RegisterWallRenderer';

import { log } from '../log';

window.regWall = {
  // check ./constants.js for keys
  async initRegWall(key) {
    document.body.dispatchEvent(new CustomEvent(EVENT_REG_WALL_LOADED));
    await initReact();
    this.render(key);
  },
  render: (key) => {
    const domContainer = document.getElementById(ID_PIANO_REGISTER_WALL);
    if (domContainer) {
      const root = createRoot(domContainer);
      const regSourceSection = domContainer.dataset.regSourceSection;
      const isValidRegWallKey =
        Object.values(registerWallVariants).includes(key);
      if (isValidRegWallKey) {
        root.render(
          <RegisterWallRenderer
            registerWallKey={key}
            regSourceSection={regSourceSection}
          />,
        );
      } else {
        log('Warning: Invalid register wall key.');
      }
    }
  },
  initPianoTemplateRegWall: (templateId: string) => {
    document.body.dispatchEvent(new CustomEvent(EVENT_REG_WALL_LOADED));
    document
      .getElementById('main')
      ?.classList.add(CLASS_LIMITED_ACCESS_NON_PREMIUM);
    if (Array.isArray(window.tp)) {
      return;
    }
    window.tp.template.show({
      templateId,
      displayMode: 'inline',
      containerSelector: `#${ID_PIANO_REGISTER_WALL}`,
    });
  },
};

import { ArchipelagoProvider } from '#app/context/ArchipelagoProvider';

import * as hydratableComponents from '#app/component/hydratableComponents.js';

import hydrateComponentList from './hydrate/hydrateComponentList';
import initPageStateUpdateHandlers from './modules/page-state-update-handlers';

const run = () => {
  initPageStateUpdateHandlers();

  hydrateComponentList(hydratableComponents, ArchipelagoProvider);
};

run();

export default run;

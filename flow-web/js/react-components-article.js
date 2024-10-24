import { ArchipelagoProvider } from '#app/context/ArchipelagoProvider';

import * as hydratableComponents from '#app/component/hydratableArticleComponents.js';

import hydrateComponentList from './hydrate/hydrateComponentList';

hydrateComponentList(hydratableComponents, ArchipelagoProvider);

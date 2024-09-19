import { StoriesJSON } from '../storyshots.types';
/**
 * Fetches the stories from the storybook build.
 * @todo fetch index.json from running storybook server when required;
 * predicating the storyshot tests on a fetch request seems like a bad idea and
 * yet there is no way other than to make a fetch request before running the
 * tests against a running Storybook instance i.e. not a static build that is
 * being served.
 */
declare function getStoriesJSON(): Promise<StoriesJSON>;
export default getStoriesJSON;
//# sourceMappingURL=getStoriesJSON.d.ts.map
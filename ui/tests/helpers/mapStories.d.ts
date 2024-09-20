import { StoriesJSON, StoriesMapped } from '../storyshots.types';
/**
 * Converts a flat array of stories into a nested object, organised first by
 * component and then by variant.
 * @param stories Entries property of the Storybook manifest
 * @returns Stories remapped into a nested object for ease of iteration
 */
declare function mapStories(stories: StoriesJSON): StoriesMapped;
export default mapStories;
//# sourceMappingURL=mapStories.d.ts.map
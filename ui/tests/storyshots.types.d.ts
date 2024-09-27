export type StoryContext = {
    id: string;
    title: string;
    name: string;
    importPath: string;
    tags: string[];
    type: string;
};
export type StoriesJSON = {
    [key: string]: StoryContext;
};
export type StoriesMapped = {
    [component: string]: {
        [variant: string]: StoryContext;
    };
};
export type ViewportDimension = {
    width: number;
    height: number;
};
export type ViewportName = 'mobile' | 'tablet' | 'laptop' | 'desktop';
//# sourceMappingURL=storyshots.types.d.ts.map
import { IconButtonProps } from './IconButton.types';
import { StoryObj } from '@storybook/react';
declare const _default: {
    title: string;
    component: import('react').FC<IconButtonProps>;
    render: ({ size, ...rest }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
export declare const Default: {
    args: {
        size: string;
        title: string;
    };
};
/**
 * Uses the real-estate of the the icon within while providing the minimum click
 * area for accessibility.
 *
 * Be careful when using this as it has negative margins which can cause the
 * click areas to overlap.
 *
 * This is best understood with 'outlines' turned on.
 */
export declare const Cosy: StoryObj;
//# sourceMappingURL=IconButton.stories.d.ts.map
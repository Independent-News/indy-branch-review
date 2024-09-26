import { Meta, StoryObj } from '@storybook/react';
import { default as GlobalNavBar } from '../GlobalNavBar';
declare const meta: Meta<typeof GlobalNavBar>;
export default meta;
type DefaultStory = StoryObj<typeof GlobalNavBar>;
/**
 * The `<GlobalNavBar />` exists at the very top of the page and and is used to
 * house site-wide actions and links.
 */
export declare const Default: DefaultStory;
/**
 * `<Links />` and `<CTAs />` can be used to add custom links.
 */
export declare const WithLinksCTA: DefaultStory;
/**
 * `<Links />` and `<CTAs />` can be themed.
 */
export declare const WithThemedCTA: DefaultStory;
//# sourceMappingURL=GlobalNavBar.stories.d.ts.map
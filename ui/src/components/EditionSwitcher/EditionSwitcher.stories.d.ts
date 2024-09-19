import { Meta, StoryObj } from '@storybook/react';
import { default as EditionSwitcherDrawer } from './Drawer';
import { default as EditionSwitcherHeader } from './Header';
declare const meta: Meta<typeof EditionSwitcherHeader>;
export default meta;
type DrawerStory = StoryObj<typeof EditionSwitcherDrawer>;
type HeaderStory = StoryObj<typeof EditionSwitcherHeader>;
/**
 * The version used in the `<GlobalNavBar>` is a simple dropdown menu which
 * overlays the content beneath it.
 */
export declare const Header: HeaderStory;
/**
 * The version used in the drawer menu moves content around it when triggered.
 * It also contains an extra label indicating the purpose of the dropdown.
 */
export declare const Drawer: DrawerStory;
//# sourceMappingURL=EditionSwitcher.stories.d.ts.map
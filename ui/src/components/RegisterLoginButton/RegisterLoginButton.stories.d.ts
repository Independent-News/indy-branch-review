import { Meta, StoryObj } from '@storybook/react';
import { default as RegisterLoginButton } from '../RegisterLoginButton';
declare const meta: Meta<typeof RegisterLoginButton>;
export default meta;
type Story = StoryObj<typeof RegisterLoginButton>;
export declare const Default: Story;
/**
 * When a user is "registered" or a "subscriber" then an optional `<CTA />` can
 * be displayed.
 */
export declare const WithCTA: Story;
/**
 * When a user is "registered", their status can be displayed alongside their
 * name.
 */
export declare const RegisteredUser: Story;
/**
 * When a user is a "subscriber", the button will be styled differently.
 */
export declare const Subscriber: Story;
/**
 * The button will grow to fit the height of whatever it is that it is placed
 * in. Copy within the button will be truncated when there is not enough space.
 */
export declare const Responsive: Story;
//# sourceMappingURL=RegisterLoginButton.stories.d.ts.map
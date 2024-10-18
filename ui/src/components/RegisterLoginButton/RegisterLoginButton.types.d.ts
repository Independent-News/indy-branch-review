import { CTA } from './RegisterLoginButton.styles';
export interface RegisterLoginButtonProps {
    className?: string;
    id?: string;
    /** The main text of the button */
    children: Children;
    /** A subtext to the main button label */
    status?: string;
    /** A href for the button to follow */
    href: string;
    /** Whether the button is representing a user that is a registered */
    isRegistered?: boolean;
    /** Whether the button is representing a user that is a subscriber */
    isSubscriber?: boolean;
    /** An optional `<CTA />` to sit alongside the main button. */
    cta?: React.ReactElement<typeof CTA>;
}
export interface WrapperProps {
    /** Whether the button is representing a user that is a registered */
    $isRegistered: boolean;
    /** Whether the button is representing a user that is a subscriber */
    $isSubscriber: boolean;
}
//# sourceMappingURL=RegisterLoginButton.types.d.ts.map
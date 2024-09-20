import { ReactNode, MouseEventHandler } from 'react';
import { DefaultTheme } from 'styled-components';
import { BUTTON_AS_ANCHOR, BUTTON_AS_BUTTON, BUTTON_SIZE_BASE, BUTTON_SIZE_LARGE, BUTTON_SIZE_SMALL, BUTTON_TYPE_BUTTON, BUTTON_TYPE_RESET, BUTTON_TYPE_SUBMIT, BUTTON_VARIANT_PRIMARY, BUTTON_VARIANT_SECONDARY, BUTTON_VARIANT_TERTIARY, BUTTON_VARIANT_PRIMARY_UNCAP } from './Button.constants';
type ButtonAs = typeof BUTTON_AS_BUTTON | typeof BUTTON_AS_ANCHOR;
type ButtonVariants = typeof BUTTON_VARIANT_PRIMARY | typeof BUTTON_VARIANT_SECONDARY | typeof BUTTON_VARIANT_TERTIARY | typeof BUTTON_VARIANT_PRIMARY_UNCAP;
type ButtonSizes = typeof BUTTON_SIZE_SMALL | typeof BUTTON_SIZE_BASE | typeof BUTTON_SIZE_LARGE;
type ButtonTypes = typeof BUTTON_TYPE_BUTTON | typeof BUTTON_TYPE_SUBMIT | typeof BUTTON_TYPE_RESET;
export type Target = '_blank' | '_self' | '_parent' | '_top';
export type Rel = 'alternate' | 'external' | 'nofollow' | 'noopener' | 'noreferrer';
type CommonProps = {
    children: Children;
    forwardedAs?: ButtonAs;
    id?: string;
    className?: string;
    disabled?: boolean;
    role?: string;
    title?: string;
    tabIndex?: number;
    icon?: ReactNode;
    size?: ButtonSizes;
    variant?: ButtonVariants;
    [key: `data-${string}`]: string | undefined;
    [key: `aria-${string}`]: string | undefined;
};
export type ButtonTypeProps = CommonProps & {
    name?: string;
    value?: string;
    type?: ButtonTypes;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    as?: typeof BUTTON_AS_BUTTON;
};
type LinkTypeProps = CommonProps & {
    href: string;
    target?: Target;
    rel?: Rel | `${Rel} ${Rel}`;
    isExternal?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    as: typeof BUTTON_AS_ANCHOR;
};
export type ButtonProps = ButtonTypeProps | LinkTypeProps;
export type ThemedButtonProps = ButtonTypeProps & {
    theme: DefaultTheme;
};
export type ThemedLinkProps = LinkTypeProps & {
    theme: DefaultTheme;
};
export type ThemedProps = ThemedButtonProps | ThemedLinkProps;
type StyledComponentProps = {
    $variant?: ButtonVariants;
    $size?: ButtonSizes;
};
type SCButtonProps = StyledComponentProps & ButtonTypeProps;
type SCLinkProps = StyledComponentProps & LinkTypeProps;
export type StyledButtonProps = SCButtonProps | SCLinkProps;
export {};
//# sourceMappingURL=Button.types.d.ts.map
export declare enum SocialMedia {
    FACEBOOK = "facebook",
    X = "x",
    WHATSAPP = "whatsapp",
    EMAIL = "email",
    TEST = "test"
}
export interface SocialShareButtonProps {
    type: SocialMedia;
    url: string;
    withThemeColors?: boolean;
    className?: string;
}
/** when withThemeColors is truthy,
 * all buttons have primary theme color
 */
export interface SocialShareButtonsProps {
    buttons: SocialShareButtonProps[];
    withThemeColors?: boolean;
    mobileOnlyButtons?: SocialMedia[];
}
//# sourceMappingURL=SocialShareButtons.types.d.ts.map
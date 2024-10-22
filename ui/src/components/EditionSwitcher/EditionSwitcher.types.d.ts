import { ReactNode } from 'react';
type EditionChoices = {
    /** URL of the edition */
    path: string;
    /** Two letter code for the data-edition property */
    locale: string;
    /** Text displayed in the dropdown link */
    title: string;
};
export interface EditionSwitcherProps {
    className?: string;
    /** The trigger element for the dropdown */
    trigger: ReactNode;
    /** Content to display in the dropdown*/
    children: Children;
}
export interface EditionSwitcherHeaderProps {
    className?: string;
    /** Which international version the user is currently viewing */
    currentEdition: string;
    /** Array containing each edition option */
    editionChoices: EditionChoices[];
}
export interface EditionSwitcherDrawerProps extends EditionSwitcherHeaderProps {
    /** Text to appear between the label and icon within the trigger */
    changeText?: string;
}
export interface TriggerProps {
    className?: string;
    /** The text to display within the trigger */
    label: string;
    /** Text to appear between the label and icon within the trigger */
    subLabel?: string;
}
export {};
//# sourceMappingURL=EditionSwitcher.types.d.ts.map
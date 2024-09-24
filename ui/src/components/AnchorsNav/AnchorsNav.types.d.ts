import { ReactNode, MouseEvent } from 'react';
export type Anchor = {
    id: string;
    title: string;
};
interface BaseProps {
    /** The id of the dropdown */
    id: string;
    /** An array of anchor objects */
    anchors: Anchor[];
    /** A boolean indicating if the dropdown menu is currently open */
    isOpen: boolean;
    /** A function that handles dropdown interactions */
    onInteract: (isOpen: boolean) => void;
    /** An onClick callback to add to each of the links */
    onLinkClick: (e: MouseEvent<HTMLAnchorElement>) => void;
    /** An onClick callback to add to the dropdown */
    onClickOutside: () => void;
    className?: string;
}
export interface AnchorsNavProps extends BaseProps {
    /** The selected anchor  */
    selectedAnchor: Anchor;
    /** An image to display alongside the dropdown */
    logo?: ReactNode;
    /** The width of the image */
    logoWidth?: number;
    /** An optional label to add to the dropdown trigger */
    label?: string;
}
export interface AnchorsNavContentProps extends BaseProps {
    /** Id of the selected anchor  */
    selectedId: string;
    /** The dropdown trigger */
    trigger: ReactNode;
}
export interface AnchorsNavTriggerProps {
    label?: string;
    title?: string;
}
export {};
//# sourceMappingURL=AnchorsNav.types.d.ts.map
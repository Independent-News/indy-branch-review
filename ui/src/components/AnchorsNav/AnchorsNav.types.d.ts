import { ReactNode, MouseEvent, KeyboardEvent, RefObject } from 'react';
export type Anchor = {
    id: string;
    title: string;
};
interface BaseProps {
    className?: string;
    /** The id of the dropdown */
    id: string;
    /** An array of anchor objects */
    anchors: Anchor[];
    /** A boolean indicating if the dropdown menu is currently open */
    isOpen: boolean;
    /** A ref to the dropdown trigger */
    triggerRef: RefObject<HTMLDivElement>;
    /** A boolean indicating if the dropdown trigger is disabled */
    disabled: boolean;
    /** An onClick callback to add to the dropdown */
    onClickOutside: () => void;
    /** A function that handles dropdown interactions */
    onInteract?: (isOpen: boolean) => void;
    /** A function that handles arrow down interactions */
    onArrowDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
    /** An onClick callback to add to each of the links */
    onLinkClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
    /** An onKeyDown callback to add to each of the links */
    onLinkKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>, trigger?: HTMLDivElement) => void;
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
export interface AnchorsNavListItemProps {
    id: Anchor['id'];
    title: Anchor['title'];
    selectedId: Anchor['id'];
    tabIndex: number;
    trigger?: HTMLDivElement;
    onLinkClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
    onLinkKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>, trigger?: HTMLDivElement) => void;
}
export {};
//# sourceMappingURL=AnchorsNav.types.d.ts.map
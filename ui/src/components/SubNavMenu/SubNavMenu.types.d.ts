export interface ColumnsProps {
    title?: string;
    path?: string;
    id?: string;
}
export interface SubNavItemProps {
    title?: string;
    children?: Array<ColumnsProps>;
    path?: string;
    primaryIndex: number;
    id: string | undefined;
    activeIndex: number | undefined;
    setActiveIndex: (value: number | undefined) => void;
    primaryListOpen: boolean;
    activeItemIndex?: number;
}
export interface SubNavColumnsProps {
    columns: Array<ColumnsProps>;
    primaryIndex: number;
    isActive?: boolean;
}
type MenuItemProps = {
    title?: string;
    path?: string;
    children?: Array<ColumnsProps>;
    id?: string;
};
type MenuObjectProps = {
    menu: MenuItemProps[];
};
export interface SubNavMenuProps {
    className?: string;
    triggerText: string;
    id: string;
    menu: MenuItemProps[] | MenuObjectProps;
    activeItemIndex?: number;
}
export {};
//# sourceMappingURL=SubNavMenu.types.d.ts.map
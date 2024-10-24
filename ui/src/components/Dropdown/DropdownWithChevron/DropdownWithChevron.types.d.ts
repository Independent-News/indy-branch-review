import { IconProps } from '../../Icon';
export type DropdownProps = {
    id?: string;
    trigger: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    disabled?: boolean;
    onInteract?: VoidFunction;
};
type CustomTrigger = (chevron: ReactNode) => ReactNode;
export type DropdownWithChevronProps = Omit<DropdownProps, 'trigger'> & {
    trigger: ReactNode | CustomTrigger;
    iconSize?: IconProps['size'];
    isCosy?: boolean;
    divider?: ReactNode;
    onInteract?: VoidFunction;
};
export {};
//# sourceMappingURL=DropdownWithChevron.types.d.ts.map
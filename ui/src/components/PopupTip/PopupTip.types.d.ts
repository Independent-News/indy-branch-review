import { IconProps } from '../Icon';
export type PopupTipProps = {
    children: ReactNode;
    svg?: IconProps['svg'];
    /** The size of the icon to be used */
    size?: IconProps['size'];
};
export interface ControlledPopupTipProps extends PopupTipProps {
    className?: string;
    isOpen: boolean;
    id: string;
}
export type Position = {
    left: number;
    top: number;
};
//# sourceMappingURL=PopupTip.types.d.ts.map
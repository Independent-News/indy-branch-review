import { ButtonProps } from '../Button/Button.types';
import { IconProps, IconSizes } from '../Icon';
export type CommonButtonProps = Omit<ButtonProps, 'children'>;
export type IconButtonProps = CommonButtonProps & IconProps & {
    /** A title attribute for describing the button */
    title?: string;
    /** Consume only the real-estate of the icon whilst still providing the minimum touch area of 44px */
    isCosy?: boolean;
    /** Whether the button is disabled */
    isDisabled?: boolean;
    onClick?: () => void;
};
export type WrapperProps = CommonButtonProps & {
    $size: IconSizes;
    $isCosy?: boolean;
};
export type IconButtonWithSVGProps = Omit<IconButtonProps, 'svg'> & {
    svg?: IconButtonProps['svg'];
};
//# sourceMappingURL=IconButton.types.d.ts.map
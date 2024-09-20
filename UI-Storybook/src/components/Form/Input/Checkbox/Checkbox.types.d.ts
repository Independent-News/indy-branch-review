import { HTMLProps } from 'react';
import { IconSizes } from '../../../Icon';
import { FormInputProps } from '../Input.types';
type InputProps = FormInputProps<HTMLInputElement>;
type OmitProps = Omit<InputProps, 'helpText' | 'state' | 'message' | 'label' | 'size'>;
export type CheckboxSize = Exclude<IconSizes, 'x-small'>;
export interface CheckboxProps extends OmitProps {
    size?: CheckboxSize;
    label?: ReactNode;
    isCosy?: boolean;
}
export interface WrapperProps {
    $size: CheckboxSize;
    $disabled: boolean;
    $isCosy: boolean;
    className?: string;
}
export interface LabelProps extends HTMLProps<HTMLLabelElement> {
    $disabled: boolean;
}
export {};
//# sourceMappingURL=Checkbox.types.d.ts.map
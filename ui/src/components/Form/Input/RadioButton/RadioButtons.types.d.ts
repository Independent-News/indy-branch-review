import { HTMLProps } from 'react';
import { FormInputProps } from '../Input.types';
type InputProps = FormInputProps<HTMLInputElement>;
type OmitProps = Omit<InputProps, 'helpText' | 'state' | 'message'>;
export interface RadioButtonProps extends OmitProps {
    name: string;
    value: string;
}
export interface LabelProps extends HTMLProps<HTMLLabelElement> {
    $disabled: boolean;
}
export {};
//# sourceMappingURL=RadioButtons.types.d.ts.map
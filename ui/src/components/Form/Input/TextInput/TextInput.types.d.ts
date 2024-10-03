import { HTMLProps, ReactElement } from 'react';
import { FormInputProps } from '../Input.types';
export interface TextInputProps extends FormInputProps<HTMLInputElement> {
    /**
     * A button that renders inside of the input. This button should not include
     * an onClick event - the action should be passed as a buttonAction instead
     */
    button?: ReactElement;
    /**
     * An action that is to be performed onClick or on Space/Enter keypress
     * and will be optimised for accessibility
     */
    buttonAction?: VoidFunction;
}
export interface StyledInputProps extends HTMLProps<HTMLInputElement> {
    $hasButton: boolean;
}
//# sourceMappingURL=TextInput.types.d.ts.map
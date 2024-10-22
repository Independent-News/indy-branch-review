import { HTMLProps } from 'react';
export declare enum InputState {
    DEFAULT = "default",
    ERROR = "error",
    SUCCESS = "success",
    WAITING = "waiting"
}
/**
 * Accepts generic type `T` to extend different input types
 * e.g. `HTMLInputElement`, `HTMLSelectElement`
 */
export interface FormInputProps<T> extends HTMLProps<T> {
    id: string;
    /** Style guide: Text fields should always have a label */
    label: string;
    /** Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY */
    helpText?: string;
    /**
     * When controlled={true}, the message that will display on error
     * Otherwise, the state must be manually set to InputState.ERROR
     */
    message?: string;
    /**
     * The state of the input - defines border style, and whether to show
     * error messages
     */
    state: InputState;
    /**
     * Whether to display the asterisk indicating a required field
     * Note: This is purely a VISUAL indicator, and does not affect validation
     */
    required?: boolean;
    /**
     * Whether the input's validation (errors and state) are controlled by
     * react-hook-form (requiring use of FormProvider from @indy/ui/Form)
     */
    controlled?: boolean;
}
export interface StyledInputProps extends HTMLProps<HTMLInputElement> {
    $hasButton: boolean;
}
export type RegisterInputReturnType<T> = {
    id: keyof T;
    name: string;
    state: InputState;
    message?: string;
    required: boolean;
    'aria-required': boolean;
    'aria-invalid': boolean;
    'aria-describedby': string;
};
//# sourceMappingURL=Input.types.d.ts.map
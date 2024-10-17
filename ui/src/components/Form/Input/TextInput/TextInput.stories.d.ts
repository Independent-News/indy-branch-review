import { InputState } from '../Input.types';
declare const _default: {
    title: string;
    component: ({ id, label, helpText, className, message, type, state, button, buttonAction, controlled, required, ...inputProps }: import('./TextInput.types').TextInputProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        controlled: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        id: string;
        label: string;
        helpText: string;
        required: undefined;
        type: string;
        state: string;
        message: string;
        controlled: boolean;
        pattern: {
            value: string;
            message: string;
        };
    };
};
export declare const Disabled: {
    args: {
        disabled: boolean;
        value: string;
        id: string;
        label: string;
        helpText: string;
        required: undefined;
        type: string;
        state: string;
        message: string;
        controlled: boolean;
        pattern: {
            value: string;
            message: string;
        };
    };
};
export declare const Waiting: {
    args: {
        state: InputState;
        id: string;
        label: string;
        helpText: string;
        required: undefined;
        type: string;
        message: string;
        controlled: boolean;
        pattern: {
            value: string;
            message: string;
        };
    };
};
//# sourceMappingURL=TextInput.stories.d.ts.map
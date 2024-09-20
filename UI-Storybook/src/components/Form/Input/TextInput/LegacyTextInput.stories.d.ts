import { InputState } from '../Input.types';
declare const _default: {
    title: string;
    component: import('react').FC<import('./TextInput.types').TextInputProps>;
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
//# sourceMappingURL=LegacyTextInput.stories.d.ts.map
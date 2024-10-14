import { default as PasswordInputWithValidationHintsProps } from './WithValidationHints/PasswordInputWithValidationHints.types';
declare const _default: {
    title: string;
    component: import('react').FC<import('./PasswordInput.types').PasswordInputProps>;
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
        state: string;
        message: string;
        controlled: boolean;
    };
};
export declare const Disabled: {
    args: {
        disabled: boolean;
        id: string;
        label: string;
        helpText: string;
        required: undefined;
        state: string;
        message: string;
        controlled: boolean;
    };
};
export declare const WithValidationHints: {
    args: {
        validationHints: {
            hintOne: {
                passes: boolean;
                hint: string;
            };
            hintTwo: {
                passes: boolean;
                hint: string;
            };
            hintThree: {
                passes: boolean;
                hint: string;
            };
            hintFour: {
                passes: boolean;
                hint: string;
            };
        };
        id: string;
        label: string;
        helpText: string;
        required: undefined;
        state: string;
        message: string;
        controlled: boolean;
    };
    render: (args: PasswordInputWithValidationHintsProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=PasswordInput.stories.d.ts.map
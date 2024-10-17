import { default as PasswordInputWithValidationHintsProps } from './WithValidationHints/PasswordInputWithValidationHints.types';
import { FC } from 'react';
declare const _default: {
    title: string;
    component: (inputProps: import('./PasswordInput.types').PasswordInputProps) => import("react/jsx-runtime").JSX.Element;
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
    decorators: ((Story: FC) => import("react/jsx-runtime").JSX.Element)[];
    render: (args: PasswordInputWithValidationHintsProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=PasswordInput.stories.d.ts.map
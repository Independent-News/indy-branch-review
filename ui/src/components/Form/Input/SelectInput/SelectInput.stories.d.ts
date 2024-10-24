declare const _default: {
    title: string;
    component: ({ id, label, helpText, className, message, state, required, controlled, options, defaultValue, ...inputProps }: import('./SelectInput.types').SelectProps) => import("react/jsx-runtime").JSX.Element;
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
        required: boolean;
        state: string;
        message: string;
        controlled: boolean;
        options: {
            label: string;
            value: string;
        }[];
    };
};
export declare const Disabled: {
    args: {
        disabled: boolean;
        id: string;
        label: string;
        helpText: string;
        required: boolean;
        state: string;
        message: string;
        controlled: boolean;
        options: {
            label: string;
            value: string;
        }[];
    };
};
//# sourceMappingURL=SelectInput.stories.d.ts.map
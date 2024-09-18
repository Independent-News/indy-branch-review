import { ButtonProps } from './Button.types';
declare const _default: {
    title: string;
    component: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
    argTypes: {
        props: {
            table: {
                disable: boolean;
            };
        };
        children: {
            description: string;
            defaultValue: string;
            type: {
                name: string;
                required: boolean;
            };
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            control: string;
            options: string[];
        };
        as: {
            description: string;
            control: string;
            options: string[];
        };
        size: {
            description: string;
            control: string;
            options: string[];
        };
        disabled: {
            description: string;
            control: string;
        };
        isExternal: {
            if: {
                arg: string;
                neq: string;
            };
            description: string;
            control: string;
        };
        href: {
            if: {
                arg: string;
                neq: string;
            };
            description: string;
            control: string;
        };
        type: {
            if: {
                arg: string;
                eq: string;
            };
            description: string;
            control: string;
            options: string[];
        };
    };
};
export default _default;
export declare const Primary: {
    args: {
        children: string;
        variant: string;
    };
};
export declare const Secondary: {
    args: {
        children: string;
        variant: string;
    };
};
export declare const Tertiary: {
    args: {
        children: string;
        variant: string;
    };
};
export declare const PrimaryUncapitalised: {
    args: {
        children: string;
        variant: string;
    };
};
/**
 * Assigns a predefined theme to a button that cannot be modified.
 * i.g. you may opt to use a premium-themed button within a base theme environment.
 */
export declare const ThemedButton: {
    args: {
        children: string;
    };
    render: (args: ButtonProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=Button.stories.d.ts.map
import { Props as BaseProps } from './MessageBanner.types';
declare const _default: {
    title: string;
    component: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<BaseProps, never>> & string & Omit<({ children, messageTimeout, className, variant, ...rest }: BaseProps) => import("react/jsx-runtime").JSX.Element, keyof import('react').Component<any, {}, any>>;
    argTypes: {
        messageTimeout: {
            description: string;
            control: {
                type: string;
            };
        };
        children: {
            description: string;
            options: string[];
            mapping: {
                Text: string;
                'Single Element': import("react/jsx-runtime").JSX.Element;
                'Multiple Elements': import("react/jsx-runtime").JSX.Element[];
            };
        };
        className: {
            description: string;
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        children: string;
    };
};
export declare const Success: {
    args: {
        variant: string;
        children: string;
    };
    render: (args: BaseProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const Error: {
    args: {
        variant: string;
        children: string;
    };
    render: (args: BaseProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=MessageBanner.stories.d.ts.map
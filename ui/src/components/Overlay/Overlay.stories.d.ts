declare const _default: {
    title: string;
    component: import('react').FC<import('./Overlay.types').OverlayProps>;
    argTypes: {
        isHidden: {
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
        returnFocus: {
            description: string;
            control: {
                type: string;
            };
        };
        onBackgroundClick: {
            description: string;
            control: {
                type: string;
            };
        };
        Wrapper: {
            description: string;
            control: {
                type: string;
            };
        };
    };
    decorators: ((Story: import('react').FC) => import("react/jsx-runtime").JSX.Element)[];
};
export default _default;
export declare const Default: {
    args: {
        children: string;
        isHidden: boolean;
        Wrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
        returnFocus: string;
    };
};
//# sourceMappingURL=Overlay.stories.d.ts.map
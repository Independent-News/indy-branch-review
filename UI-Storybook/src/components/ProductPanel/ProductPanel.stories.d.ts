declare const _default: {
    title: string;
    component: import('react').FC<import('./ProductPanel.types').ProductPanelProps>;
    tags: string[];
    argTypes: {
        title: {
            control: {
                type: string;
            };
        };
        rating: {
            control: {
                type: string;
            };
        };
        image: {
            control: {
                disable: boolean;
            };
        };
        items: {
            control: {
                type: string;
            };
        };
        description: {
            control: {
                disable: boolean;
            };
        };
        jumpLink: {
            control: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        title: string;
        rating: number;
        image: import("react/jsx-runtime").JSX.Element;
        items: ({
            label: string;
            value: string;
            sublist?: undefined;
        } | {
            label: string;
            sublist: {
                svg: (e: any) => any;
                value: string;
            }[];
            value?: undefined;
        })[];
        description: import("react/jsx-runtime").JSX.Element;
        jumpLink: {
            elementId: string;
            text: string;
        };
    };
};
//# sourceMappingURL=ProductPanel.stories.d.ts.map
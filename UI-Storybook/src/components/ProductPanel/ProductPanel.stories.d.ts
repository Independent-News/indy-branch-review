declare const _default: {
    title: string;
    component: ({ title, rating, image, items, description, jumpLink, }: import('./ProductPanel.types').ProductPanelProps) => import("react/jsx-runtime").JSX.Element;
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
declare const _default: {
    title: string;
    component: import('react').FC<import('./SpecsList.types').SpecsListProps>;
    argTypes: {
        items: {
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
    };
};
//# sourceMappingURL=SpecsList.stories.d.ts.map
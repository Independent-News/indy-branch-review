import { SupportNSCProps } from './SupportNSC.types';
declare const _default: {
    title: string;
    component: ({ title, collapsedContent, link, icons, }: SupportNSCProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        collapsedContent: {
            description: string;
            control: {
                type: string;
            };
        };
        link: {
            description: string;
            control: {
                type: string;
            };
        };
        author: {
            description: string;
            control: {
                type: string;
            };
        };
        icons: {
            description: string;
            control: boolean;
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        title: string;
        collapsedContent: string;
        link: {
            url: string;
            copy: string;
        };
        author: {
            name: string;
            copy: string;
            imageUrl: string;
        };
        icons: import("react/jsx-runtime").JSX.Element;
    };
    render: (args: SupportNSCProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=SupportNSC.stories.d.ts.map
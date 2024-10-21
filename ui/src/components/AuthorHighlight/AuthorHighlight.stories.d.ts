import { AuthorHighlightProps } from './AuthorHighlight.types';
declare const _default: {
    title: string;
    component: ({ biography, authors, image, className, }: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        biography: {
            description: string;
        };
        authors: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        image: {
            description: string;
            control: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithoutImage: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithoutImageOrBio: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const DefaultWithMultipleAuthors: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const Primary: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const PrimaryWithoutBio: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const PrimaryWithMultipleAuthors: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const Secondary: {
    args: {
        authors: import('./AuthorHighlight.types').Author[];
        className?: string;
        biography?: string;
        image?: import('react').ReactNode;
    };
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const SecondaryWithoutImage: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const SecondaryWithoutImageOrBio: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const SecondaryWithMultipleAuthors: {
    args: AuthorHighlightProps;
    render: (args: AuthorHighlightProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=AuthorHighlight.stories.d.ts.map
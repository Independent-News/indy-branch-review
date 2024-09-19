import { BreadcrumbProps } from './Breadcrumb.types';
declare const _default: {
    title: string;
    component: import('react').FC<BreadcrumbProps>;
};
export default _default;
export declare const WithBreadcrumbs: {
    args: BreadcrumbProps;
};
export declare const WithBreadcrumbsIncludingCurrentPage: {
    args: {
        currentPage: string;
        breadcrumbs?: {
            name: string;
            path: string;
            id?: string;
        }[];
    };
};
export declare const WithCurrentPageOnly: {
    args: {
        breadcrumbs: never[];
        currentPage: string;
    };
};
//# sourceMappingURL=Breadcrumb.stories.d.ts.map
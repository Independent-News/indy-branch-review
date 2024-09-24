import { default as React } from 'react';
type Breadcrumb = {
    name: string;
    path: string;
    id?: string;
};
export interface BreadcrumbProps {
    breadcrumbs?: Breadcrumb[];
    currentPage?: string;
}
export interface BreadcrumbListProps {
    breadcrumbs: Breadcrumb[];
    BreadcrumbListItemCurrentPage?: React.ReactNode;
}
export interface BreadcrumbListItemProps {
    name: Breadcrumb['name'];
    path: Breadcrumb['path'];
}
export {};
//# sourceMappingURL=Breadcrumb.types.d.ts.map
import { ReactNode, ReactElement } from 'react';
export type NullableReactElement = ReactElement | null | undefined;
export interface LayoutProps {
    children: ReactNode;
}
export interface OneColumnLayoutProps {
    children: ReactNode;
}
export interface TwoColumnLayoutProps {
    main: ReactNode;
    aside?: NullableReactElement;
    asideVisibleAtWidth?: string;
}
export interface TwoColumnStackedProps {
    topLeft: ReactNode;
    topRight: NullableReactElement;
    middle: ReactNode;
    bottomLeft: ReactNode;
    bottomRight: NullableReactElement;
    topAsideVisibleAtWidth?: string;
    bottomAsideVisibleAtWidth?: string;
}
//# sourceMappingURL=Layout.types.d.ts.map
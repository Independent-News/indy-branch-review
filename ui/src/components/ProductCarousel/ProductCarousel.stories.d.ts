import { Product } from '../ProductComparisonCommon/types';
import { ProductCarouselProps } from './ProductCarousel.types';
declare const _default: {
    title: string;
    component: import('react').FC<ProductCarouselProps>;
    decorators: ((Story: import('react').FC) => import("react/jsx-runtime").JSX.Element)[];
};
export default _default;
export declare const Default: {
    args: {
        initialIndex: number;
        isComparison: boolean;
        products: Product[];
        title: string;
        offsetKey: string;
    };
    render: (props: ProductCarouselProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=ProductCarousel.stories.d.ts.map
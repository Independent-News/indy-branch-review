import { Product } from '../ProductComparisonCommon/types';
import { ProductCarouselProps } from './ProductCarousel.types';
/**
 * @todo fix storyshotting of Product Carousel. It is currently being skipped
 * due to async behaviour.
 */
declare const _default: {
    title: string;
    component: import('react').FC<ProductCarouselProps>;
    tags: string[];
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
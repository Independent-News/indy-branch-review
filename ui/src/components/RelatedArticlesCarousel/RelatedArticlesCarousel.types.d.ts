import { Ref } from 'react';
import { ItemProps } from './Item/Item.types';
export interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
}
export type DefaultRenderSlideCallback = (arg: {
    itemIndex: number;
    item: ItemProps;
    ref: Ref<HTMLAnchorElement>;
}) => ReactNode;
export interface RelatedArticlesCarouselProps {
    className?: string;
    items: ItemProps[];
    title: string;
    renderSlide: DefaultRenderSlideCallback;
}
//# sourceMappingURL=RelatedArticlesCarousel.types.d.ts.map
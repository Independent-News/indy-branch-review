import { ElementType, Ref } from 'react';
type Author = {
    imageUrl: string;
    name: string;
};
type Data = {
    path: string;
    titleShort: string;
    title: string;
    authors?: Author;
    premium?: string;
    taboolaExcluded?: string;
};
type Article = {
    className?: string;
    data: Data;
    sectionTheme?: string;
    preloadImage?: boolean;
};
export interface AuthorCarouselProps {
    ArticleHeadshot: ElementType;
    items: Article[];
    sectionTheme?: string;
}
export interface NavButton {
    disabled: boolean;
    onClick: () => unknown;
}
export interface RenderSlideProps {
    item: Article;
    isVisible: boolean;
    ref: Ref<HTMLDivElement>;
    slideIndex: number;
}
export {};
//# sourceMappingURL=AuthorCarousel.types.d.ts.map
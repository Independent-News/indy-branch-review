export type Item<T> = {
    [key: string]: T;
};
export interface SimpleRenderSlideProps {
    captionRef: (element: HTMLDivElement | null) => void;
    item: Item<unknown>;
}
export interface SimpleSliderProps {
    items: Item<unknown>[];
    renderSlide: (props: SimpleRenderSlideProps) => JSX.Element;
    currentIndex: number;
    handleCaptionRef: (index: number) => (element: HTMLDivElement | null) => void;
}
export interface ControlsProps {
    handlePrev: () => void;
    handleNext: () => void;
}
export interface SimpleControlsProps extends ControlsProps {
    itemCount: number;
    currentIndex: number;
    contentType?: string;
    className?: string;
}
export interface CarouselProps {
    title: string;
    description: string;
    children: ReactNode;
    showTitle?: boolean;
    className?: string;
}
export interface SimpleCarouselProps {
    title: string;
    items: Item<unknown>[];
    renderSlide: (props: SimpleRenderSlideProps) => JSX.Element;
}
export interface TextRenderSlideProps {
    item: Item<unknown>;
}
export interface TextSliderProps {
    items: Item<unknown>[];
    renderSlide: (props: TextRenderSlideProps) => JSX.Element;
    currentIndex: number;
}
export interface TextCarouselProps {
    className?: string;
    items: Item<unknown>[];
    renderSlide: (props: TextRenderSlideProps) => JSX.Element;
    ctaText: string;
    ctaHref: string;
    autoPlayInterval?: number;
}
export interface HeaderProps {
    title: string;
    showTitle: boolean;
}
//# sourceMappingURL=Carousel.types.d.ts.map
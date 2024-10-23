import { Target, Rel } from '../components/Button/Button.types';
export type DefaultState = {
    bookmarkModalOpen: boolean;
    drawerLoginOpen: boolean;
    drawerMenuOpen: boolean;
    galleryIndex: number;
    galleryOpen: boolean;
    returnFocus: string;
};
export type ProductComparison = {
    selectedItems: string[];
    showModal: boolean;
};
export interface LivePriceItem {
    merchant: string;
    originalPrice?: string;
    price: string;
    link: string;
    target?: Target;
    rel?: Rel | `${Rel} ${Rel}`;
    isExternal?: boolean;
}
export type LivePrice = {
    id: string;
    prices: LivePriceItem[];
    isLoading: boolean;
    isFetched: boolean;
    isError: boolean;
};
export type PageState = {
    defaultState: DefaultState;
    productPrices: LivePrice[];
    productComparison: ProductComparison;
};
export type Dispatchers = {
    closeBookmarkModal: () => void;
    toggleBookmarkModal: () => void;
    closeDrawerLogin: () => void;
    closeDrawerMenu: () => void;
    toggleDrawerMenuOpen: () => void;
    toggleDrawerLoginOpen: () => void;
    toggleGalleryOpen: (returnFocus: string, galleryIndex: number) => void;
    clickPriceComparisonBuyNow: (index: number, price: number | string) => void;
    setProductCarouselIsLoaded: (id: string) => void;
    clickProductCarouselBuyNow: (id: string, name: string, price: string, index: number) => void;
    clickProductCarouselReadReview: (id: string, name: string, price: string) => void;
    clearProductSelection: () => void;
    hideProductModal: () => void;
    showProductModal: () => void;
    toggleSelectedProduct: (id: string, name: string, price: string, isChecked: boolean) => void;
    clickProductComparisonBuyNow: (id: string, name: string, price: string) => void;
    clickProductComparisonReadReview: (id: string, name: string, price: string) => void;
    setProductPrices: (id: string, prices: LivePriceItem[]) => void;
    productPriceFetchError: (id: string) => void;
    setProductPricesIsLoading: (id: string) => void;
};
export type ContextState = PageState & {
    dispatchers: Dispatchers;
};
//# sourceMappingURL=PageContext.d.ts.map
import { Target, Rel } from '../Button/Button.types';
import { Product } from '../ProductComparisonCommon/types';
import { Dispatchers, LivePrice } from '../../types/PageContext';
export interface Spec {
    key: string;
    value: string | null | number;
}
export type Specs = Spec[];
export interface BuyNow {
    vendorLink: string;
    isExternal: boolean;
    isAvailable: boolean;
    rel?: Rel | `${Rel} ${Rel}`;
    target?: Target;
}
export interface Review {
    anchorHref: string;
    anchorId: string;
}
export type Item = {
    best: string;
    buyNow: BuyNow;
    id: string;
    image: ReactNode;
    originalPrice?: string;
    price: string;
    productSpecs: Specs;
    rating: number;
    readReview: Review;
    title: string;
};
export type ProductComparisonProps = {
    products: Product[];
    returnFocus: string;
    selectedItemIDs: string[];
    showModal: boolean;
    dispatchers: Dispatchers;
    livePrices: LivePrice[];
    onBuyNowClick: Dispatchers['clickProductComparisonBuyNow'];
    onReadReviewClick: Dispatchers['clickProductComparisonReadReview'];
};
export interface LayoutProps {
    $columns?: number;
    $rows?: number;
}
//# sourceMappingURL=ProductComparison.types.d.ts.map
import { Rel, Target } from '../Button/Button.types';
import { Product, BuyNowClickHandler, ReadReviewClickHandler } from '../ProductComparisonCommon/types';
import { Dispatchers, LivePrice } from '../../types/PageContext';
export type ProductCarouselCardProps = {
    isComparison: boolean;
    isLoading?: boolean;
    originalPrice?: string;
    price: string;
    product: Product;
    selectedItemIDs: string[];
    isExternal: boolean;
    vendorLink: string;
    rel?: Rel | `${Rel} ${Rel}`;
    target?: Target;
    onToggleSelectedProduct: Dispatchers['toggleSelectedProduct'];
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
};
export type LazyProductCardProps = {
    isVisible: boolean;
    livePrice: LivePrice;
    isComparison: boolean;
    product: Product;
    selectedItemIDs: string[];
    fetchPrice: (productId: string, endpoint: string) => void;
    onToggleSelectedProduct: Dispatchers['toggleSelectedProduct'];
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
};
//# sourceMappingURL=ProductCarouselCard.types.d.ts.map
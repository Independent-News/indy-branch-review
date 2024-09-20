import { BuyNowClickHandler, ReadReviewClickHandler } from '../../ProductComparisonCommon/types';
import { Item } from '../ProductComparison.types';
import { LivePrice } from '../../../types/PageContext';
export type Props = {
    items: Item[];
    livePrices: LivePrice[];
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
};
//# sourceMappingURL=CTAs.types.d.ts.map
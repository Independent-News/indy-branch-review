import { BuyNowClickHandler, ReadReviewClickHandler } from '../../ProductComparisonCommon/types';
import { LivePrice } from '../../../types/PageContext';
import { Item } from '../ProductComparison.types';
export type Props = {
    items: Item[];
    livePrices: LivePrice[];
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
};
//# sourceMappingURL=CTAs.types.d.ts.map
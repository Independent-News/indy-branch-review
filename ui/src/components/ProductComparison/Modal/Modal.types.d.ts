import { BuyNowClickHandler, ReadReviewClickHandler } from '../../ProductComparisonCommon/types';
import { Item } from '../ProductComparison.types';
import { LivePrice } from '../../../types/PageContext';
export interface ModalProps {
    children: ReactNode;
    className?: string;
    isHidden?: boolean;
    returnFocus: string;
    items: Item[];
    livePrices: LivePrice[];
    hideProductModal: () => void;
    onBuyNowClick: BuyNowClickHandler;
    onReadReviewClick: ReadReviewClickHandler;
}
//# sourceMappingURL=Modal.types.d.ts.map
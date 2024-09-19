import { LivePriceItem, Dispatchers } from '../../types/PageContext';
export interface ItemProps extends LivePriceItem {
    onClick: () => void;
}
export interface PriceComparisonCommonProps {
    className?: string;
    items: LivePriceItem[];
    isLoading?: boolean;
    isLive?: boolean;
    onBuyNowClick?: Dispatchers['clickPriceComparisonBuyNow'];
}
export interface LoadingProps {
    className?: string;
    title?: string;
}
export interface FallbackProps {
    className?: string;
    children: React.ReactNode;
}
export interface ListFallbackProps extends FallbackProps {
    title: string;
    children: React.ReactNode;
}
//# sourceMappingURL=PriceComparison.types.d.ts.map
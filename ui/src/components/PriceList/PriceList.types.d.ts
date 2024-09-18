import { SvgrProps } from '../../types/svgr.d';
export interface PriceListItem {
    action: string;
    price: string;
    icon: SvgrProps;
}
export interface PriceListProps {
    updated?: string;
    items: PriceListItem[];
}

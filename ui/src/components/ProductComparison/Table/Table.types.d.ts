import { Item } from '../ProductComparison.types';
import { LivePrice } from '../../../types/PageContext';
export type Props = {
    items: Item[];
};
export interface ValueProps {
    $bold?: boolean;
}
export interface HeadingProps {
    $hidden?: boolean;
}
export type TableProps = {
    items: Item[];
    livePrices: LivePrice[];
};
export type { Specs, Item } from '../ProductComparison.types';
//# sourceMappingURL=Table.types.d.ts.map
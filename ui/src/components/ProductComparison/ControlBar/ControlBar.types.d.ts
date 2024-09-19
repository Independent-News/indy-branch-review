import { Item } from '../ProductComparison.types';
export type ControlBarProps = {
    clearItems: () => void;
    items: Item[];
    onCompareClick: () => void;
};

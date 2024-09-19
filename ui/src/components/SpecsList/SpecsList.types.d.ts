import { IconProps } from '../Icon';
type Sublist = {
    svg?: IconProps['svg'];
    value: string;
};
export type Items = {
    label: string;
    value: string;
    sublist?: Sublist[];
};
export interface SpecsListProps {
    items: Items[];
}
export {};
//# sourceMappingURL=SpecsList.types.d.ts.map
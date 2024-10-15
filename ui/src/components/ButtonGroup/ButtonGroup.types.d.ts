import { SvgrProps } from '../../types/svgr.d';
export interface ButtonGroupItemTypesProps {
    title: string;
    url: string;
    icon: SvgrProps;
    target?: string;
    rel?: string;
}
export interface ButtonGroupTypesProps {
    items: ButtonGroupItemTypesProps[];
}
export interface ListProps {
    $itemCount: number;
}
//# sourceMappingURL=ButtonGroup.types.d.ts.map
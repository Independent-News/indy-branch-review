export type Alignments = 'left' | 'right' | 'center' | 'none';
export type Devices = 'mobile' | 'tablet' | 'laptop' | 'desktop';
export type SpanConfig = {
    [Property in Devices]?: number;
};
export type OffsetConfig = {
    [Property in Devices]?: number;
};
export type OffGridProps = {
    align?: Alignments;
    span?: OffsetConfig;
};
export type ColumnProps = {
    span?: SpanConfig;
    offset?: OffsetConfig;
};
export type RowProps = {
    children: React.ReactElement<ColumnProps> | Array<React.ReactElement<ColumnProps>>;
};
export type GridProps = {
    children: React.ReactElement<RowProps> | Array<React.ReactElement<RowProps>>;
};
//# sourceMappingURL=Grid.types.d.ts.map
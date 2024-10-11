export type TFlattenInputObject = {
    [key: string]: TFlattenInputObject | unknown;
};
declare const flatten: (obj: TFlattenInputObject, arrayModifier?: (path: string, value: unknown[]) => {
    [key: string]: string;
}) => {
    [key: string]: unknown;
};
export default flatten;
//# sourceMappingURL=flatten.d.ts.map
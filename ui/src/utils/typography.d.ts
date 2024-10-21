export type TFallback = {
    name: string;
    fallback: string;
    style?: string;
    weight?: string | number;
    ascent?: string;
    descent?: string;
    lineGap?: string;
    size?: string;
};
export declare function makeFallback({ name, fallback, style, weight, ascent, descent, lineGap, size, }: TFallback): string;
export type TFontFace = {
    display?: string;
    family?: string;
    src: string;
    style?: string;
    weight?: string | number;
    fallback?: {
        font: string;
        ascent?: string;
        descent?: string;
        lineGap?: string;
        size?: string;
    };
};
export declare function makeFontFace(name: string, members: TFontFace[]): string;
export type TFontConfig = {
    [key: string]: TFontFace[];
};
export declare const generateFontsFromConfig: (config: TFontConfig) => string[];
//# sourceMappingURL=typography.d.ts.map
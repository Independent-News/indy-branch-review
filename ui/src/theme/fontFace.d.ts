export declare const fontConfig: {
    'Indy Serif': ({
        src: string;
        fallback: {
            font: string;
            lineGap: string;
            size: string;
            ascent?: undefined;
            descent?: undefined;
        };
        style?: undefined;
        weight?: undefined;
    } | {
        src: string;
        style: string;
        fallback: {
            font: string;
            lineGap: string;
            size: string;
            ascent?: undefined;
            descent?: undefined;
        };
        weight?: undefined;
    } | {
        src: string;
        weight: string;
        fallback: {
            font: string;
            size: string;
            ascent: string;
            descent: string;
            lineGap?: undefined;
        };
        style?: undefined;
    } | {
        src: string;
        style: string;
        weight: string;
        fallback: {
            font: string;
            lineGap: string;
            size: string;
            ascent?: undefined;
            descent?: undefined;
        };
    })[];
    'Indy Sans': ({
        src: string;
        fallback: {
            font: string;
            size: string;
            ascent: string;
            descent: string;
        };
        weight?: undefined;
    } | {
        src: string;
        weight: string;
        fallback: {
            font: string;
            size: string;
            ascent: string;
            descent: string;
        };
    })[];
    'Indy Sans CAPS': {
        src: string;
        weight: string;
        fallback: {
            font: string;
            size: string;
            ascent: string;
            descent: string;
        };
    }[];
};
export declare const editionFontConfig: {
    'Indy Sans': ({
        src: string;
        weight?: undefined;
        family?: undefined;
        display?: undefined;
    } | {
        src: string;
        weight: number;
        family?: undefined;
        display?: undefined;
    } | {
        src: string;
        weight: string;
        family?: undefined;
        display?: undefined;
    } | {
        src: string;
        family: string;
        weight?: undefined;
        display?: undefined;
    } | {
        src: string;
        family: string;
        weight: string;
        display?: undefined;
    } | {
        src: string;
        display: string;
        family: string;
        weight: number;
    } | {
        src: string;
        display: string;
        family: string;
        weight: string;
    })[];
    'Indy Serif': ({
        src: string;
        weight: number;
        style?: undefined;
        display?: undefined;
        family?: undefined;
    } | {
        src: string;
        style: string;
        weight: number;
        display?: undefined;
        family?: undefined;
    } | {
        src: string;
        display: string;
        family: string;
        weight?: undefined;
        style?: undefined;
    } | {
        src: string;
        display: string;
        family: string;
        weight: number;
        style?: undefined;
    } | {
        src: string;
        display: string;
        family: string;
        style: string;
        weight: number;
    })[];
};
export declare const indyFonts: string;
export declare const editionFonts: string;
//# sourceMappingURL=fontFace.d.ts.map
/**
 * @explain This step is necessary in order to allow the imported modules to be
 * merged into the base theme. Modules are not supported by Ramda's
 * mergeDeepRight function and so spreading them here produces new objects from
 * them.
 */
export declare const base: {
    btn: {
        borderRadius: number;
        height: number;
        iconSpacing: number;
    };
    formField: {
        input: {
            paddingX: string;
            height: string;
        };
        borderRadius: string;
        marginTop: string;
        caption: {
            height: string;
            marginTop: string;
            marginLeft: string;
        };
    };
    outerArea: {
        borderRadius: string;
    };
    nav: {
        paddingX: string;
    };
    bleed: 16;
    sidebar: {
        width: number;
        gap: number;
    };
    pageWidth: {
        mobile: number;
        tablet: number;
        laptop: number;
        desktop: number;
    };
    contentWidth: {
        mobile: number;
        tablet: number;
        laptop: number;
    };
    parallaxContentWidth: 800;
    drawer: {
        width: string;
    };
    header: {
        maxWidth: {
            laptop: string;
            desktop: string;
        };
        premium: {
            height: {
                mobile: string;
                tablet: string;
            };
        };
    };
    subnav: {
        height: number;
        itemMinWidth: number;
    };
    socialEmbed: {
        facebook: {
            maxWidth: string;
            minHeight: string;
        };
        instagram: {
            embedHeight: string;
            embedMaxHeight: string;
            embedMinWidth: string;
            embedWidth: string;
            maxWidth: string;
            minHeight: string;
        };
        tiktok: {
            maxWidth: string;
            minHeight: string;
        };
        twitter: {
            maxWidth: string;
            minHeight: string;
            width: string;
        };
    };
    titleHeader: {
        maxWidth: {
            laptop: number;
        };
        paddingBottom: number;
    };
    icon: {
        "x-small": {
            width: number;
        };
        small: {
            width: number;
        };
        base: {
            width: number;
        };
        large: {
            width: number;
        };
    };
    loadingEllipsis: {
        height: number;
    };
    minTouchArea: 44;
    paragraph: {
        gap: string;
        marginY: number;
        fontSize: number;
        lineHeight: number;
    };
    related: {
        gap: string;
        paddingY: string;
        paddingX: number;
    };
    text: {
        spaceWidthEm: number;
    };
    dmpuSize: {
        width: string;
        height: string;
    };
    notificationWidget: {
        borderRadius: string;
        widthDesktop: string;
        widthMobile: string;
    };
    globalNavBar: {
        height: number;
    };
    anchorNav: {
        height: number;
    };
};
export declare const luxury: {
    paragraph: {
        marginY: number;
        fontSize: number;
        lineHeight: number;
    };
};
//# sourceMappingURL=index.d.ts.map
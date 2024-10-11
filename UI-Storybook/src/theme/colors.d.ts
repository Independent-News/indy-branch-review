import { SocialColors, SocialType } from './colors.types';
declare const social: Record<SocialType, SocialColors>;
declare const semiotic: {
    /** When we want to inform the user that the user has successfully completed an action e.g. a green tick to indicate a field has been validated. */
    success: string;
    /** Darker alternative for when we want to inform the user that the user has successfully completed an action e.g. a green tick to indicate a field has been validated. */
    successDark: string;
    /** When we want to inform the user that there is an error or failure in completing an action e.g. the border of a field when it has failed validation. */
    error: string;
    /** When an interactive element is temporarily unavailable e.g. when we want to inform the user that certain information is needed before allowing them to click a button. */
    disabled: string;
    /** When we want to inform the user that a feature is enabled but not in use or selected e.g. a checkbox that can be interacted with but has yet to be checked. */
    inactive: string;
    /** A state between Error and Success, to let the user know they are interacting with content. */
    info: string;
    /** A colour of high contrast to draw the user’s attention and informs the user that the content to which this is applied is current/ongoing. */
    live: string;
    /** A colour of contrast to draw the user’s attention, e.g to promote subscriber deals. */
    attention: string;
};
declare const base: {
    semiotic: {
        /** When we want to inform the user that the user has successfully completed an action e.g. a green tick to indicate a field has been validated. */
        success: string;
        /** Darker alternative for when we want to inform the user that the user has successfully completed an action e.g. a green tick to indicate a field has been validated. */
        successDark: string;
        /** When we want to inform the user that there is an error or failure in completing an action e.g. the border of a field when it has failed validation. */
        error: string;
        /** When an interactive element is temporarily unavailable e.g. when we want to inform the user that certain information is needed before allowing them to click a button. */
        disabled: string;
        /** When we want to inform the user that a feature is enabled but not in use or selected e.g. a checkbox that can be interacted with but has yet to be checked. */
        inactive: string;
        /** A state between Error and Success, to let the user know they are interacting with content. */
        info: string;
        /** A colour of high contrast to draw the user’s attention and informs the user that the content to which this is applied is current/ongoing. */
        live: string;
        /** A colour of contrast to draw the user’s attention, e.g to promote subscriber deals. */
        attention: string;
    };
    social: Record<SocialType, SocialColors>;
    /** The primary colours refer to the main colours associated to each of the different themes. */
    primary: {
        /** The main, most saturated colour associated with the theme, e.g core red for base theme. */
        base: string;
        /** The Lightest colour associated with the theme, e.g red 10 for base theme */
        light: string;
        /** A dark variant of the main colour associated with the theme, e.g red 120 for base theme. */
        dark: string;
        /** An in-between of Light and Base colour associated with the theme, e.g red 70 for base theme */
        muted: string;
    };
    /** When the resting state represent the brand theme. Red for Base and teal for premium content and the alternative state is a darker variant of this colour. */
    actionBrand: {
        /** When resting */
        base: string;
        /** When hovering or active  */
        alt: string;
        /** When disabled for a specific reason. This is NOT the same as 'inactive'  */
        disabled: string;
    };
    /** An alternative to brand, where the alt state is a lighter variant, used often on dark backgrounds or in the Nav */
    actionBrandInvert: {
        /** When resting */
        base: string;
        /** When hovering or active  */
        alt: string;
    };
    /** When the resting state is black used often for headlines within section pages, and the ALT state is the darker variant of the theme colour. */
    actionBase: {
        /** When resting */
        base: string;
        /** When hovering or active  */
        alt: string;
    };
    /** When the resting state is white, used on darker backgrounds e.g section page component titles, and the ALT state is the darker variant of the theme colour. */
    actionWhite: {
        /** When resting */
        base: string;
        /** When hovering or active  */
        alt: string;
    };
    /** When the resting state is white, and the ALT state is the Lighter variant of the theme colour. for a subtle change to let the user know they have interacted with content. */
    actionSubtleLight: {
        /** When resting  */
        base: string;
        /** When hovering or active  */
        alt: string;
    };
    /** The opposite of subtle light When the resting state is Black, and the ALT state is the Lighter variant of the theme colour. for a subtle change to let the user know they have interacted with content */
    actionSubtleDark: {
        /** When resting  */
        base: string;
        /** When hovering or active  */
        alt: string;
    };
    /** When the resting state is light and sits on a dark background, and the ALT state is the is dark to provide high contrast once interacted with. */
    actionBold: {
        /** When resting  */
        base: string;
        /** When hovering or active  */
        alt: string;
    };
    /** When the resting state is dark and sits on a light background, and the ALT state is the is light to provide high contrast once interacted with. */
    actionInvert: {
        /** When resting  */
        base: string;
        /** When hovering or active  */
        alt: string;
    };
    /** When there is no same resting state but there is a same darker ALT state. eg. nav links */
    actionTransparent: {
        /** When resting  */
        base: string;
        /** When hovering or active  */
        alt: string;
    };
    /** Divider colours refer to strokes that outline or separate content. */
    divider: {
        /** This Divider should be used on Off white  */
        dark: string;
        /** The lightest of the divider colours, used on white */
        light: string;
        /** The Darkest of the divider colours, used for a Bold effect. */
        bold: string;
        /** A light divider which uses a tint of the brand’s primary colour for premium theme. */
        brand: string;
        /** A light divider which uses a tint of the brand’s primary colour for premium theme. */
        brandDark: string;
        /** A light divider that is independent of theme - do not override */
        standard: string;
    };
    /** A canvas colour refers to the background colour upon which content sits. This could be for the page, nav items, modals etc. */
    canvas: {
        /** Base is a Light canvas colour across themes, we use this for most pages and in modal backgrounds etc. */
        base: string;
        /** Canvas secondary acts as a slightly darker canvas to base, and acts to create subtle contrast, e.g to separate content within an article */
        secondary: string;
        /** Colour Canvas Card refers to instances where we need premium to have a different background colour in a Dark theme. e.g for selling page components */
        card: string;
        /** Canvas brand uses a light tint of the primary colour from each theme, used for example for author backgrounds across content on the site */
        brand: string;
        /** Provides a consistent background for videos before they have loaded. */
        video: string;
    };
    /** Ink refers to the basic typographic/iconographic elements on a page on a page e.g text and icons that are not interactive or branded. */
    ink: {
        /** This is the darkest colour (black) across themes, we use this for majority of text on the site, as provides high contrast and legibility. */
        base: string;
        /** This is a lighter colour of text, yet still maintains contrast and legibility used for a more subtle effect. */
        light: string;
        /** This is an in-between of light and base, used for a less harsh effect than base. */
        muted: string;
        /** This is the lightest text (white) used on dark coloured backgrounds and theme branded content. */
        inverted: string;
    };
    /** A veil colour refers to a semi-transparent overlay used to separate the page from the content that has been placed on top. */
    veil: {
        /** Base is the most common veil colour and should be used for consistency when creating a veil on a page. */
        base: string;
    };
    /** A shadow colour refers to a colour with gradient added to create definition around an object. */
    shadow: {
        /** Base is the most common shadow colour and should be used for consistency when creating shadows on objects. */
        dark: string;
        /** Base is the most common shadow colour and should be used for consistency when creating shadows on objects. */
        light: string;
    };
};
declare const baseDark: {
    actionBase: {
        base: string;
        alt: string;
    };
    actionBrand: {
        base: string;
        alt: string;
    };
    canvas: {
        /** Dark base is the opposite to base and is a dark canvas colour across themes, we use this for W.O.B for example Video articles. */
        base: string;
        /** Canvas dark secondary acts as a slightly lighter canvas to dark base, and is used to create a softer effect for white on black instances, e.g with certain nav links. */
        secondary: string;
        /** Colour Canvas Card refers to instances where we need premium to have a different background colour in a Dark theme. e.g for selling page components. */
        card: string;
    };
    ink: {
        /** Dark base is the opposite to base and is a light ink colour across all themes, we use this for W.O.B for example Video articles.  */
        base: string;
    };
    divider: {
        bold: string;
    };
    social: {
        x: {
            base: string;
            alt: string;
        };
        bookmark: SocialColors;
        twitter: SocialColors;
        facebook: SocialColors;
        whatsapp: SocialColors;
        vk: SocialColors;
        telegram: SocialColors;
    };
};
declare const premium: {
    primary: {
        base: string;
        light: string;
        muted: string;
        dark: string;
    };
    actionBrand: {
        base: string;
        alt: string;
        disabled: string;
    };
    actionBrandInvert: {
        base: string;
        alt: string;
    };
    actionWhite: {
        alt: string;
    };
    actionBase: {
        alt: string;
    };
    actionTransparent: {
        alt: string;
    };
    canvas: {
        brand: string;
        card: string;
    };
    divider: {
        brand: string;
        brandDark: string;
    };
};
declare const premiumDark: {
    canvas: {
        card: string;
    };
};
declare const climate: {
    social: {
        bookmark: {
            base: string;
            alt: string;
        };
        twitter: {
            base: string;
            alt: string;
        };
        facebook: {
            base: string;
            alt: string;
        };
        whatsapp: {
            base: string;
            alt: string;
        };
        vk: {
            base: string;
            alt: string;
        };
        telegram: {
            base: string;
            alt: string;
        };
        x: {
            base: string;
            alt: string;
        };
    };
    primary: {
        base: string;
        light: string;
        muted: string;
        dark: string;
    };
    actionBrand: {
        base: string;
        alt: string;
    };
    actionBrandInvert: {
        base: string;
        alt: string;
    };
    actionWhite: {
        alt: string;
    };
    actionBase: {
        alt: string;
    };
    canvas: {
        brand: string;
    };
};
declare const climateDark: {
    actionBrand: {
        base: string;
        alt: string;
    };
    social: {
        bookmark: {
            base: string;
            alt: string;
        };
        twitter: {
            base: string;
            alt: string;
        };
        facebook: {
            base: string;
            alt: string;
        };
        whatsapp: {
            base: string;
            alt: string;
        };
        vk: {
            base: string;
            alt: string;
        };
        telegram: {
            base: string;
            alt: string;
        };
        x: {
            base: string;
            alt: string;
        };
    };
};
declare const sgi: {
    social: {
        bookmark: {
            base: string;
            alt: string;
        };
        twitter: {
            base: string;
            alt: string;
        };
        facebook: {
            base: string;
            alt: string;
        };
        whatsapp: {
            base: string;
            alt: string;
        };
        vk: {
            base: string;
            alt: string;
        };
        telegram: {
            base: string;
            alt: string;
        };
        x: {
            base: string;
            alt: string;
        };
    };
    primary: {
        base: string;
        light: string;
        muted: string;
        dark: string;
    };
    actionBrand: {
        base: string;
        alt: string;
    };
    actionBrandInvert: {
        base: string;
        alt: string;
    };
    actionWhite: {
        alt: string;
    };
    actionBase: {
        alt: string;
    };
    canvas: {
        brand: string;
    };
};
declare const sgiDark: {};
declare const luxury: {
    actionBrand: {
        base: string;
        alt: string;
    };
    actionBrandInvert: {
        base: string;
        alt: string;
    };
    actionWhite: {
        alt: string;
    };
    actionBase: {
        alt: string;
    };
    canvas: {
        brand: string;
    };
    divider: {
        dark: string;
        light: string;
    };
};
declare const luxuryDark: {};
declare const cmp: {
    actionBrand: {
        base: string;
        alt: string;
    };
};
declare const cmpDark: {};
export { semiotic, social, base, baseDark, premium, premiumDark, climate, climateDark, sgi, sgiDark, luxury, luxuryDark, cmp, cmpDark, };
//# sourceMappingURL=colors.d.ts.map
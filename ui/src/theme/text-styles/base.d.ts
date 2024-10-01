import { TagStyleBySize, TextTransform, TextDecoration } from './text-styles.types';
export declare const h1: import('styled-components').RuleSet<object>;
export declare const h2: import('styled-components').RuleSet<object>;
export declare const h3: import('styled-components').RuleSet<object>;
export declare const h4: import('styled-components').RuleSet<object>;
export declare const h5: import('styled-components').RuleSet<object>;
export declare const h6: import('styled-components').RuleSet<object>;
export declare const p: import('styled-components').RuleSet<object>;
export declare const a: import('styled-components').RuleSet<object>;
export declare const label: import('styled-components').RuleSet<object>;
export declare const smallLabel: import('styled-components').RuleSet<object>;
/**
 * All of the text styles below are waiting tokens and therefore are
 * loosely defined by the design system.
 *
 * Until the tokens have been laid out then the recommendation is to simply
 * create a unique export that encompasses ONLY the font styles, that is:
 * - try to define the full font-shorthand where possible e.g. `font: normal
 *   16px/20px ${primaryFont}`
 * - only `font-*`, `letter-spacing` etc
 * - no `margin` or `padding` or `color` etc
 */
export declare const headline: {
    base: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    voices: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    infact: string;
};
export declare const subheadline: {
    base: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    luxury: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
};
export declare const blockQuoteQuote = "bold 3.5em Georgia";
export declare const tag: TagStyleBySize;
export declare const storyCard: {
    relatedLinks: {
        carousel: {
            font: string;
            'text-transform': string;
        };
    };
};
export declare const recommendedLinks: {
    font: string;
    letterSpacing: string;
};
export declare const button: {
    base: string;
    medium: string;
    large: string;
    xLarge: string;
    xLargeStrikeThrough: import('styled-components').RuleSet<object>;
};
export declare const buttonGroup: {
    base: string;
};
export declare const checkbox: {
    xSmall: string;
    small: string;
    base: string;
    large: string;
};
export declare const body: {
    h2: string;
    h3: string;
    list: string;
};
export declare const ImageTile: {
    title: string;
};
export declare const tooltip: {
    base: string;
};
export declare const media: {
    caption: string;
    pagination: string;
};
export declare const quote: {
    quoteText: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    title: string;
    citation: string;
};
export declare const capsule: {
    base: string;
};
/** e.g. related article headline on cards */
export declare const relatedStoriesHeadline: {
    base: string;
};
export declare const premiumBadge: {
    base: string;
};
export declare const premiumIntro: {
    base: string;
};
export declare const priceList: {
    updated: string;
    action: string;
    price: string;
};
export declare const controlImage = "bold 15px/1.4 'Indy Serif', 'Indy Serif Fallback', serif";
export declare const productComparison: {
    product: {
        name: string;
    };
    spec: {
        heading: string;
        value: string;
        strikeThrough: import('styled-components').RuleSet<object>;
    };
    modal: {
        title: {
            base: string;
            large: string;
        };
        body: string;
    };
    table: {
        font: string;
    };
};
export declare const booking: {
    small: string;
    base: string;
    large: string;
    title: string;
    price: {
        font: string;
        letterSpacing: string;
    };
    noPrice: {
        font: string;
        letterSpacing: string;
    };
    card: {
        xSmall: string;
        small: string;
        base: string;
        large: string;
        price: {
            font: string;
            letterSpacing: string;
        };
    };
};
export declare const specsList: {
    small: string;
    base: string;
};
export declare const continueReading: import('styled-components').RuleSet<object>;
export declare const productTitle: {
    mobile: {
        font: string;
        letterSpacing: string;
    };
    tablet: {
        font: string;
        letterSpacing: string;
    };
    laptop: {
        font: string;
        letterSpacing: string;
    };
};
export declare const productCarouselCardBestFor: {
    mobile: {
        font: string;
        lineHeight: string;
    };
    tablet: {
        font: string;
        lineHeight: string;
    };
    laptop: {
        font: string;
        lineHeight: string;
    };
};
export declare const productCarouselCardTitle: {
    mobile: {
        font: string;
        lineHeight: string;
    };
    tablet: {
        font: string;
        lineHeight: string;
    };
    laptop: {
        font: string;
        lineHeight: string;
    };
};
export declare const productCarouselCardPrice: {
    font: string;
    lineHeight: string;
    strikeThrough: import('styled-components').RuleSet<object>;
};
export declare const formInput: {
    base: string;
    label: string;
    helpText: string;
    error: string;
    hint: string;
    link: import('styled-components').RuleSet<object>;
    labelInset: string;
};
export declare const radioButton: {
    label: import('styled-components').RuleSet<object>;
};
export declare const sellingPage: {
    variantThree: {
        title: {
            mobile: string;
            tablet: string;
        };
        subTitle: {
            mobile: string;
            tablet: string;
            laptop: string;
        };
        cardTerms: string;
    };
    newsguard: {
        title: string;
        content: string;
        citation: string;
    };
};
export declare const sellingModal: {
    body: string;
};
export declare const featureListChecked: {
    base: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
    large: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
};
export declare const subscriptionPricingCard: {
    pricingDetails: {
        subscriptionLength: string;
        normalDiscountedPricing: string;
        continuedPrice: string;
    };
    radioButtonVariant: {
        pricingDetails: {
            subscriptionLength: {
                font: string;
                letterSpacing: string;
            };
            normalDiscountedPricing: {
                font: string;
                letterSpacing: string;
            };
            continuedPrice: string;
        };
    };
};
export declare const subscriptionConfirmationPage: {
    onboardingTitle: {
        font: string;
        letterSpacing: string;
    };
    onboardingBreadcrumb: string;
    cardTwoStepSubBeforeReg: {
        font: string;
        letterSpacing: string;
    };
    completeYourProfileForm: {
        title: string;
        terms: string;
    };
};
export declare const subscriberOffer: {
    title: string;
    small: string;
    base: string;
    large: string;
    offerLength: string;
    terms: string;
    list: string;
};
export declare const blockQuoteOld: {
    quoteText: import('styled-components').RuleSet<object>;
    citation: import('styled-components').RuleSet<object>;
    liveblog: {
        foo: import('styled-components').RuleSet<object>;
        bar: import('styled-components').RuleSet<object>;
    };
};
export declare const numberBox: {
    title: {
        short: import('styled-components').RuleSet<object>;
        lengthX5and6: import('styled-components').RuleSet<object>;
        lengthX7and8: import('styled-components').RuleSet<object>;
        lengthX9and10: import('styled-components').RuleSet<object>;
    };
    content: import('styled-components').RuleSet<object>;
};
export declare const infoBoxDefault: {
    title: import('styled-components').RuleSet<object>;
    subheading: import('styled-components').RuleSet<object>;
    paragraph: import('styled-components').RuleSet<object>;
    list: import('styled-components').RuleSet<object>;
    crosshead: import('styled-components').RuleSet<object>;
};
export declare const blockQuote: {
    quoteText: {
        mobile: {
            font: string;
        };
        tablet: {
            font: string;
        };
        laptop: {
            font: string;
        };
    };
    citation: string;
};
export declare const infoBox: {
    text: string;
    headline: string;
    subheadline: string;
    crosshead: {
        font: string;
        textTransform: TextTransform;
    };
};
export declare const verdict: {
    h2: string;
    h5: {
        font: string;
        letterSpacing: string;
        textTransform: TextTransform;
    };
};
export declare const globalNavBarLink: import('styled-components').RuleSet<object>;
export declare const registerLoginButton: {
    base: import('styled-components').RuleSet<object>;
    loggedIn: import('styled-components').RuleSet<object>;
    status: import('styled-components').RuleSet<object>;
    link: import('styled-components').RuleSet<object>;
    support: import('styled-components').RuleSet<object>;
};
export declare const editionSwitcher: {
    link: import('styled-components').RuleSet<object>;
    trigger: import('styled-components').RuleSet<object>;
    change: import('styled-components').RuleSet<object>;
};
export declare const registerWall: {
    variantThree: {
        title: {
            font: string;
            letterSpacing: string;
        };
        subTitle: string;
        featureListTitle: string;
        checkboxLabel: string;
        alreadyHaveAnAccountLink: string;
    };
};
export declare const faq: {
    header: string;
    title: {
        small: string;
        base: string;
    };
    content: string;
    viewAll: string;
};
export declare const downloadAppFaq: {
    title: {
        base: string;
        large: string;
    };
    section: {
        title: string;
        content: string;
    };
    link: import('styled-components').RuleSet<object>;
};
export declare const subscribeOrConsent: {
    headline: {
        mobile: string;
        tablet: string;
    };
    card: {
        headline: string;
        subHeadline: {
            mobile: string;
            tablet: string;
        };
        terms: {
            mobile: string;
            tablet: string;
        };
        copy: string;
        dropdown: string;
    };
};
export declare const dropdownForCard: {
    content: string;
};
export declare const subscribePopup: {
    heading: string;
    content: {
        base: string;
        small: string;
        bold: string;
        link: string;
    };
};
export declare const voucherTicker: {
    title: string;
    detail: string;
    CTA: {
        font: string;
        textDecoration: TextDecoration;
        textDecorationThickness: string;
        textUnderlineOffset: string;
    };
};
export declare const eBook: {
    featuredTitle: string;
    title: string;
    downloadLink: import('styled-components').RuleSet<object>;
    description: {
        base: string;
        large: string;
    };
};
export declare const event: {
    headline: string;
    title: {
        base: string;
        large: string;
    };
    subtitle: string;
    header: string;
    content: string;
    list: {
        title: string;
        content: string;
    };
    section: {
        heading: string;
        subheading: string;
        details: string;
    };
    date: string;
    link: import('styled-components').RuleSet<object>;
};
export declare const commentCountLabel: import('styled-components').RuleSet<object>;
export declare const breadcrumb: {
    soloPage: import('styled-components').RuleSet<object>;
    articlePage: import('styled-components').RuleSet<object>;
};
export declare const footer: {
    nav: import('styled-components').RuleSet<object>;
    navSectionLink: import('styled-components').RuleSet<object>;
    navItemLink: import('styled-components').RuleSet<object>;
};
/**  Used for the amp version of bookmark modal
 * TODO Remove this once the no amp FF is removed
 **/
export declare const bookmarkLightbox: {
    heading: import('styled-components').RuleSet<object>;
    paragraph: import('styled-components').RuleSet<object>;
    span: {
        text: import('styled-components').RuleSet<object>;
        link: import('styled-components').RuleSet<object>;
    };
    subscribeBtn: import('styled-components').RuleSet<object>;
    closeBtn: import('styled-components').RuleSet<object>;
};
export declare const bookmarkModal: {
    heading: {
        small: import('styled-components').RuleSet<object>;
        base: import('styled-components').RuleSet<object>;
    };
    paragraph: {
        small: import('styled-components').RuleSet<object>;
        base: import('styled-components').RuleSet<object>;
    };
    loginCopy: {
        text: import('styled-components').RuleSet<object>;
    };
};
export declare const bookmarkPage: {
    heading: string;
    paragraph: string;
    removeBtn: import('styled-components').RuleSet<object>;
    template: {
        title: string;
        lead: string;
        info: string;
        description: {
            base: string;
            large: string;
        };
    };
    readMore: {
        base: import('styled-components').RuleSet<object>;
    };
};
export declare const newsletterPage: {
    heading: string;
    subheading: string;
    paragraph: string;
    previewBtn: import('styled-components').RuleSet<object>;
};
export declare const sponsorBanner: {
    prefixName: import('styled-components').RuleSet<object>;
};
export declare const table: {
    header: import('styled-components').RuleSet<object>;
    body: import('styled-components').RuleSet<object>;
};
export declare const topic: {
    heading: import('styled-components').RuleSet<object>;
    link: import('styled-components').RuleSet<object>;
};
export declare const meta: {
    byline: {
        small: import('styled-components').RuleSet<object>;
        base: import('styled-components').RuleSet<object>;
    };
    authorLinkSans: import('styled-components').RuleSet<object>;
    authorLinkSerif: import('styled-components').RuleSet<object>;
};
export declare const bettingDisclaimerMessage: import('styled-components').RuleSet<object>;
export declare const affiliateWidget: {
    heading: import('styled-components').RuleSet<object>;
    offer: import('styled-components').RuleSet<object>;
};
export declare const articleLink: import('styled-components').RuleSet<object>;
export declare const articleDropCap: import('styled-components').RuleSet<object>;
export declare const galleryCount: import('styled-components').RuleSet<object>;
export declare const voucher: {
    title: import('styled-components').RuleSet<object>;
    heading: import('styled-components').RuleSet<object>;
    text: import('styled-components').RuleSet<object>;
};
export declare const supportNSC: {
    titleMobile: import('styled-components').RuleSet<object>;
    titleTablet: import('styled-components').RuleSet<object>;
    dropdown: import('styled-components').RuleSet<object>;
    copy: import('styled-components').RuleSet<object>;
    authorName: import('styled-components').RuleSet<object>;
    authorCopy: import('styled-components').RuleSet<object>;
};
export declare const donation: {
    heading: import('styled-components').RuleSet<object>;
    subHeading: import('styled-components').RuleSet<object>;
    base: import('styled-components').RuleSet<object>;
};
export declare const supportDrawerContent: {
    copy: import('styled-components').RuleSet<object>;
    button: import('styled-components').RuleSet<object>;
};
export declare const supportUsButton: {
    mobile: import('styled-components').RuleSet<object>;
    tablet: import('styled-components').RuleSet<object>;
};
export declare const profile: {
    subscription: {
        offerToJoin: {
            title: string;
            subtitle: string;
        };
        cancellation: {
            mobile: {
                title: string;
                subtitle: string;
            };
            tablet: {
                title: string;
                subtitle: string;
            };
            laptop: {
                title: string;
            };
        };
    };
};
export declare const moreMenu: {
    base: string;
    child: string;
    list: {
        base: string;
        link: string;
        secondaryLink: string;
    };
    title: import('styled-components').RuleSet<object>;
};
export declare const drawerMenu: {
    base: string;
    tempLink: string;
    navTrigger: {
        title: import('styled-components').RuleSet<object>;
        desc: string;
    };
    navList: {
        expanded: string;
    };
};
export declare const ourStory: {
    title: string;
    menu: {
        mobile: string;
        mobileL: string;
        tablet: string;
    };
};
export declare const newsletterPreferences: {
    newsletter: {
        title: string;
        standfirst: string;
        frequency: string;
        premiumBadge: import('styled-components').RuleSet<object>;
        viewSample: import('styled-components').RuleSet<object>;
    };
    filterButton: string;
    filterToggle: string;
    featuredNewsletter: {
        title: string;
        standfirst: string;
    };
    loggedOutForm: {
        dropdownTrigger: string;
        checkboxLabel: string;
    };
};
export declare const sponsoredNSC: {
    copy: import('styled-components').RuleSet<object>;
};
export declare const AuthorHighlight: {
    default: {
        small: import('styled-components').RuleSet<object>;
        base: import('styled-components').RuleSet<object>;
        large: import('styled-components').RuleSet<object>;
    };
    special: {
        base: import('styled-components').RuleSet<object>;
        large: import('styled-components').RuleSet<object>;
    };
};
//# sourceMappingURL=base.d.ts.map
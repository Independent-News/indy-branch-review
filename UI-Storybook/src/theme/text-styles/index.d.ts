/**
 * @explain This step is necessary in order to allow the imported modules to be
 * merged into the base theme. Modules are not supported by Ramda's
 * mergeDeepRight function and so spreading them here produces new objects from
 * them.
 */
export declare const base: {
    h1: import('styled-components').RuleSet<object>;
    h2: import('styled-components').RuleSet<object>;
    h3: import('styled-components').RuleSet<object>;
    h4: import('styled-components').RuleSet<object>;
    h5: import('styled-components').RuleSet<object>;
    h6: import('styled-components').RuleSet<object>;
    p: import('styled-components').RuleSet<object>;
    a: import('styled-components').RuleSet<object>;
    label: import('styled-components').RuleSet<object>;
    smallLabel: import('styled-components').RuleSet<object>;
    headline: {
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
    subheadline: {
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
    blockQuoteQuote: "bold 3.5em Georgia";
    tag: import('./text-styles.types').TagStyleBySize;
    storyCard: {
        relatedLinks: {
            carousel: {
                font: string;
                'text-transform': string;
            };
        };
    };
    recommendedLinks: {
        font: string;
        letterSpacing: string;
    };
    button: {
        base: string;
        medium: string;
        large: string;
        xLarge: string;
        xLargeStrikeThrough: import('styled-components').RuleSet<object>;
    };
    buttonGroup: {
        base: string;
    };
    checkbox: {
        xSmall: string;
        small: string;
        base: string;
        large: string;
    };
    body: {
        h2: string;
        h3: string;
        list: string;
    };
    ImageTile: {
        title: string;
    };
    tooltip: {
        base: string;
    };
    media: {
        caption: string;
        pagination: string;
    };
    quote: {
        quoteText: {
            mobile: string;
            tablet: string;
            laptop: string;
        };
        title: string;
        citation: string;
    };
    capsule: {
        base: string;
    };
    relatedStoriesHeadline: {
        base: string;
    };
    premiumBadge: {
        base: string;
    };
    premiumIntro: {
        base: string;
    };
    priceList: {
        updated: string;
        action: string;
        price: string;
    };
    controlImage: "bold 15px/1.4 'Indy Serif', 'Indy Serif Fallback', serif";
    productComparison: {
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
    booking: {
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
    specsList: {
        small: string;
        base: string;
    };
    continueReading: import('styled-components').RuleSet<object>;
    productTitle: {
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
    productCarouselCardBestFor: {
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
    productCarouselCardTitle: {
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
    productCarouselCardPrice: {
        font: string;
        lineHeight: string;
        strikeThrough: import('styled-components').RuleSet<object>;
    };
    formInput: {
        base: string;
        label: string;
        helpText: string;
        error: string;
        hint: string;
        link: import('styled-components').RuleSet<object>;
        labelInset: string;
    };
    radioButton: {
        label: import('styled-components').RuleSet<object>;
    };
    sellingPage: {
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
    subscriptionPricingCard: {
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
    subscriptionConfirmationPage: {
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
    subscriberOffer: {
        title: string;
        small: string;
        base: string;
        large: string;
        offerLength: string;
        terms: string;
        list: string;
    };
    blockQuoteOld: {
        quoteText: import('styled-components').RuleSet<object>;
        citation: import('styled-components').RuleSet<object>;
        liveblog: {
            foo: import('styled-components').RuleSet<object>;
            bar: import('styled-components').RuleSet<object>;
        };
    };
    numberBox: {
        title: {
            short: import('styled-components').RuleSet<object>;
            lengthX5and6: import('styled-components').RuleSet<object>;
            lengthX7and8: import('styled-components').RuleSet<object>;
            lengthX9and10: import('styled-components').RuleSet<object>;
        };
        content: import('styled-components').RuleSet<object>;
    };
    infoBoxDefault: {
        title: import('styled-components').RuleSet<object>;
        subheading: import('styled-components').RuleSet<object>;
        paragraph: import('styled-components').RuleSet<object>;
        list: import('styled-components').RuleSet<object>;
        crosshead: import('styled-components').RuleSet<object>;
    };
    blockQuote: {
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
    infoBox: {
        text: string;
        headline: string;
        subheadline: string;
        crosshead: {
            font: string;
            textTransform: import('./text-styles.types').TextTransform;
        };
    };
    verdict: {
        h2: string;
        h5: {
            font: string;
            letterSpacing: string;
            textTransform: import('./text-styles.types').TextTransform;
        };
    };
    globalNavBarLink: import('styled-components').RuleSet<object>;
    registerLoginButton: {
        base: import('styled-components').RuleSet<object>;
        loggedIn: import('styled-components').RuleSet<object>;
        status: import('styled-components').RuleSet<object>;
        link: import('styled-components').RuleSet<object>;
        support: import('styled-components').RuleSet<object>;
    };
    editionSwitcher: {
        link: import('styled-components').RuleSet<object>;
        trigger: import('styled-components').RuleSet<object>;
        change: import('styled-components').RuleSet<object>;
    };
    registerWall: {
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
    faq: {
        header: string;
        title: {
            small: string;
            base: string;
        };
        content: string;
        viewAll: string;
    };
    downloadAppFaq: {
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
    subscribeOrConsent: {
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
    dropdownForCard: {
        content: string;
    };
    subscribePopup: {
        heading: string;
        content: {
            base: string;
            small: string;
            bold: string;
            link: string;
        };
    };
    voucherTicker: {
        title: string;
        detail: string;
        CTA: {
            font: string;
            textDecoration: import('./text-styles.types').TextDecoration;
            textDecorationThickness: string;
            textUnderlineOffset: string;
        };
    };
    eBook: {
        featuredTitle: string;
        title: string;
        downloadLink: import('styled-components').RuleSet<object>;
        description: {
            base: string;
            large: string;
        };
    };
    event: {
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
    commentCountLabel: import('styled-components').RuleSet<object>;
    breadcrumb: {
        soloPage: import('styled-components').RuleSet<object>;
        articlePage: import('styled-components').RuleSet<object>;
    };
    footer: {
        nav: import('styled-components').RuleSet<object>;
        navSectionLink: import('styled-components').RuleSet<object>;
        navItemLink: import('styled-components').RuleSet<object>;
    };
    bookmarkLightbox: {
        heading: import('styled-components').RuleSet<object>;
        paragraph: import('styled-components').RuleSet<object>;
        span: {
            text: import('styled-components').RuleSet<object>;
            link: import('styled-components').RuleSet<object>;
        };
        subscribeBtn: import('styled-components').RuleSet<object>;
        closeBtn: import('styled-components').RuleSet<object>;
    };
    bookmarkModal: {
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
    bookmarkPage: {
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
    newsletterPage: {
        heading: string;
        subheading: string;
        paragraph: string;
        previewBtn: import('styled-components').RuleSet<object>;
    };
    sponsorBanner: {
        prefixName: import('styled-components').RuleSet<object>;
    };
    table: {
        header: import('styled-components').RuleSet<object>;
        body: import('styled-components').RuleSet<object>;
    };
    topic: {
        heading: import('styled-components').RuleSet<object>;
        link: import('styled-components').RuleSet<object>;
    };
    meta: {
        byline: {
            small: import('styled-components').RuleSet<object>;
            base: import('styled-components').RuleSet<object>;
        };
        authorLinkSans: import('styled-components').RuleSet<object>;
        authorLinkSerif: import('styled-components').RuleSet<object>;
    };
    bettingDisclaimerMessage: import('styled-components').RuleSet<object>;
    affiliateWidget: {
        heading: import('styled-components').RuleSet<object>;
        offer: import('styled-components').RuleSet<object>;
    };
    articleLink: import('styled-components').RuleSet<object>;
    articleDropCap: import('styled-components').RuleSet<object>;
    galleryCount: import('styled-components').RuleSet<object>;
    voucher: {
        title: import('styled-components').RuleSet<object>;
        heading: import('styled-components').RuleSet<object>;
        text: import('styled-components').RuleSet<object>;
    };
    supportNSC: {
        titleMobile: import('styled-components').RuleSet<object>;
        titleTablet: import('styled-components').RuleSet<object>;
        dropdown: import('styled-components').RuleSet<object>;
        copy: import('styled-components').RuleSet<object>;
        authorName: import('styled-components').RuleSet<object>;
        authorCopy: import('styled-components').RuleSet<object>;
    };
    donation: {
        heading: import('styled-components').RuleSet<object>;
        subHeading: import('styled-components').RuleSet<object>;
        base: import('styled-components').RuleSet<object>;
    };
    supportDrawerContent: {
        copy: import('styled-components').RuleSet<object>;
        button: import('styled-components').RuleSet<object>;
    };
    supportUsButton: {
        mobile: import('styled-components').RuleSet<object>;
        tablet: import('styled-components').RuleSet<object>;
    };
    profile: {
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
    moreMenu: {
        base: string;
        child: string;
        list: {
            base: string;
            link: string;
            secondaryLink: string;
        };
        title: import('styled-components').RuleSet<object>;
    };
    drawerMenu: {
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
    ourStory: {
        title: string;
        menu: {
            mobile: string;
            mobileL: string;
            tablet: string;
        };
    };
    newsletterPreferences: {
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
    sponsoredNSC: {
        copy: import('styled-components').RuleSet<object>;
    };
    AuthorHighlight: {
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
};
export declare const luxury: {
    h2: import('styled-components').RuleSet<object>;
    h3: import('styled-components').RuleSet<object>;
    h4: import('styled-components').RuleSet<object>;
    h5: import('styled-components').RuleSet<object>;
    h6: import('styled-components').RuleSet<object>;
    p: import('styled-components').RuleSet<object>;
    a: import('styled-components').RuleSet<object>;
};
//# sourceMappingURL=index.d.ts.map
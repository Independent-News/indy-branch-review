import { default as SocialShareButtons } from './SocialShareButtons';
import { SocialMedia } from './SocialShareButtons.types';
declare namespace _default {
    export let title: string;
    export { SocialShareButtons as component };
}
export default _default;
export namespace Default {
    export { SocialShareButtons as render };
    export namespace args {
        let buttons: {
            type: SocialMedia;
            url: string;
        }[];
    }
}
export namespace WithMobileOnly {
    export { SocialShareButtons as render };
    export namespace args_1 {
        let mobileOnlyButtons: SocialMedia[];
    }
    export { args_1 as args };
}
//# sourceMappingURL=SocialShareButtons.stories.d.ts.map
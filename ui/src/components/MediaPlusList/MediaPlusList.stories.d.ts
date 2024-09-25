import { default as MediaPlusList } from './MediaPlusList';
export function Media(): import("react/jsx-runtime").JSX.Element;
declare namespace _default {
    export let title: string;
    export { MediaPlusList as component };
    export namespace argTypes {
        namespace media {
            let description: string;
            namespace control {
                let disable: boolean;
            }
        }
        namespace items {
            let description_1: string;
            export { description_1 as description };
            export namespace control_1 {
                let type: string;
            }
            export { control_1 as control };
        }
    }
}
export default _default;
export namespace Default {
    export { defaultArgs as args };
}
declare namespace defaultArgs {
    let media_1: import("react/jsx-runtime").JSX.Element;
    export { media_1 as media };
    let items_1: {
        title: string;
        body: string;
    }[];
    export { items_1 as items };
}
//# sourceMappingURL=MediaPlusList.stories.d.ts.map
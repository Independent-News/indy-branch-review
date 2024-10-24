import { default as Image } from '.';
import { LAYOUT_FIXED } from './Image.constants';
declare namespace _default {
    export let title: string;
    export { Image as component };
    export let tags: string[];
    export namespace argTypes {
        namespace height {
            export namespace _if {
                export let arg: string;
                export { LAYOUT_FIXED as eq };
            }
            export { _if as if };
        }
        namespace width {
            export namespace _if_1 {
                let arg_1: string;
                export { arg_1 as arg };
                export { LAYOUT_FIXED as eq };
            }
            export { _if_1 as if };
        }
    }
}
export default _default;
export const Default: {};
//# sourceMappingURL=Image.stories.d.ts.map
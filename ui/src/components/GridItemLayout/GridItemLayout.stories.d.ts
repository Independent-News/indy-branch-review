declare namespace _default {
    export { defaultArgs as args };
    export let title: string;
    export namespace argTypes {
        namespace sections {
            let description: string;
            namespace control {
                let type: string;
            }
        }
    }
}
export default _default;
export namespace Default {
    function render(): import("react/jsx-runtime").JSX.Element;
}
export namespace Layout4 { }
export namespace Layout3 { }
export namespace Layout2 { }
declare namespace defaultArgs {
    let sections_1: {
        name: string;
        tid: string;
        path: string;
        hero: {
            data: {
                url: string;
                extra: {
                    imageSize: {
                        width: number;
                        height: number;
                    };
                };
            };
        };
    }[];
    export { sections_1 as sections };
}
//# sourceMappingURL=GridItemLayout.stories.d.ts.map
import { default as Dropdown } from './Dropdown';
declare namespace _default {
    export let title: string;
    export { Dropdown as component };
    export namespace argTypes {
        namespace trigger {
            let value: string;
            namespace type {
                let name: string;
                let required: boolean;
            }
            namespace control {
                let type_1: string;
                export { type_1 as type };
            }
        }
        namespace children {
            let value_1: string;
            export { value_1 as value };
            export namespace type_2 {
                let name_1: string;
                export { name_1 as name };
                let required_1: boolean;
                export { required_1 as required };
            }
            export { type_2 as type };
            export namespace control_1 {
                let type_3: string;
                export { type_3 as type };
            }
            export { control_1 as control };
        }
        namespace size {
            export namespace control_2 {
                let type_4: string;
                export { type_4 as type };
            }
            export { control_2 as control };
        }
    }
}
export default _default;
export namespace Default {
    namespace args {
        let trigger_1: string;
        export { trigger_1 as trigger };
        let children_1: string;
        export { children_1 as children };
        export let isOpen: boolean;
    }
}
export namespace Open {
    export namespace args_1 {
        let trigger_2: string;
        export { trigger_2 as trigger };
        let children_2: string;
        export { children_2 as children };
        let isOpen_1: boolean;
        export { isOpen_1 as isOpen };
    }
    export { args_1 as args };
}
export namespace Closed {
    export namespace args_2 {
        let trigger_3: string;
        export { trigger_3 as trigger };
        let children_3: string;
        export { children_3 as children };
        let isOpen_2: boolean;
        export { isOpen_2 as isOpen };
    }
    export { args_2 as args };
}
export namespace Stateful {
    export namespace args_3 {
        let trigger_4: string;
        export { trigger_4 as trigger };
        let children_4: string;
        export { children_4 as children };
    }
    export { args_3 as args };
    export namespace argTypes_1 {
        export namespace isOpen_3 {
            namespace table {
                let disable: boolean;
            }
        }
        export { isOpen_3 as isOpen };
    }
    export { argTypes_1 as argTypes };
    export function render(args: any): import("react/jsx-runtime").JSX.Element;
}
export namespace Disabled {
    export namespace args_4 {
        let trigger_5: string;
        export { trigger_5 as trigger };
        let children_5: string;
        export { children_5 as children };
        export let disabled: boolean;
    }
    export { args_4 as args };
}
export namespace CustomTrigger {
    export namespace args_5 {
        let trigger_6: string;
        export { trigger_6 as trigger };
        let children_6: string;
        export { children_6 as children };
    }
    export { args_5 as args };
    export function render_1(args: any): import("react/jsx-runtime").JSX.Element;
    export { render_1 as render };
}
export namespace CustomInitialHeight {
    export namespace args_6 {
        let trigger_7: string;
        export { trigger_7 as trigger };
        let children_7: string;
        export { children_7 as children };
    }
    export { args_6 as args };
    export function render_2(args: any): import("react/jsx-runtime").JSX.Element;
    export { render_2 as render };
}
//# sourceMappingURL=Dropdown.stories.d.ts.map
import { propTypes } from './Dropdown.types';
export default Dropdown;
export function DropdownStateful({ defaultOpen, ...props }: {
    [x: string]: any;
    defaultOpen?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
export namespace DropdownStateful {
    export { propTypes };
}
/**
 * A simple dropdown for toggling the visibility of content through interacting with a trigger
 */
declare function Dropdown({ id, className, trigger, children, isOpen, disabled, onInteract, role, }: {
    id: any;
    className: any;
    trigger: any;
    children: any;
    isOpen?: boolean | undefined;
    disabled?: boolean | undefined;
    onInteract: any;
    role: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Dropdown {
    export { propTypes };
}
//# sourceMappingURL=Dropdown.d.ts.map
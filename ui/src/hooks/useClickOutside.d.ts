import { MutableRefObject } from 'react';
export type UseClickCallback = () => void;
/**
 * Custom React hook that triggers a callback function when a click is detected outside
 * of the specified element.
 *
 * This is useful for closing dropdowns, modals, or any other
 * components that should be hidden when the user clicks outside of them.
 *
 * @param callback - A callback function that is executed when a click outside the element is detected.
 * NOTE: remember to wrap the callback in useCallback if there are concerns about unnecessary re-renders
 * @returns A mutable ref object that should be attached to the element you want to monitor for outside clicks.
 *
 * @example
 * const closeDropdown =  useCallback(() => {() => setIsOpen(false)}, [setIsOpen]);
 * const dropdownRef = useClickOutside<HTMLDivElement>(closeDropdown);
 *
 * return (
 *   <div ref={dropdownRef}>
 *     dropdown content here
 *   </div>
 * );
 */
declare function useClickOutside<T extends HTMLElement>(callback: UseClickCallback): MutableRefObject<T | null>;
export default useClickOutside;
//# sourceMappingURL=useClickOutside.d.ts.map
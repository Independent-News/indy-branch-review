import { FC } from 'react';
import { SpecsListProps } from './SpecsList.types';
/**
 * This component is designed to display a list of specifications.
 * It supports rendering a collection of items, where each item
 * consists of a label, a value, and an optional sublist of specifications.
 * When a sublist is present, it is displayed as a nested set of specifications.
 *
 * @component
 * @example
 * Example usage of SpecsList on a product page:
 * const items = [
 *   { label: 'Best', value: 'Example Best For' },
 *   { label: 'Spec1', value: 'Value1' },
 *   {
 *     label: 'Why we love it',
 *     sublist: [
 *       { svg: TickSVG, value: 'Pro1' },
 *       { svg: TickSVG, value: 'Pro2' },
 *     ],
 *   },
 *   {
 *     label: 'Take note',
 *     sublist: [
 *       { svg: CrossSVG, value: 'Con1' },
 *       { svg: CrossSVG, value: 'Con2' },
 *     ],
 *   },
 * ];
 * <SpecsList items={items} />
 */
declare const SpecsList: FC<SpecsListProps>;
export default SpecsList;
//# sourceMappingURL=SpecsList.d.ts.map
import { FC } from 'react';
import { ProductViewLayoutProps } from './ProductViewLayout.types';
/**
 * This component is designed to structure and layout content with a segmented two-column arrangement. They stack in a single column on mobile in the order of top, left, right. The primary use case for this component is for product pages.
 * @param {ProductViewProps} props
 * @returns {React.ReactElement}
 * @example
 * import { ProductViewLayout } from 'ui';
 * const ProductView = () => (
 *  <ProductViewLayout
 *   top={<div>Top section</div>}
 *   left={<div>Left section</div>}
 *   right={<div>Right section</div>}
 *  />
 * );
 */
declare const ProductViewLayout: FC<ProductViewLayoutProps>;
export default ProductViewLayout;
//# sourceMappingURL=ProductViewLayout.d.ts.map
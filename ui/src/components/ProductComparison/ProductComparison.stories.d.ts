import { Meta, StoryObj } from '@storybook/react';
import { default as ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { default as ProductComparison } from './ProductComparison';
/**
 * @todo fix storyshotting of ProductComparison. It is currently being skipped
 * due to async behaviour.
 */
declare const meta: Meta<typeof ProductComparison>;
export default meta;
type Story = StoryObj<typeof ProductCarousel>;
export declare const Default: Story;
//# sourceMappingURL=ProductComparison.stories.d.ts.map
import { CLASS_JS_PRODUCT } from '#app/constants/classNames';

import Product from './modules/product';

(function () {
  const config = window.JSGlobals.products;
  const products = document.getElementsByClassName(
    CLASS_JS_PRODUCT,
  ) as HTMLCollectionOf<HTMLElement>;

  [...products]
    .map((product) => new Product(product, config))
    .map((product) => product.init())
    .reduce(
      (acc, product) => {
        acc[product.targetId] = product;
        return acc;
      },
      {} as Record<string, Product>,
    );
})();

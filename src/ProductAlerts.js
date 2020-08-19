import React from 'react';
import {products} from './products';

const ProductAlerts = ({ product, show }) => {
  let productAlerts;

  if (product.price >= 300) {
    productAlerts = <p>
      <button onClick={show}>Click Me</button>
    </p>;
  }

  return <div className="product-alerts">{productAlerts}</div>
};

export default ProductAlerts;

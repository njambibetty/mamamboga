import React from 'react';

import ProductAlerts from './ProductAlerts';

import {products} from './products';



const ProductList = ({ name }) => {
  const Buy = () => {
    window.alert('You have bought a product');
  }

  const onShow = () => {
    window.alert('You got an offer');
  }

  return (
    <div className="product-list">
      <h2>Products</h2>

      {products.map(product => {
        return (
          <div class="items">
            <h3>
              <a title={`${product.name} details`}>
                { product.name }
              </a>
            </h3>

            <img src={product.image}></img>
            {product.type && <p>{`Type: ${product.type}`}</p>}
            <h3>
              <a title={`${product.quantity} details`}>
                { product.quantity }
              </a>
            </h3>
            <h3>
              <a title={`${product.price} details`}>
                { product.price }/=
              </a>
            </h3>
            <button onClick={Buy}>
              Buy
            </button>
            <ProductAlerts product={product} show={onShow} />
          </div>
        )
      })}
    </div>
  )
};

export default ProductList;
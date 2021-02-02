import React from 'react';
import './Product.css';
import holesImg from './img/holes.jpg';
function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The title</p>
        <p className="product_price">
          <small>$</small>
          <strong>25.00</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src={holesImg} alt="holes" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

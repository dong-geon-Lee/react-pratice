import React from "react";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <div className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </div>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="product-image" />
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;

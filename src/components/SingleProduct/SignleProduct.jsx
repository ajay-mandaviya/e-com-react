import React from "react";
import Rating from "../Rating/Rating";
import "./singleProduct.css";
const SignleProduct = ({ product }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={product.img} alt="" className="responsive-img" />
      </div>
      <button className="btn-badge">
        <i className="fas fa-heart"></i>
      </button>
      <div className="card-description">
        <div className="card-info">
          <h2 className="card-title">{product.name}</h2>
          <span className="card-subtitle">
            {product.infoTitle.slice(0, 20).concat("...")}
          </span>
          <div className="rating">
            <Rating rating={product.rating} key={product._id} />
          </div>
          <div className="price">
            <h4>&#x20b9; {product.price}</h4>
          </div>
          <div>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>5 Days Delivery</div>
            )}
          </div>
        </div>
        <button className="card-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default SignleProduct;

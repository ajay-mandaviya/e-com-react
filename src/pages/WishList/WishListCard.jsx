import React from "react";
import Rating from "../../components/Rating/Rating";
import { MOVE_TO_CART } from "../../constant/actionTypes";
import { useStateContext } from "../../context/DataContextProvider";

const WishListCard = ({ product }) => {
  const { dispatch } = useStateContext();

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.img} alt="" className="responsive-img" />
      </div>
      <button className="action-button">
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <div className="card-description">
        <div className="card-info">
          <h2 className="card-title">{product.name}</h2>
          <span className="card-subtitle">
            {product.infoTitle.slice(0, 20).concat("...")}
          </span>
          <div className="rating">
            <Rating rating={product.rating} />
          </div>
          <div className="price">
            <h4>&#x20b9; {product.price}</h4>
          </div>
        </div>
        <button className="card-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default WishListCard;

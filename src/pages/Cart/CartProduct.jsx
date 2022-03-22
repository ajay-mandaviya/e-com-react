import React from "react";
import {
  MOVE_TO_WISHLIST,
  REMOVE_FROM_CART,
  INCREASE_CART_QUANTITY,
} from "../../constant/actionTypes";
import { useStateContext } from "../../context/DataContextProvider";

const CartProduct = ({ product }) => {
  const { dispatch } = useStateContext();

  return (
    <div className="card-horizontal">
      <div className="card-img">
        <img src={product.img} alt="" className="responsive-img" />
      </div>

      <div className="card-horizontal-description text-bold">
        <span className="card-subtitle">{product.infoTitle}</span>
        <div>
          <p className="card-off-rate text-bold">{product.offRate} off</p>
        </div>
        <div className="price">
          <h3>&#x20b9; {product.price}</h3>
          <span className="off-price">&#x20b9; {product.originalPrice}</span>
        </div>
        <div className="manage-item flex">
          <span>Quantity</span>
          <div className="manage-item-buttons">
            <button className="">-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <div className="card-btns">
          <button
            className="card-btn"
            onClick={() => {
              dispatch({
                type: REMOVE_FROM_CART,
                payload: product,
              });
            }}
          >
            Remove From Cart
          </button>
          <button
            className="card-btn-outline"
            onClick={() => {
              dispatch({
                type: MOVE_TO_WISHLIST,
                payload: product,
              });
            }}
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

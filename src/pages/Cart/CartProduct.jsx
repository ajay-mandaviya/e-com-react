import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MOVE_TO_WISHLIST,
  REMOVE_FROM_CART,
  INCREASE_CART_QUANTITY,
} from "../../constant/actionTypes";
import { useAuth } from "../../context/AuthContextProvider";
import { useStateContext } from "../../context/DataContextProvider";
import {
  addToWishList,
  removeFromcartApi,
  updateCartQty,
} from "../../services";

const CartProduct = ({ product }) => {
  const navigate = useNavigate();
  const {
    data: { isDataLoading, wishList },
    dispatch,
  } = useStateContext();
  const {
    authUser: { token },
  } = useAuth();
  console.log("wishlist in cart", wishList);
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
            <button
              disabled={product.qty <= 1}
              onClick={() => {
                updateCartQty("QTY_DECREMENT", dispatch, product._id, token);
              }}
            >
              -
            </button>
            <span>{product.qty}</span>
            <button
              onClick={() => {
                updateCartQty("QTY_INCREMENT", dispatch, product._id, token);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="card-btns">
          <button
            className="card-btn"
            onClick={() => {
              removeFromcartApi(dispatch, product._id, token);
            }}
          >
            Remove From Cart
          </button>

          {wishList.some(
            (WishListproduct) => WishListproduct._id === product._id
          ) ? (
            <button
              className="card-btn-outline"
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              Already In WishList
            </button>
          ) : (
            <button
              className="card-btn-outline"
              onClick={() => {
                addToWishList(dispatch, product, token);
                removeFromcartApi(dispatch, product._id, token);
              }}
            >
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

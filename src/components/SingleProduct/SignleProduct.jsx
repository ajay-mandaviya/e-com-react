import React from "react";
import { ADD_TO_CART, ADD_TO_WISHLIST } from "../../constant/actionTypes";
import { useAuth } from "../../context/AuthContextProvider";
import { useStateContext } from "../../context/DataContextProvider";
import { useNavigate } from "react-router-dom";
import { checkIsProductInWishlist } from "../../utils/arrayFilter";
import Rating from "../Rating/Rating";
import "./singleProduct.css";

const SignleProduct = ({ product }) => {
  const navigate = useNavigate();
  const {
    data: { cart, wishList },
    dispatch,
  } = useStateContext();

  const {
    authUser: { token },
  } = useAuth();

  const isInWishList = checkIsProductInWishlist(wishList, product._id);

  const handleAddToCart = () => {
    if (!token) {
      alert("you are not login");
      navigate("/login");
    } else {
      dispatch({
        type: ADD_TO_CART,
        payload: product,
      });
    }
  };
  const handleAddToWishList = () => {
    if (!token) {
      alert("you are not login");
      navigate("/login");
    } else {
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: product,
      });
    }
  };
  return (
    <div className="card">
      <div className="card-img">
        <img src={product.img} alt="" className="responsive-img" />
      </div>
      <button className="btn-badge" onClick={handleAddToWishList}>
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
        {cart.some((cart) => cart.id === product.id) ? (
          <button className="card-btn" onClick={() => {}}>
            Go to cart
          </button>
        ) : (
          <button
            className="card-btn"
            disabled={!product.inStock}
            style={{
              color: !product.inStock ? "black" : "white",
            }}
            onClick={handleAddToCart}
          >
            {!product.inStock ? "Out of Stock" : "Add To Cart"}
          </button>
        )}
        {/* <button className="card-btn">Add to cart</button> */}
      </div>
    </div>
  );
};

export default SignleProduct;

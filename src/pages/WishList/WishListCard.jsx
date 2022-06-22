import React from "react";
import Rating from "../../components/Rating/Rating";
import { useAuth, useStateContext } from "../../context";
import { addToCartApi, removeToWishListApi } from "../../services";
import { useNavigate } from "react-router-dom";
const WishListCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    data: { cart },
    dispatch,
  } = useStateContext();
  const {
    authUser: { token },
  } = useAuth();

  const handleRemoveWishList = () => {
    removeToWishListApi(dispatch, product._id, token);
  };
  return (
    <div className="card">
      <div className="card-img">
        <img src={product.img} alt="" className="responsive-img" />
      </div>

      <button className="action-button" onClick={handleRemoveWishList}>
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
        {cart.some((cart) => cart._id === product._id) ? (
          <button
            className="card-btn"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Go to Cart
          </button>
        ) : (
          <button
            className="card-btn"
            onClick={() => {
              addToCartApi(dispatch, product, token);
              removeToWishListApi(dispatch, product._id, token);
            }}
          >
            Move to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default WishListCard;

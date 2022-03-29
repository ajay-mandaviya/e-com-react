import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/DataContextProvider";
import { useDocumentTitle } from "../../hooks";
import "./cart.css";
import CartProduct from "./CartProduct";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const {
    data: { cart },
    dispatch,
  } = useStateContext();

  useDocumentTitle("Shopping Cart");

  return (
    <div className="cart-page">
      <div>
        <h2 className="text-bold text-center">My Cart</h2>
        <div className="cart-container">
          {cart.length === 0 ? (
            <p className="text-center">Cart is Empty</p>
          ) : (
            <>
              <div className="cart-card-grid">
                {cart.map((cartItem, index) => {
                  return <CartProduct product={cartItem} key={index} />;
                })}
              </div>
              <OrderSummary />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

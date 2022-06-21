import React, { useState } from "react";
import { useStateContext } from "../../context/DataContextProvider";
import "./cart.css";

const OrderSummary = () => {
  const {
    data: { cart },
  } = useStateContext();

  const totalOriginalPrice = cart.reduce((acc, product) => {
    let qty = product.qty ? product.qty : 1;
    return acc + product.originalPrice * qty;
  }, 0);

  const totalPrice = cart.reduce((acc, product) => {
    let qty = product.qty ? product.qty : 1;
    return acc + product.price * qty;
  }, 0);

  const discountPrice = cart.reduce((acc, product) => {
    let qty = product.qty ? product.qty : 1;
    return acc + (product.originalPrice - product.price) * qty;
  }, 0);

  return (
    <div className="summary-card">
      <div className="price-details">
        <h4 className="text-bold">PRICE DETAILS</h4>
        <hr />
        <div className="flex-between">
          <p>Price {`(${cart.length} Items)`} </p>
          <p>{totalOriginalPrice} </p>
        </div>
        <div className="flex-between">
          <p className="discount text-bold">Discount </p>
          <p className="discount text-bold">{discountPrice} </p>
        </div>
        <div className="flex-between">
          <p>Delivery charges </p>
          <p> Free </p>
        </div>
        <hr />
        <div className="flex-between">
          <p className="text-bold">TOTAL AMOUNT</p>
          <p className="text-bold">{totalPrice}</p>
        </div>
        <hr />
        <p>
          You will save <strong> {discountPrice}</strong> on this order
        </p>
        <button className="order-button">Place order</button>
      </div>
    </div>
  );
};

export default OrderSummary;

import React from "react";
import { useStateContext } from "../../context/DataContextProvider";
import { useDocumentTitle } from "../../hooks";
import "./wishlist.css";
import WishListCard from "./WishListCard";
const WishList = () => {
  const {
    data: { wishList },
  } = useStateContext();
  useDocumentTitle("Your WishList");
  return (
    <div className="wishlist-page">
      <h2 className="text-center">My Wishlist</h2>
      {wishList.length === 0 ? (
        <h2 className="text-center">Wishlist Is Empty</h2>
      ) : (
        <div className="wishlist-grid">
          {wishList.map((product) => {
            return <WishListCard product={product} key={product._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default WishList;

import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/DataContextProvider";
import { useAuth } from "../../context/AuthContextProvider";

const Nav = () => {
  const {
    authUser: { token },
    logoutAuth,
  } = useAuth();

  const {
    data: { cart, wishList },
  } = useStateContext();

  const navigate = useNavigate();
  const handleLoginNavigate = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    logoutAuth();
  };
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <h2>Men's Shop</h2>
        </Link>
      </div>
      <div className="search-input">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search...." />
      </div>
      <div className="header-profile">
        <div className="nav-mobile">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="nav-desktop">
          {token ? (
            <button className="header-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            // <div className="badge-container">
            //   <i class="fa-solid fa-user fa-2x"></i>
            // </div>
            <button className="header-btn" onClick={handleLoginNavigate}>
              Login
            </button>
          )}

          <div className="badge-container">
            <Link to={token ? "wishlist" : "/login"}>
              <i className="text-gray fa-solid fa-heart"></i>
              {token && (
                <div className="badge-notifications flex-center">
                  {wishList.length}
                </div>
              )}
            </Link>
          </div>
          <div className="badge-container">
            <Link to={token ? "/cart" : "/login"}>
              <i className="text-gray fa-solid fa-cart-shopping"></i>
              {token && (
                <div className="badge-notifications flex-center ">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

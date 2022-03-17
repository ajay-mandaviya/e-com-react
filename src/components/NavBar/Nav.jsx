import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const handleLoginNavigate = () => {
    navigate("/login");
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
          <button className="header-btn" onClick={handleLoginNavigate}>
            Login
          </button>

          <div className="badge-container">
            <Link to="/cart">
              <i className="text-gray fa-solid fa-heart"></i>
              <div className="badge-notifications flex-center">5</div>
            </Link>
          </div>
          <div className="badge-container">
            <Link to="/wishlist">
              <i className="text-gray fa-solid fa-cart-shopping"></i>
              <div className="badge-notifications flex-center ">10</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

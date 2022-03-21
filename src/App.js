import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Cart,
  Home,
  Login,
  Products,
  Profile,
  Signup,
  WishList,
  SingleProduct,
} from "./pages";
import Mockman from "mockman-js";
import { Nav } from "./components";
import { getProductApi, getCategories } from "./services/api";
import { useStateContext } from "./context/DataContextProvider";

function App() {
  const { dispatch } = useStateContext();

  useEffect(() => {
    getProductApi(dispatch);
    getCategories(dispatch);
  }, []);
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        {/* <Route path="/product/:productId" element={<SingleProduct />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;

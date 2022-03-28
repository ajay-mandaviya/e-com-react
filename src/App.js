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
import { Loader, Nav } from "./components";
import { getProductApi, getCategories } from "./services/api";
import { useStateContext } from "./context/DataContextProvider";
import { useAuth } from "./context/AuthContextProvider";
import { getUserCart, getUserWishList } from "./services";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";

function App() {
  const { isDataLoading, dispatch } = useStateContext();
  const {
    authUser: { token },
  } = useAuth();

  useEffect(() => {
    getProductApi(dispatch);
    getCategories(dispatch);
    if (token) {
      getUserCart(dispatch, token);
      getUserWishList(dispatch, token);
    }
  }, [token]);
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        {/* <Route path="/product/:productId" element={<SingleProduct />} /> */}

        <Route path="/mock" element={<Mockman />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoutes>
              <WishList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        />

        {/* <Route path="/cart" element={<ProtectedRoutes />}> */}
        {/* <Route path="/wishlist" element={<WishList />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default App;

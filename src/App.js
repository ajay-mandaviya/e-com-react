import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Cart, Home, Login, Products, Signup, WishList } from "./pages";
import Mockman from "mockman-js";
import { Loader, Nav } from "./components";
import { getProductApi, getCategories } from "./services/api";
import { useStateContext } from "./context/DataContextProvider";
import { useAuth } from "./context/AuthContextProvider";
import { getUserCart, getUserWishList } from "./services";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { dispatch } = useStateContext();
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
    <>
      <Nav />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
        limit="1"
      />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />

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
      </Routes>
    </>
  );
}

export default App;

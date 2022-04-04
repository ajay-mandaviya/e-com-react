import axios from "axios";
import {
  ADD_TO_CART,
  IS_DATA_LOADING,
  REMOVE_FROM_CART,
  SET_CART,
} from "../constant/actionTypes";
import { toast } from "react-toastify";
export const getUserCart = async (dispatch, token) => {
  try {
    const {
      data: { cart },
    } = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });

    dispatch({
      type: SET_CART,
      payload: cart,
    });
  } catch (error) {
    console.log("Error in get User cart", error);
  }
};

export const addToCartApi = async (dispatch, product, token) => {
  try {
    const {
      data: { cart },
    } = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
    toast.success("Added In Cart");
  } catch (error) {
    console.log("Error in add to cart", error);
    toast.error("Added In Cart Fail ");
  }
};

export const removeFromcartApi = async (dispatch, id, token) => {
  try {
    dispatch({
      type: IS_DATA_LOADING,
      payload: true,
    });
    const {
      data: { cart },
    } = await axios.delete(`api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: IS_DATA_LOADING,
      payload: false,
    });
    dispatch({
      type: REMOVE_FROM_CART,
      payload: cart,
    });
    toast.success("Item Removed From Cart..");
  } catch (error) {
    console.log("Error in updateQtyFromCart service", error);
    toast.error("Something Went Wrong");
  }
};

export const updateCartQty = async (action, dispatch, id, token) => {
  try {
    const {
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${id}`,

      {
        action: {
          type: action === "QTY_INCREMENT" ? "increment" : "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    dispatch({
      type: "INC",
      payload: cart,
    });
  } catch (error) {
    console.log("Erro in update qtyr", error);
  }
};

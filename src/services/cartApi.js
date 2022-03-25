import axios from "axios";
import {
  ADD_TO_CART,
  IS_DATA_LOADING,
  REMOVE_FROM_CART,
  SET_CART,
} from "../constant/actionTypes";
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
    console.log("cart is ", cart);
  } catch (error) {
    console.log("Error in get User cart", error);
  }
};

export const addToCartApi = async (dispatch, product, token) => {
  console.log("data inside the api", product);
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
    console.log("cart after api", cart);
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  } catch (error) {
    console.log("Error in add to cart", error);
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
  } catch (error) {
    console.log("Error in updateQtyFromCart service", error);
  }
};

export const updateCartQty = async (action, dispatch, id, token) => {
  console.log("id inside the api", id);
  console.log("action inside the api", action);
  try {
    const {
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${id}`,

      {
        action: {
          type: "increment ",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    console.log("response is", cart);
    dispatch({
      type: "INC",
      payload: cart,
    });
  } catch (error) {
    console.log("Erro in update qtyr", error);
  }
};

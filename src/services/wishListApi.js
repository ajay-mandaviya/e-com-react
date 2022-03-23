import axios from "axios";
import { ADD_TO_WISHLIST, SET_WISHLIST } from "../constant/actionTypes";

export const getUserWishList = async (dispatch, token) => {
  try {
    const {
      data: { wishlist },
    } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: SET_WISHLIST,
      payload: wishlist,
    });
  } catch (error) {
    console.log("Error in getuser wishList", error);
  }
};
export const addToWishList = async (dispatch, product, token) => {
  try {
    const {
      data: { wishlist },
    } = await axios.post(
      "/api/user/wishlist",
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
      type: ADD_TO_WISHLIST,
      payload: wishlist,
    });
    console.log("adding wishlist response ", wishlist);
  } catch (error) {
    console.log("Errror in add TO wishList", error);
  }
};
export const removeToWishListApi = async (dispatch, id, token) => {
  try {
    const {
      data: { wishlist },
      status,
    } = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200) {
      dispatch({
        type: SET_WISHLIST,
        payload: wishlist,
      });
    }
  } catch (error) {
    console.log("Error  remove to wishlist", error);
  }
};

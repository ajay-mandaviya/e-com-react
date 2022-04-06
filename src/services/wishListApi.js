import axios from "axios";
import { ADD_TO_WISHLIST, SET_WISHLIST } from "../constant/actionTypes";
import { toast } from "react-toastify";
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
    toast.success("Added In WishList");
  } catch (error) {
    console.log("Errror in add TO wishList", error);
    toast.error("Added In WishList Fail");
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
    toast.success("Remove From Wishlist");
  } catch (error) {
    console.log("Error  remove to wishlist", error);
    toast.error("Item Remove from wishList Fail");
  }
};

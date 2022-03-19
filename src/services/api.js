import axios from "axios";
import {
  INITIALIZE_PRODUCTS,
  INITIALIZE_CATEGORIES,
  IS_DATA_LOADING,
} from "../constant/actionTypes";
export const getProductApi = async (dispatch) => {
  try {
    dispatch({ type: IS_DATA_LOADING, payload: true });
    const { data: products } = await axios.get("/api/products");
    console.log("products is", products.products);
    dispatch({ type: INITIALIZE_PRODUCTS, payload: products.products });
    dispatch({ type: IS_DATA_LOADING, payload: false });
  } catch (error) {
    console.log("Erro in get Prodcut", error);
  }
};

export const getCategories = async (dispatch) => {
  try {
    const { data: categories } = await axios.get("/api/categories");
    dispatch({ type: INITIALIZE_CATEGORIES, payload: categories.categories });
    console.log("catergoety data is ", categories);
  } catch (error) {
    console.log("Error in get category", error);
  }
};

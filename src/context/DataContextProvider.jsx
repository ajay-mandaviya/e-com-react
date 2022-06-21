import React, { useContext, createContext, useReducer } from "react";
import { FilterReducer, productReducer } from "../reducer";

const StateContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(productReducer, {
    isDataLoading: false,
    product: [],
    cart: [],
    wishList: [],
    categories: [],
  });
  const [filterState, filterDispatch] = useReducer(FilterReducer, {
    inStock: false,
    fastDelivery: false,
    byRating: 0,
    sort: "",
    priceRange: "",
    filterByCategories: [],
    searchBy: "",
  });

  return (
    <StateContext.Provider
      value={{ data, dispatch, filterState, filterDispatch }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default DataContextProvider;

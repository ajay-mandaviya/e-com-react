import {
  ADD_TO_CART,
  INITIALIZE_PRODUCTS,
  REMOVE_FROM_CART,
  INITIALIZE_CATEGORIES,
  IS_DATA_LOADING,
} from "../constant/actionTypes";

export const productReducer = (state, action) => {
  switch (action.type) {
    case IS_DATA_LOADING:
      return {
        ...state,
        isDataLoading: action.payload,
      };

    case INITIALIZE_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case INITIALIZE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
  }
};

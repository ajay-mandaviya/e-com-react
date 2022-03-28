import {
  ADD_TO_CART,
  INITIALIZE_PRODUCTS,
  REMOVE_FROM_CART,
  INITIALIZE_CATEGORIES,
  IS_DATA_LOADING,
  MOVE_TO_CART,
  MOVE_TO_WISHLIST,
  ADD_TO_WISHLIST,
  DECREASE_CART_QUANTITY,
  INCREASE_CART_QUANTITY,
  SET_CART,
  SET_WISHLIST,
} from "../constant/actionTypes";

export const productReducer = (state, action) => {
  switch (action.type) {
    case IS_DATA_LOADING:
      return {
        ...state,
        isDataLoading: action.payload,
      };
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_WISHLIST:
      return {
        ...state,
        wishList: action.payload,
      };

    case "INC":
      console.log("payload inside thr cart", action.payload);
      return {
        ...state,
        cart: action.payload,
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
        cart: [...action.payload],
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: [...action.payload],
      };
    case INCREASE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id === action.payload._id) {
            product = {
              ...product,
              qty: product.qty + 1,
            };
          }
        }),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    // case MOVE_TO_WISHLIST:
    //   return {
    //     ...state,
    //     wishList: [...state.wishList, { ...action.payload }],
    //     cart: state.cart.filter(
    //       (cartItem) => cartItem.id !== action.payload.id
    //     ),
    //   };
    case MOVE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
        wishList: state.wishList.filter(
          (product) => product.id !== action.payload.id
        ),
      };
  }
};

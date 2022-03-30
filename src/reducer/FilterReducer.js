import {
  CLEAR_FILTER,
  FILTER_BY_PRICE_RANGE,
  FILTER_BY_PRODUCT_TYPE,
  FILTER_BY_RATING,
  FILTER_BY_STOCK,
  FILTER_SORT_BY_PRICE,
  FILTER_BY_DELIVERY,
  FILTER_BY_CATEGORIES,
} from "../constant/actionTypes";

export const FilterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORIES:
      console.log("payload in category ", action.payload);
      return {
        ...state,
        filterByCategories: state.filterByCategories.includes(action.payload)
          ? state.filterByCategories.filter(
              (category) => category !== action.payload
            )
          : state.filterByCategories.concat(action.payload),
      };
    case FILTER_BY_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    case FILTER_SORT_BY_PRICE:
      console.log("filter by sort to price", action.payload);
      return {
        ...state,
        sort: action.payload,
      };
    case FILTER_BY_DELIVERY:
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        byRating: action.payload,
      };
    case FILTER_BY_STOCK:
      return {
        ...state,
        inStock: !state.inStock,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        inStock: false,
        fastDelivery: false,
        byRating: 0,
        sort: "",
        priceRange: "",
        filterByCategories: [],
      };
  }
};

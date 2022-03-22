import { SET_AUTH_LOADING, SET_TOKEN, SET_USER } from "../constant/actionTypes";

export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
  }
};

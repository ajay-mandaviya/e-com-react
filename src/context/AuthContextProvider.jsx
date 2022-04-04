import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { SET_AUTH_LOADING, SET_TOKEN, SET_USER } from "../constant/actionTypes";
import { authReducer } from "../reducer";
import { loginApi } from "../services/authApi";
import { toast } from "react-toastify";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authUser, dispatchAuth] = useReducer(authReducer, {
    token: "",
    currentUser: "",
    loading: false,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    user?.token &&
      dispatchAuth({
        type: SET_TOKEN,
        payload: user.token,
      });

    user?.userName &&
      dispatchAuth({
        type: SET_USER,
        payload: user.userName,
      });
  }, [authUser.token]);

  const loginWithUser = async (values) => {
    try {
      dispatchAuth({ type: SET_AUTH_LOADING, payload: true });
      const {
        data: { foundUser, encodedToken },
        status,
      } = await loginApi(values);

      dispatchAuth({ type: SET_AUTH_LOADING, payload: false });
      if (status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: encodedToken,
            userName: foundUser.firstName,
          })
        );
        dispatchAuth({ type: SET_TOKEN, payload: encodedToken });
        dispatchAuth({ type: SET_USER, payload: foundUser.firstName });
        toast.success("Login Success");
        navigate("/product");
      }
    } catch (error) {
      dispatchAuth({ type: SET_AUTH_LOADING, payload: false });
      toast.error("Something went wrong");
      console.log("ERRO IN LOGIN ", error);
    }
  };

  const logoutAuth = () => {
    dispatchAuth({
      type: SET_AUTH_LOADING,
      payload: true,
    });
    setTimeout(() => {
      localStorage.removeItem("user");
      dispatchAuth({
        type: SET_TOKEN,
        payload: "",
      });
      dispatchAuth({
        type: SET_AUTH_LOADING,
        payload: false,
      });
      navigate("/");
      toast.success("Logout SuccessFully");
    }, 3000);
  };
  return (
    <AuthContext.Provider
      value={{ authUser, dispatchAuth, loginWithUser, logoutAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  SET_AUTH_LOADING,
  SET_TOKEN,
  SET_USER,
} from "../../constant/actionTypes";
import { useAuth } from "../../context/AuthContextProvider";
import { useDocumentTitle } from "../../hooks";
import { signupApi } from "../../services";
import "./signup.css";

const Signup = () => {
  useDocumentTitle("Men's Shop");
  const navigate = useNavigate();
  const {
    authUser: { loading },
    dispatchAuth,
  } = useAuth();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleUserSignup = async (e) => {
    e.preventDefault();
    try {
      dispatchAuth({
        type: SET_AUTH_LOADING,
        payload: true,
      });

      const {
        data: { createdUser, encodedToken },
      } = await signupApi(user);
      dispatchAuth({
        type: SET_AUTH_LOADING,
        payload: false,
      });

      dispatchAuth({
        type: SET_TOKEN,
        payload: encodedToken,
      });
      dispatchAuth({
        type: SET_USER,
        payload: createdUser.name,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ token: encodedToken, userName: createdUser.name })
      );
      toast.success("Signup Success");
      navigate("/product");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Erroin while signup", error);
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Sign Up</h2>
        </div>
        <div className="login-input-container">
          <form onSubmit={handleUserSignup}>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                required
                name="name"
                value={user.name}
                onChange={handleInputChange}
                placeholder="Enter your Name"
                id="nameInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input
                type="email"
                required
                placeholder="Enter your Email"
                id="emailInput"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                id="passwordInput"
                required
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="user-option">
              <div>
                <input required type="checkbox" id="save-chechkbox" />
                <label htmlFor="save-chechkbox" className="checkbox-lable">
                  Accept Terms & Condition
                </label>
              </div>
            </div>
            <div className="btn-contaiers">
              <button type="submit" className="login-btn">
                {loading ? "Creating account..." : " Create a New Account"}
              </button>
            </div>
            <Link to="/login" className="check-account flex">
              <p>Already have an account</p>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

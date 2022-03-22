import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

import "./login.css";

const Login = () => {
  const navigation = useNavigate();
  const {
    authUser: { loading },
    loginWithUser,
  } = useAuth();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };
  const handleUserLogin = (e) => {
    e.preventDefault();
    console.log(userLogin);
    loginWithUser(userLogin);
  };
  // "email": "adarshbalika@gmail.com",
  //   "password": "adarshbalika",
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Welcome Back</h2>
        </div>
        <div className="login-input-container">
          <form onSubmit={handleUserLogin}>
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                id="emailInput"
                name="email"
                value={userLogin.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                id="passwordInput"
                value={userLogin.password}
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="user-option">
              <div>
                <input type="checkbox" id="save-chechkbox" />
                <label className="checkbox-lable" htmlFor="save-chechkbox">
                  Remember Me
                </label>
              </div>
              <div>
                <p className="forgot-psd">Forgot Password?</p>
              </div>
            </div>
            <div className="btn-contaiers">
              <button type="submit" className="login-btn">
                {loading ? "Logging in...." : "Login"}
              </button>
            </div>
            <Link to={"/signup"} className="check-account flex">
              <p>Create New Account</p>
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

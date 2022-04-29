import React, { useState } from "react";
import axios from "axios";
import photo from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const clientId =
  "647918111766-4uelo5dutlhnql6uo8nvcbra6n9dj9vu.apps.googleusercontent.com";

const Login = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState({ email: "", password: "" });

  const onLoginSuccess = (res) => {
    console.log(res);
    localStorage.setItem("googleToken", res.tokenId);
    alert("You are logged in with your google account!");
    navigate("/");
  };

  const onLoginFailure = (res) => {
    alert("Something went wrong.Kindly retry!");
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/signin`, input)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("You are logged in now!");
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("User doesn't exists.");
        } else if (err.response.status === 400) {
          alert("Invalid Credentials.");
        } else {
          alert("Server error!");
        }
        e.target.reset();
      });
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xs-6">
            <img src={photo} className="image-login img-fluid" alt="image" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xs-6">
            <div className="social-header">
              <p className="login-social">Sign in with</p>
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign In"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                className="btn-google"
              />
            </div>
            <div className="divider">
              <p className="text">
                <strong>Or</strong>
              </p>
            </div>
            <form className="form" onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  className="loginform"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  className="loginform"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={inputHandler}
                />
              </div>
              <div>
                <div className="form-check form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                  <Link to="/forgot" className="pass">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-primary login-btn">LOGIN</button>
              </div>
              <div className="form-group">
                <strong>Don't have an account?</strong>
                <Link to="/signup" className="link">
                  <strong> Register</strong>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

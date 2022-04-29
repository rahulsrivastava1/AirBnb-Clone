import React, { useState } from "react";
import photo from "../images/login.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Forgot = () => {
  const [input, setInput] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/forgot`, input)
      .then((res) => {
        alert("Your password has been reset successfully!");
        e.target.reset();
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("User doesn't exists.");
        } else if (err.response.status === 500) {
          alert("Password doesn't match.");
        } else {
          alert("Something went wrong");
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
            <form className="form forgot-form" onSubmit={formSubmit}>
              <h3 className="form-group">Change Your Password Here</h3>
              <div className="form-group">
                <label htmlFor="password">
                  <strong>Email:</strong>
                </label>
                <input
                  className="loginform"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your account email"
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <strong>New Password:</strong>
                </label>
                <input
                  className="loginform"
                  type="text"
                  name="newPassword"
                  id="password"
                  placeholder="Enter your new password"
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmpassword">
                  <strong>Confirm New Password:</strong>
                </label>
                <input
                  className="loginform"
                  type="text"
                  name="confirmNewPassword"
                  id="confirmpassword"
                  placeholder="Enter your confirm password"
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary login-btn">UPDATE</button>
              </div>
              <div className="form-group">
                <strong>Know your password?</strong>
                <Link to="/login" className="link">
                  <strong>Login Here!</strong>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;

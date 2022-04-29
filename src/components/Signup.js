import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    emial: "",
    password: "",
    confirmPassword: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/signup`, input)
      .then((res) => {
        alert("Your account has been created.You can login now!");
        e.target.reset();
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.status === 500) {
          alert("Password doesn't match.");
        } else if (err.response.status === 400) {
          alert("User exists already.");
        } else {
          alert("Something went wrong!");
        }
        e.target.reset();
      });
  };

  return (
    <div className="container-fluid">
      <div className="signup-container">
        <div className="signup-box">
          <h2 className="heading-signup text-muted">
            <strong>CREATE AN ACCOUNT</strong>
          </h2>
          <form onSubmit={formSubmit}>
            <div className="form-floating flex-fill mx-lg-1 mb-3 mb-lg-0 signup-form my-5">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={inputHandler}
              />
              <label className="form-label" htmlFor="name">
                Name
              </label>
            </div>
            <div className="form-floating flex-fill mx-lg-1 mb-3 mb-lg-0 signup-form my-3">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                onChange={inputHandler}
              />
              <label className="form-label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="form-floating flex-fill mx-lg-1 mb-3 mb-lg-0 signup-form my-3">
              <input
                type="text"
                name="password"
                id="password"
                className="form-control"
                onChange={inputHandler}
              />
              <label className="form-label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="form-floating flex-fill mx-lg-1 mb-3 mb-lg-0 signup-form my-3">
              <input
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                onChange={inputHandler}
                className="form-control"
              />
              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
            </div>
            <div className="checkbox-container">
              <div className="form-check form-group">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  required
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree all statements in
                </label>
                <a href="" style={{ color: "black" }}>
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-success register-btn my-3">
                Register
              </button>
            </div>
          </form>
          <div className="linktosignin">
            <p>Have already an account?</p>
            <Link to="/login">
              <strong style={{ color: "black" }}>Login Here</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

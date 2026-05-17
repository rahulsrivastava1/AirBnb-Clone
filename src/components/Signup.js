import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
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
      .post(`http://localhost:8000/signup`, input)
      .then((res) => {
        alert("Your account has been created. You can login now!");
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
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="heading-signup text-muted">
          <strong>CREATE AN ACCOUNT</strong>
        </h2>
        <form onSubmit={formSubmit}>
          <div className="form-floating mb-3 signup-form">
            <input
              type="text"
              name="name"
              id="signup-name"
              className="form-control"
              onChange={inputHandler}
              placeholder="Name"
              required
            />
            <label className="form-label" htmlFor="signup-name">
              Name
            </label>
          </div>
          <div className="form-floating mb-3 signup-form">
            <input
              type="email"
              name="email"
              id="signup-email"
              className="form-control"
              onChange={inputHandler}
              placeholder="Email"
              required
            />
            <label className="form-label" htmlFor="signup-email">
              Email
            </label>
          </div>
          <div className="form-floating mb-3 signup-form">
            <input
              type="password"
              name="password"
              id="signup-password"
              className="form-control"
              onChange={inputHandler}
              placeholder="Password"
              required
            />
            <label className="form-label" htmlFor="signup-password">
              Password
            </label>
          </div>
          <div className="form-floating mb-3 signup-form">
            <input
              type="password"
              name="confirmPassword"
              id="signup-confirmPassword"
              className="form-control"
              onChange={inputHandler}
              placeholder="Confirm Password"
              required
            />
            <label className="form-label" htmlFor="signup-confirmPassword">
              Confirm Password
            </label>
          </div>
          <div className="checkbox-container">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="termsCheckbox"
                required
              />
              <label className="form-check-label" htmlFor="termsCheckbox">
                I agree to all statements in{" "}
                <a href="#" style={{ color: "black", fontWeight: 500 }}>
                  Terms of Service
                </a>
              </label>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn btn-success register-btn">
              Register
            </button>
          </div>
        </form>
        <div className="linktosignin mt-3">
          <p>Have already an account?</p>
          <Link to="/login">
            <strong style={{ color: "black" }}>Login Here</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

const clientId =
  "647918111766-4uelo5dutlhnql6uo8nvcbra6n9dj9vu.apps.googleusercontent.com";

const Navbar = () => {
  let navigate = useNavigate();
  const Logout = () => {
    alert("Please login!You have been logout.");
    localStorage.clear();
    navigate("/login");
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully from google account");
    localStorage.clear();
    navigate("/login");
  };

  const RenderMenu = () => {
    if (localStorage.getItem("token")) {
      return (
        <>
          <button
            type="button"
            className="custom-btn btn-2 mx-3"
            onClick={Logout}
          >
            Logout
          </button>
        </>
      );
    } else if (localStorage.getItem("googleToken")) {
      return (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
          className="custom-btn"
        />
      );
    } else {
      return (
        <>
          <Link to="/login">
            <button className="custom-btn btn-1 me-3">Login</button>
          </Link>
          <Link to="/signup">
            <button type="button" className="custom-btn btn-2">
              Register
            </button>
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            AIRBNB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <RenderMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

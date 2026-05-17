import React, { useState } from "react";
import aboutImage1 from "../images/aboutImage1.png";
import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState({
    type: "",
    arrivaldate: "",
    departuredate: "",
    totalno: "",
  });
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const googleToken = localStorage.getItem("googleToken");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const formSubmit = (e) => {
    navigate("/posts");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="intro">
        <div className="intro-box">
          <h1 className="heading" style={{ color: "white", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            START YOUR SEARCH
          </h1>
          <div className="container my-4">
            <div className="card bg-dark">
              <div className="card-body p-4">
                <form onSubmit={formSubmit}>
                  <div className="row g-3 align-items-end">
                    <div className="col-lg-3 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          id="form1"
                          name="type"
                          className="form-control"
                          onChange={inputHandler}
                          required
                        />
                        <label className="form-label" htmlFor="form1">
                          Looking for?
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="arrivaldate"
                          id="exampleDatepicker1"
                          onChange={inputHandler}
                          required
                        />
                        <label htmlFor="exampleDatepicker1" className="form-label">
                          Arrival date
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker2"
                          name="departuredate"
                          onChange={inputHandler}
                          required
                        />
                        <label htmlFor="exampleDatepicker2" className="form-label">
                          Departure date
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          id="form2"
                          name="totalno"
                          className="form-control"
                          onChange={inputHandler}
                          required
                        />
                        <label className="form-label" htmlFor="form2">
                          Guests
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-12">
                      <input
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container">
        <div className="about">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center">
              <img src={aboutImage1} className="imageabout img-fluid" alt="hotel" />
            </div>
            <div className="col-12 col-md-6 about-text">
              <h2>Try Hosting</h2>
              <p className="text-muted">
                Options like self check-in or booking an entire home allow you
                to interact with your host mainly through in-app messaging – you
                can message them anytime if something comes up.
              </p>
              <hr />
              <p className="text-muted">
                Almost anyone can be a host of a stay or an experience. It's
                free to sign up and share either your space or your skills with
                the world. To get started, visit our Host Centre.
              </p>
              <div className="mb-3">
                <strong>Login to post</strong>
              </div>
              {token !== null || googleToken != null ? (
                <Link to="/addPost">
                  <button className="btn-1 custom-btn">
                    Post Your Requirement Here
                  </button>
                </Link>
              ) : (
                <Link to="/addPost">
                  <button className="btn-1 custom-btn" disabled>
                    Post Your Requirement Here
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="row mt-4">
            <div className="col-12 col-md-4 d-flex">
              <div className="card custom-card w-100">
                <img src={Image1} className="card-img-top" alt="arrivals" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Effortless arrivals</h5>
                  <p className="card-text flex-grow-1">
                    Private airport pick-up, an in-person welcome, and a
                    stocked home are some of our featured add-ons.
                  </p>
                  <Link to="#" className="btn btn-primary mt-auto">
                    DETAILS
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex">
              <div className="card custom-card w-100">
                <img src={Image2} className="card-img-top" alt="amenities" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Luxury amenities</h5>
                  <p className="card-text flex-grow-1">
                    Fully equipped to meet your needs, with ample space and
                    privacy.
                  </p>
                  <Link to="#" className="btn btn-primary mt-auto">
                    DETAILS
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex">
              <div className="card custom-card w-100">
                <img src={Image3} className="card-img-top" alt="itineraries" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Custom itineraries</h5>
                  <p className="card-text flex-grow-1">
                    Your trip designer can plan every last detail and make
                    sure everything is just right.
                  </p>
                  <Link to="#" className="btn btn-primary mt-auto">
                    DETAILS
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="my-5">
            <form action="">
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                <strong>Sign up for our newsletter</strong>
                <input
                  className="inputemail"
                  type="email"
                  name="email"
                  id="newsletter-email"
                  placeholder="Email address"
                />
                <button className="btn btn-primary">SUBSCRIBE</button>
              </div>
            </form>
            <p>
              Whether you're going on a business trip or relocating to a new
              city, find homes and boutique hotels with 5-star reviews from
              other business travellers.
            </p>
            <div className="row">
              <div className="col-6 col-md-3 foo mb-4">
                <h5>ABOUT</h5>
                <Link to="">How Airbnb works</Link>
                <br />
                <Link to="">Newsroom</Link>
                <br />
                <Link to="">Investors</Link>
                <br />
                <Link to="">HotelTonight</Link>
                <br />
              </div>
              <div className="col-6 col-md-3 foo mb-4">
                <h5>COMMUNITY</h5>
                <Link to="">Diversity & Belonging</Link>
                <br />
                <Link to="">Accessibility</Link>
                <br />
                <Link to="">Guest Referrals</Link>
                <br />
                <Link to="">Host Afghan refugees</Link>
                <br />
              </div>
              <div className="col-6 col-md-3 foo mb-4">
                <h5>HOST</h5>
                <Link to="">Host your home</Link>
                <br />
                <Link to="">Host an Online Experience</Link>
                <br />
                <Link to="">Resource Centre</Link>
                <br />
                <Link to="">Community Centre</Link>
                <br />
              </div>
              <div className="col-6 col-md-3 foo mb-4">
                <h5>SUPPORT</h5>
                <Link to="">Our COVID-19 Response</Link>
                <br />
                <Link to="">Help Centre</Link>
                <br />
                <Link to="">Cancellation options</Link>
                <br />
                <Link to="">Trust & Safety</Link>
                <br />
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="container-fluid">
        <div className="last">
          © 2021 Copyright: <strong>&nbsp;Rahul Srivastava</strong>
        </div>
      </div>
    </>
  );
};

export default Home;

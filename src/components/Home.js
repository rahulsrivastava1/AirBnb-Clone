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

  console.log(token);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const formSubmit = (e) => {
    navigate("/posts");
  };

  return (
    <>
      <div className="intro">
        <div className="intro-box">
          <h1 className="heading">START YOUR SEARCH</h1>
          <div className="container my-5">
            <div className="card bg-dark">
              <div className="card-body p-4">
                <div className="row justify-content-center">
                  <form onSubmit={formSubmit}>
                    <div className="col-lg-12 col-xl-10 d-lg-flex mb-lg-4 mb-xl-0">
                      <div className="form-floating flex-fill mx-lg-1 mb-3 mb-lg-0">
                        <input
                          type="text"
                          id="form1"
                          name="type"
                          className="form-control"
                          onChange={inputHandler}
                          required
                        />
                        <label className="form-label" htmlFor="form1">
                          looking for?
                        </label>
                      </div>
                      <div
                        className="form-floating datepicker form-white flex-fill mx-lg-1 mb-3 mb-lg-0"
                        data-mdb-toggle-button="false"
                      >
                        <input
                          type="text"
                          className="form-control"
                          name="arrivaldate"
                          id="exampleDatepicker1"
                          data-mdb-toggle="datepicker"
                          onChange={inputHandler}
                          required
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Arrival date
                        </label>
                      </div>
                      <div
                        className="form-floating datepicker form-white flex-fill mx-lg-1 mb-3 mb-lg-0"
                        data-mdb-toggle-button="false"
                      >
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker2"
                          name="departuredate"
                          data-mdb-toggle="datepicker"
                          onChange={inputHandler}
                          required
                        />
                        <label
                          htmlFor="exampleDatepicker2"
                          className="form-label"
                        >
                          Departure date
                        </label>
                      </div>
                      <div
                        id="location"
                        className="form-floating form-white flex-fill mx-lg-1 mb-4 mb-lg-0"
                      >
                        <input
                          type="text"
                          id="form2"
                          name="totalno"
                          className="form-control"
                          onChange={inputHandler}
                          required
                        />
                        <label className="form-label" htmlFor="form2">
                          Number of guests
                        </label>
                      </div>
                      <div className="col-lg-12 col-xl-2">
                        <input
                          className="btn btn-primary btn-search"
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
      </div>

      <div className="container">
        <div className="about">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <img src={aboutImage1} className="imageabout" alt="hotel" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 about-text">
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
              <div>
                <strong>Login to post</strong>
              </div>
              {token !== null || googleToken != null ? (
                <>
                  <Link to="/addPost">
                    <button className="btn-1 custom-btn">
                      Post Your Requirement Here
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/addPost">
                    <button className="btn-1 custom-btn" disabled>
                      Post Your Requirement Here
                    </button>
                  </Link>
                </>
              )}
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="card custom-card">
                  <img src={Image1} className="card-img-top" alt="image1"></img>
                  <div className="card-body">
                    <h5 className="card-title">Effortless arrivals</h5>
                    <p className="card-text">
                      Private airport pick-up, an in-person welcome, and a
                      stocked home are some of our featured add-ons.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      DETAILS
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="card custom-card">
                  <img src={Image2} className="card-img-top" alt="image2"></img>
                  <div className="card-body">
                    <h5 className="card-title">Luxury amenities</h5>
                    <p className="card-text">
                      Fully equipped to meet your needs, with ample space and
                      privacy.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      DETAILS
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="card custom-card">
                  <img src={Image3} className="card-img-top" alt="image3"></img>
                  <div className="card-body">
                    <h5 className="card-title">Custom itineraries</h5>
                    <p className="card-text">
                      Your trip designer can plan every last detail and make
                      sure everything is just right.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="my-5">
            <form action="">
              <div className="form-group">
                <label htmlFor="email">
                  <strong className="signup">
                    Sign up for our newsletter{" "}
                  </strong>
                </label>
                <input
                  className="inputemail"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
                <button className="btn btn-primary buttons">SUBSCRIBE</button>
              </div>
            </form>
            <p>
              Whether you’re going on a business trip or relocating to a new
              city, find homes and boutique hotels with 5-star reviews from
              other business travellers.
            </p>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 foo">
                <h3>ABOUT</h3>
                <Link to="">How Airbnb works</Link>
                <br />
                <Link to="">Newsroom</Link>
                <br />
                <Link to="">Investors</Link>
                <br />
                <Link to="">HotelTonight</Link>
                <br />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 foo">
                <h3>COMMUNITY</h3>
                <Link to="">Diversity & Belonging</Link>
                <br />
                <Link to="">Accessibility</Link>
                <br />
                <Link to="">Guest Referrals</Link>
                <br />
                <Link to="">Host Afghan refugees</Link>
                <br />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 foo">
                <h3>HOST</h3>
                <Link to="">Host your home</Link>
                <br />
                <Link to="">Host an Online Experience</Link>
                <br />
                <Link to="">Resource Centre</Link>
                <br />
                <Link to="">Community Centre</Link>
                <br />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 foo">
                <h3>SUPPORT</h3>
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
          © 2021 Copyright: <strong>Rahul Srivastava</strong>
        </div>
      </div>
    </>
  );
};

export default Home;

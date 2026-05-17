import React, { useState } from "react";
import axios from "axios";
import photo from "../images/accomodation.png";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

const AddPost = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    type: "",
    name: "",
    dates: "",
    description: "",
    address: "",
    mobile: "",
    photo: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/addPost`, input)
      .then((res) => {
        alert("Your data is successfully placed in my database!");
        navigate("/");
      })
      .catch((err) => {
        alert("Server error!");
        e.target.reset();
      });
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center">
            <img
              src={photo}
              className="image-accomodation img-fluid"
              alt="accommodation"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="accomodation">
              <h3 className="accomodation-header">
                Post Your Accommodation Here!
              </h3>
              <form className="form" onSubmit={formSubmit}>
                <div className="form-group">
                  <label htmlFor="type"><strong>Type of property:</strong></label>
                  <input
                    className="loginform"
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Hostels, Hotels, Flats etc."
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name"><strong>Name:</strong></label>
                  <input
                    className="loginform"
                    type="text"
                    name="name"
                    id="post-name"
                    placeholder="Name of your accommodation"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dates"><strong>Available dates:</strong></label>
                  <input
                    className="loginform"
                    type="text"
                    name="dates"
                    id="dates"
                    placeholder="Available dates dd-mm-yyyy"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description"><strong>Description:</strong></label>
                  <textarea
                    name="description"
                    rows="4"
                    id="description"
                    placeholder="Write something about your accommodation"
                    onChange={inputHandler}
                    className="textarea-accomodation loginform"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address"><strong>Address:</strong></label>
                  <input
                    type="text"
                    name="address"
                    className="loginform"
                    id="address"
                    placeholder="Enter your property address"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile"><strong>Contact No.:</strong></label>
                  <input
                    type="number"
                    name="mobile"
                    className="loginform"
                    id="mobile"
                    placeholder="Enter your contact no."
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="img">
                    <strong>Choose property's image:&nbsp;</strong>
                  </label>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setInput({ ...input, photo: base64 })
                    }
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary login-btn">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

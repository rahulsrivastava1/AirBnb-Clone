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

  const onChangePicture = (e) => {
    setInput({ ...input, photo: e.target.files[0] });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/addPost`, input)
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
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xs-6">
            <img
              src={photo}
              className="image-accomodation img-fluid"
              alt="image"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xs-6">
            <div className="accomodation">
              <h3 className="accomodation-header">
                Post Your Accomodation Here!
              </h3>
              <form className="form" onSubmit={formSubmit}>
                <div className="form-group">
                  <label htmlFor="type">Type of property:</label>
                  <input
                    className="loginform"
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Hostels,Hotels,Flats etc."
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    className="loginform"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name of your accomodation"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dates">Available dates:</label>
                  <input
                    className="loginform"
                    type="text"
                    name="dates"
                    id="dates"
                    placeholder="available dates dd-mm--yyyy"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    name="description"
                    rows="5"
                    cols="75"
                    id="description"
                    placeholder="Write something about your accomodation"
                    onChange={inputHandler}
                    className="textarea-accomodation loginform"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
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
                  <label htmlFor="mobile">Contact No.</label>
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

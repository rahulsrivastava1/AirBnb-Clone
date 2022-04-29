import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000/posts";

const Posts = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data.posts);
    });
  }, []);

  if (post === "") {
    return (
      <div className="container">
        <div className="post-container">
          <h1 className="heading">Accomodations</h1>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-lg-3">
            <h1>No data</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="post-container">
          <h1 className="heading">Accomodations</h1>
          <div className="row my-5">
            {post.map((post) => (
              <div className="col-12 col-sm-12 col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={post.photo}
                    alt="accomodations"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{`Type:${post.type}`}</h4>
                    <h6>{`Name:${post.name}`}</h6>
                    <h6>{`Available Dates:${post.dates}`}</h6>
                    <p className="card-text">{`Address:${post.address}`}</p>
                    <p className="card-text">{`Contact no.${post.mobile}`}</p>
                    <p className="card-text">{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Posts;

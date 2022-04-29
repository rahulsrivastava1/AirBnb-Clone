import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgot from "./components/Forgot";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Routes>
        <Route path="/forgot" element={<Forgot />}></Route>
      </Routes>
      <Routes>
        <Route path="/addPost" element={<AddPost />}></Route>
      </Routes>
      <Routes>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

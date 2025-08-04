import React from "react";
import Navbar from "../components/Navbar";
import "./landing.css"; // See styles below

const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <div className="overlay text-center text-white d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-3 fw-bold">Welcome to ConnectSphere</h1>
          <p className="lead">Connect. Share. Grow your professional network.</p>
          <a href="/login" className="btn btn-primary btn-lg mt-3">Get Started</a>
        </div>
      </div>
    </>
  );
};

export default Landing;

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")); // assuming stored during login

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
          <i className="bi bi-linkedin me-2 fs-3"></i>
          ConnectSphere
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link underline-animate" to="/feed">Feed</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link underline-animate" to={`/profile/${user?._id}`}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="avatar"
                  className="rounded-circle me-2"
                  width="30"
                  height="30"
                />
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => {
                  localStorage.clear();
                  alert("Logged out!");
                  window.location.href = "/";
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

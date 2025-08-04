import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  const email = e.target.email.value;

  // Simulate login
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", email); // ✅ Store email/name

  setShowToast(true);
  setTimeout(() => {
    setShowToast(false);
    navigate("/feed");
  }, 1500);
};


  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" className="form-control mb-3" placeholder="Email" required />
          <input type="password" name="password" className="form-control mb-3" placeholder="Password" required />
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="text-center mt-3">
            <span>Don't have an account? <a href="/register">Register</a></span>
          </div>
        </form>
      </div>

      {/* ✅ Toast message */}
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={1500} autohide bg="success">
          <Toast.Header>
            <strong className="me-auto">ConnectSphere</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Login Successful!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  return (
    <div className="register-page">
      <div className="overlay">
        <div className="register-form card shadow-lg p-4 rounded-4">
          <h2 className="text-center mb-4 text-primary">Create an Account</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="********" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

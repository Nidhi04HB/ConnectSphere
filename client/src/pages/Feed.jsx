import React from "react";
import Navbar from "../components/Navbar";

const Home = () => (
  <>

    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <h2>Welcome to your Feed 🎉</h2>
    </div>
    <Link to={`/profile/${post.userId}`} className="btn btn-sm btn-outline-primary mt-2">
  View Profile
</Link>

  </>
);

export default Home;

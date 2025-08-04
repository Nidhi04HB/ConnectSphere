import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <Sidebar />
        </div>

        {/* Feed */}
        <div className="col-md-6">
          <CreatePost /> {/* ✅ Show create post at the top */}
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>

        {/* Right panel / suggestions / ads */}
        <div className="col-md-3">
          {/* Maybe show "People you may know", etc. */}
        </div>
      </div>
    </div>
  );
};

export default Feed;

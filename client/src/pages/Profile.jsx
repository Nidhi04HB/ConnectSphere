import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadProfile = async () => {
      const allUsers = await axios.get("http://localhost:5000/api/auth/all");
      const thisUser = allUsers.data.find((u) => u._id === id);
      setUser(thisUser);

      const allPosts = await axios.get("http://localhost:5000/api/posts");
      const userPosts = allPosts.data.filter((p) => p.userId === id);
      setPosts(userPosts);
    };

    loadProfile();
  }, [id]);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <>
  <div className="container mt-5">
    <div className="card shadow p-4 mb-4">
      <div className="d-flex align-items-center mb-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="rounded-circle me-3"
          width="60"
          height="60"
        />
        <div>
          <h4 className="mb-0">Welcome, {user.name}</h4>
          <small className="text-muted">{user.email}</small>
        </div>
      </div>
      <p>{user.bio || "No bio provided."}</p>
    </div>

    <h5 className="mb-3">{user.name.split(" ")[0]}'s Posts</h5>
    {posts.length === 0 ? (
      <p className="text-muted">No posts yet.</p>
    ) : (
      posts.map((post) => (
        <div key={post._id} className="card p-3 mb-3 shadow-sm">
          <p>{post.content}</p>
          <small className="text-muted">
            Posted on {new Date(post.createdAt).toLocaleString()}
          </small>
        </div>
      ))
    )}
  </div>
</>

  );
}

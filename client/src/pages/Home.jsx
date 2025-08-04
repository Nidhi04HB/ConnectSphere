import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainLayout from '../components/MainLayout';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user._id) return navigate("/login");
    axios.get("http://localhost:5000/api/posts").then((res) => setPosts(res.data));
  }, []);

  const createPost = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      await axios.post("http://localhost:5000/api/posts", {
        userId: user._id,
        content,
      });
      setContent("");
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (err) {
      setError("Failed to post.");
    }
  };

  return (
      <MainLayout>
  
      <div className="max-w-3xl mx-auto mt-6 px-4">
        <form onSubmit={createPost} className="mb-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full p-3 border border-gray-300 rounded resize-none"
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Post
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">Latest Posts</h2>
        <div className="space-y-4">
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts yet.</p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="p-4 bg-white shadow rounded">
                <p className="text-gray-800">{post.content}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <span>{new Date(post.createdAt).toLocaleString()}</span> |{" "}
                  <Link
                    to={`/profile/${post.userId}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    
    </MainLayout>

  );
}

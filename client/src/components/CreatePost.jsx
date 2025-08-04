import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = localStorage.getItem("userEmail"); // ✅ Get logged-in user

    if (!user) {
      alert("User not logged in");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/posts", {
        title,
        content,
        author: user, // ✅ Pass user email as author
      });

      setTitle("");
      setContent("");
      window.location.reload(); // or use state to update
    } catch (err) {
      console.error("Failed to post", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="form-control mb-2"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="form-control mb-2"
        required
      />
      <button type="submit" className="btn btn-success w-100">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

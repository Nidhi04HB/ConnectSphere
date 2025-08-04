const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const postRoutes = require("./routes/post");

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ API route for posts
app.use("/api/posts", postRoutes);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/connectsphere", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend running on ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

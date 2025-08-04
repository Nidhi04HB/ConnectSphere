const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// ✅ Register user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      name,
      email,
      password: hashed,
      bio: "New to ConnectSphere", // 👈 Auto-profile like LinkedIn
    });
    res.json({ msg: "User registered" });
  } catch (err) {
    res.status(400).json({ error: "Email already used" });
  }
});

// ✅ Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, user });
});

// ✅ Get all users (for profile pages)
router.get('/all', async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

module.exports = router;

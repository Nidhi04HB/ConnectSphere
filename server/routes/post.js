const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.get('/user/:id', async (req, res) => {
  const posts = await Post.find({ userId: req.params.id });
  res.json(posts);
});
router.post('/', authMiddleware, async (req, res) => {
  const { content, image } = req.body;
  const post = await Post.create({ content, image, author: req.user.id });
  const fullPost = await post.populate("author", "name");
  res.json(fullPost);
});

module.exports = router;

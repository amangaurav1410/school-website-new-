const express = require('express');
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all blogs (public)
router.get('/', async (req, res) => {
  const blogs = await Blog.find({ published: true }).sort({ publicationDate: -1 });
  res.json(blogs);
});

// Get all blogs (admin)
router.get('/admin', auth, async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// Create blog
router.post('/', auth, async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).json(blog);
});

// Update blog
router.put('/:id', auth, async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, { ...req.body, updatedAt: Date.now() }, { new: true });
  res.json(blog);
});

// Delete blog
router.delete('/:id', auth, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.send('Blog deleted');
});

module.exports = router;
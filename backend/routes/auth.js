const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    console.error('Register error:', error);
    if (error.name === 'MongooseServerSelectionError') {
      return res.status(503).json({
        error: 'Database connection failed. Please check your MongoDB Atlas IP whitelist settings.'
      });
    }
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    if (error.name === 'MongooseServerSelectionError') {
      return res.status(503).json({
        error: 'Database connection failed. Please check your MongoDB Atlas IP whitelist settings.'
      });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
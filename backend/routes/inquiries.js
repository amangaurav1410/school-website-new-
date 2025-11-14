const express = require('express');
const Inquiry = require('../models/Inquiry');
const auth = require('../middleware/auth');

const router = express.Router();

// Submit inquiry
router.post('/', async (req, res) => {
  const inquiry = new Inquiry(req.body);
  await inquiry.save();
  res.status(201).send('Inquiry submitted');
});

// Get inquiries (admin)
router.get('/', auth, async (req, res) => {
  const inquiries = await Inquiry.find();
  res.json(inquiries);
});

// Update status
router.put('/:id', auth, async (req, res) => {
  await Inquiry.findByIdAndUpdate(req.params.id, { status: req.body.status });
  res.send('Status updated');
});

module.exports = router;
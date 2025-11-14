const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Submit contact
router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).send('Message sent');
});

module.exports = router;
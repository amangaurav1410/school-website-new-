const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  parentName: String,
  contactNumber: String,
  email: String,
  childName: String,
  childDob: Date,
  gradeApplying: String,
  message: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiry', InquirySchema);
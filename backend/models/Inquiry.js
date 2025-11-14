const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  studentName: String,
  parentContact: String,
  grade: String,
  previousSchool: String,
  specialRequirements: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiry', InquirySchema);
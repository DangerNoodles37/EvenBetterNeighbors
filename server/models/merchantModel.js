const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const merchantSchema = new mongoose.Schema({
  businessEmail: { type: String, required: true },
  merchantPassword: { type: String, required: true },
  businessName: { type: String, required: true },
  typeOfBusiness: { type: String, required: true },
  businessAddress: { type: String },
  businessZipCode: { type: String },
  description: { String },
  image: { type: Buffer },
});

module.exports = mongoose.model('merchant', merchantSchema);

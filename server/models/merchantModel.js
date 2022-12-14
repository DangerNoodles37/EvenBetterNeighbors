const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const merchantSchema = new mongoose.Schema({
  businessEmail: { type: String, required: true, unique: true },
  merchantPassword: { type: String, required: true },
  businessName: { type: String, required: true },
  typeOfBusiness: { type: String, required: true },
  businessAddress: { type: String },
  businessZipCode: { type: String },
  description: { type: String },
  image: { type: Buffer },
});

merchantSchema.pre('save', function (next) {
  const merchant = this;
  bcrypt
    .hash(merchant.merchantPassword, SALT_WORK_FACTOR)
    .then((hash) => {
      merchant.merchantPassword = hash;
      return next();
    })
    .catch((err) =>
      next({
        log: `hash in merchantModel: ERROR: ${
          typeof err === `object` ? JSON.stringify(err) : err
        }`,
        message: {
          err: 'Error occurred in hash method of merchantModel',
        },
      })
    );
});

module.exports = mongoose.model('merchant', merchantSchema);

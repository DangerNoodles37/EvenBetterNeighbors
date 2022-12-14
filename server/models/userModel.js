const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

// const MONGO_URI =
//   'mongodb+srv://chase:codesmith123@cluster0.fwje3ts.mongodb.net/?retryWrites=true&w=majority';
// //!!eventually we may need to move the database into server.js

// // this connects our mongo database to our server
// mongoose
//   .connect(MONGO_URI, {
//     // options for the connect method to parse the URI
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: 'NeighborData',
//   })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch((err) => console.log(err));

// declare mongo schema for our consumers
// zip code will be a string since we don't need to work with numbers
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  zipCode: { type: String },
});

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt
    .hash(user.password, SALT_WORK_FACTOR)
    .then((hash) => {
      user.password = hash;
      return next();
    })
    .catch((err) =>
      next({
        log: `hash in userModel: ERROR: ${
          typeof err === `object` ? JSON.stringify(err) : err
        }`,
        message: {
          err: 'Error occurred in hash method of userModel',
        },
      })
    );
});

// export the module
module.exports = mongoose.model('user', userSchema);

const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const userControllers = {};

// getting consumers currently with email addresses since they're unique
// email addresses will 100% be provided during login whereas we weren't sure if the unique id that mongo creates would be available when getConsumers is called
// if id is available, should probably switch to that
// get request to get consumer data needs to be an object containing the property email and the user email you're looking to get back
// neighborControllers.getConsumers = async (req, res, next) => {
//   try {
//     res.locals.consumers = await Consumers.find({
//       email: req.params.email,
//     }).exec();
//     console.log('stored consumer: ', res.locals.consumers);
//     return next();
//   } catch (err) {
//     return next({
//       log: `Error occured in getConsumers middleware, ${err}`,
//       status: 400,
//       message: { err: 'An error occurred when getting consumer data' },
//     });
//   }
// };

userControllers.verifyUser = (req, res, next) => {
  console.log(`ENTERED VERIFY:  `);
  const { password, email } = req.body;

  User.findOne({ email: `${email}` })
    .then((doc) => {
      // if username doesn't exist, send to sign up
      if (!doc) {
        // ASK FRONT END ABOUT REROUTING BAD SIGN UP
        return res.redirect('/CreateAcct');
      }
      // check password
      bcrypt
        .compare(password, doc.password)
        .then((result) => {
          if (!result) {
            // ASK FRONT END ABOUT REROUTING BAD SIGN UP
            return res.redirect('/LoginPage');
          } else {
            res.locals.user = doc;
            return next();
          }
        })
        .catch((err) => {
          next({
            log: err,
            message: {
              err: 'error in comparing hash of userController.verifyUser',
            },
          });
        });
    })
    .catch((err) => {
      next({
        log: err,
        message: { err: 'error in userController.verifyUser' },
      });
    });
};

// define controller for creating users (use .create)
userControllers.createUser = ({ body }, res, next) => {
  try {
    User.create({
      firstName: body.body.firstName,
      lastName: body.body.lastName,
      email: body.body.email,
      password: body.body.password,
      zipCode: body.body.zipCode,
    });

    return next();
  } catch (err) {
    return next({
      log: `Error occured in createUser middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when creating user data' },
    });
  }
};

// define controller for deleting user
userControllers.deleteUser = async (req, res, next) => {
  try {
    console.log('REQ.PARAMS', req.params);
    await User.deleteOne({ email: req.params._email }).exec();
    return next();
  } catch (err) {
    return next({
      log: `Error occured in deleteUser middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when deleting user data' },
    });
  }
};

// define controller for updating any part of a consumer
// consumer is identified using the req.params, looking for the consumer that matches the param id
// property identifies which key we need to update within our consumer
// update field identifies the value we are replacing the existing one with
userControllers.updateUser = async (req, res, next) => {
  try {
    const updateField = Object.values(req.body).toString();
    const property = Object.keys(req.body).toString();
    await User.findOneAndUpdate(
      { _id: req.params._id },
      { [property]: updateField }
    );
    return next();
  } catch (err) {
    return next({
      log: `Error occured in updateUser middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when updating user data' },
    });
  }
};

// export the module
module.exports = userControllers;

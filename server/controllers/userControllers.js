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
            res.locals.loggedIn = doc;
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
userControllers.createUser = (req, res, next) => {
  try {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      zipCode: req.body.zipCode,
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
    console.log('REQ.BODY', req.body);
    await User.deleteOne({ email: req.body.email }).exec();
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
    //does line 108 conver the entire values and keys arrays to strings?
    const updateField = Object.values(req.body).toString();
    //const updateField = Object.values(req.body)[0] -->??
    const property = Object.keys(req.body).toString();
    await User.findOneAndUpdate(
      { _id: req.body.id },
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

// userControllers.updateUser = async (req, res, next) => {
//   try {
//     const properties = Object.keys(req.body);
//     const values = Object.values(req.body);

//     //iterate over the properties and values and update the user document
//     for (let i = 0; i < properties.length; i++) {
//       await User.findOutAndUpdate(
//         {_id: req.body.id },
//         { [properties[i]]: values[i ]}
//       );
//     }
//     return next();
//   } catch (err) {
//     return next({
//       log: `Error occured in updateUser middleware ${err}`,
//       status: 400,
//       message: { err: `An error occurred when updating user data` }
//     })
//   }
// }

// export the module
module.exports = userControllers;

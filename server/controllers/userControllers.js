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
  console.log('req body --> ', req.body);
  User.findOne({ email: `${email}` })
    .then((doc) => {
      // if username doesn't exist, send to sign up
      if (!doc) {
        // ASK FRONT END ABOUT REROUTING BAD SIGN UP
        return res.redirect('http://localhost:8080/createAccount');
      }
      // check password
      bcrypt
        .compare(password, doc.password)
        .then((result) => {
          if (!result) {
            //can we do a doc find on the database and return all users back to the front end?
            // ASK FRONT END ABOUT REROUTING BAD SIGN UP
            return res.redirect('http://localhost:8080/loginPage');
          } else {
            res.locals.loggedIn = doc;
            console.log(`LEAVING VERIFY:  `);
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
  console.log('REQ BODY', req.body);
  const { firstName, lastName, email, password, zipCode } = req.body;
  try {
    User.create({
      firstName,
      lastName,
      email,
      password,
      zipCode,
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
    const userID = req.cookies.ssid;
    console.log('REQ.BODY', req.body);
    await User.deleteOne({ _id: userID }).exec();
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
    const userID = req.cookies.ssid;
    //does line 108 conver the entire values and keys arrays to strings?
    const updateField = Object.values(req.body).toString();
    //const updateField = Object.values(req.body)[0] -->??
    const property = Object.keys(req.body).toString();
    await User.findOneAndUpdate({ _id: userID }, { [property]: updateField });
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

const Merchant = require('../models/merchantModel');
const bcrypt = require('bcryptjs');
const merchantControllers = {};

merchantControllers.verifyMerchant = (req, res, next) => {
  console.log(`ENTERED VERIFY:  `);
  const { password, email } = req.body;

  Merchant.findOne({ email: `${email}` })
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
              err: 'error in comparing hash of merchantController.verifyUser',
            },
          });
        });
    })
    .catch((err) => {
      next({
        log: err,
        message: { err: 'error in merchantController.verifyMerchant' },
      });
    });
};

merchantControllers.createMerchant = ({ body }, req, res, next) => {
  try {
    Merchant.create({
      businessEmail: req.body.businessEmail,
      merchantPassword: req.body.merchantPassword,
      businessName: req.body.businessName,
      typeOfBusiness: req.body.typeOfBusiness,
      businessZipCode: req.body.businessZipCode,
      description: req.body.description,
      image: req.body.image,
    });

    return next();
  } catch (err) {
    return next({
      log: `Error occured in createMerchant middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when creating merchant data' },
    });
  }
};

// console.log(`ENTERED VERIFY:  `);
// const { password, email } = req.body;

merchantControllers.deleteMerchant = async (req, res, next) => {
  try {
    console.log('REQ.BODY', req.body);
    await Merchant.deleteOne({ email: req.body.email }).exec();
    return next();
  } catch (err) {
    return next({
      log: `Error occured in deleteUser middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when deleting merchant data' },
    });
  }
};

merchantControllers.updateMerchant = async (req, res, next) => {
  try {
    const updateField = Object.values(req.body).toString();
    const property = Object.keys(req.body).toString();
    await Merchant.findOneAndUpdate(
      { _id: req.body.id },
      { [property]: updateField }
    );
    return next();
  } catch (err) {
    return next({
      log: `Error occured in updateMerchant middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when updating merchant data' },
    });
  }
};

// export the module
module.exports = merchantControllers;

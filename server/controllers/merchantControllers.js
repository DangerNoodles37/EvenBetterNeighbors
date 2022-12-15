const Merchant = require('../models/merchantModel');
const bcrypt = require('bcryptjs');
const merchantControllers = {};

merchantControllers.verifyMerchant = (req, res, next) => {
  console.log(`ENTERED VERIFY:  `);
  const { mpassword, memail } = req.body;
  console.log('req.body: ', req.body);
  Merchant.findOne({ merchantEmail: `${memail}` })
    .then((doc) => {
      // if username doesn't exist, send to sign up
      if (!doc) {
        // ASK FRONT END ABOUT REROUTING BAD SIGN UP
        return res.redirect('http://localhost:8080/createAccount');
      }
      // check password
      bcrypt
        .compare(mpassword, doc.merchantPassword)
        .then((result) => {
          if (!result) {
            // ASK FRONT END ABOUT REROUTING BAD SIGN UP
            return res.redirect('http://localhost:8080/loginPage');
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

//const { password, email } = req.body;
merchantControllers.createMerchant = (req, res, next) => {
  console.log('ENTERING CREATE MERCHANT');
  console.log('Merchant req body', req.body);
  const {
    merchantEmail,
    merchantPassword,
    merchantName,
    typeOfMerchant,
    merchantAddress,
    merchantZipCode,
    description,
    image,
  } = req.body;

  Merchant.create({
    merchantEmail,
    merchantPassword,
    merchantName,
    typeOfMerchant,
    merchantAddress,
    merchantZipCode,
    description,
    image,
  })
    .then(() => {
      console.log('LEAVING MERCHANT on successful creation of merchant');
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error occured in createMerchant middleware, ${err}`,
        status: 400,
        message: { err: 'An error occurred when creating merchant data' },
      });
    });
};

//new getMerchants controller that requires review
//does the front end want a hard limit on the number we send back, or are we good with an infinite front page scroll for all merchants?
merchantControllers.getAllMerchants = (req, res, next) => {
  console.log(`ENTERED getMerchants: `);

  Merchant.find()
    .then((docs) => {
      //return an object containing all merchants in the database
      // return res.json({
      //   merchants: docs,
      // });
      res.locals.merchants = docs;
      return next();
    })
    .catch((err) => {
      next({
        log: err,
        message: { err: `error in merchantController.getMerchants` },
      });
    });
};
// console.log(`ENTERED VERIFY:  `);
// const { password, email } = req.body;

merchantControllers.deleteMerchant = async (req, res, next) => {
  try {
    const merchantID = req.cookies.ssid;
    console.log('REQ.BODY', req.body);
    await Merchant.deleteOne({ _id: merchantID }).exec();
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
    const merchantID = req.cookies.ssid;
    const updateField = Object.values(req.body).toString();
    const property = Object.keys(req.body).toString();
    await Merchant.findOneAndUpdate(
      { _id: merchantID },
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

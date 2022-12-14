const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
  console.log('ENTERING SESSION CONTROLLER START SESSION');
  // console.log('reslocals id but stringified', `${res.locals.loggedIn._id}`);
  const userID = `${res.locals.loggedIn._id}`;
  console.log('userId: ', userID);
  const ssid = `${req.cookies.ssid}`;
  console.log('ssid: ', ssid);
  Session.findOne({ cookieID: ssid })
    .then((ssid) => {
      if (ssid) {
        console.log(ssid.cookieId, userID);
        console.log(typeof ssid);
        // redirect because ssid exists
        console.log('found session with matching ssid');
        return res.redirect('/landing');
      } else {
        console.log(ssid);
        console.log(typeof ssid);
        // logic because ssid was not found in the sessions collection
        // handle Create Session here
        console.log('SSID not found');
        Session.create({ cookieId: userID })
          .then(() => {
            return next();
          })
          .catch((err) => {
            // error handling logic here
            return next({
              log: `startSession in sessionController: ERROR: ${
                typeof err === 'object' ? JSON.stringify(err) : err
              }`,
              message: {
                err: 'Error occurred in creating session in startSession method of sessionController',
              },
            });
          });
      }
    })
    .catch((err) => {
      // error handling logic here
      return next({
        log: `startSession in sessionController: ERROR: ${
          typeof err === 'object' ? JSON.stringify(err) : err
        }`,
        message: {
          err: 'Error occurred in findind session in startSession method of sessionController',
        },
      });
    });
  // .then();
};

sessionController.isLoggedIn = (req, res, next) => {
  const ssid = req.cookies.ssid;
  Session.findOne({ cookieID: ssid })
    .then((ssid) => {
      if (ssid === null) {
        return res.redirect('/userLogin');
      } else {
        return next();
      }
    })
    .catch((err) => {
      return next({
        log: err,
        message: { err: 'Error occured in sessionController.isLoggedIn' },
      });
    });
};

module.exports = sessionController;

const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const merchantControllers = require('../controllers/merchantControllers');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

router.get(
  '/userLogin',
  userControllers.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.status(200).json(res.locals.loggedIn);
  }
);

//create consumers route is now going to createConsumer
router.post('/createUser', userControllers.createUser, (req, res) => {
  res.status(200);
});

router.delete('/delete', userControllers.deleteUser, (req, res) => {
  console.log('hit delete router');
  res.status(200).json({});
});

router.patch('/update', userControllers.updateUser, (req, res) => {
  res.status(200).json({});
});

//merchant side routers

// ADD LIST OF ALL MERCHANTS

router.get('/merchantLogin', merchantControllers.verifyMerchant, (req, res) => {
  res.status(200).json(res.locals.merchant);
});

//create consumers route is now going to createConsumer
router.post(
  '/createMerchant',
  merchantControllers.createMerchant,
  (req, res) => {
    res.status(200);
  }
);

//I think this router might need adjustment
router.delete(
  '/merchant/deleteMerchant',
  merchantControllers.deleteMerchant,
  (req, res) => {
    console.log('hit delete router', req.body);
    res.status(200).json({});
  }
);

router.patch(
  '/merchant/updateMerchant',
  merchantControllers.updateMerchant,
  (req, res) => {
    res.status(200).json({});
  }
);

module.exports = router;

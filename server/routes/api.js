const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const merchantControllers = require('../controllers/merchantControllers');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

router.post(
  '/userLogin',
  userControllers.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.status(200).redirect('http://localhost:8080/landing');
  }
);

//create consumers route is now going to createConsumer
router.post('/createUser', userControllers.createUser, (req, res) => {
  res.status(200).redirect('http://localhost:8080/loginPage');
});

router.delete('/delete', userControllers.deleteUser, (req, res) => {
  console.log('hit delete router');
  res.status(200).json({});
});

router.patch('/update', userControllers.updateUser, (req, res) => {
  res.status(200).json({});
});

//merchant side routers

// LIST OF ALL MERCHANTS
router.get('/allMerchants', merchantControllers.getAllMerchants, (req, res) => {
  res.status(200).json(res.locals.merchants);
});

router.post(
  '/merchantLogin',
  merchantControllers.verifyMerchant,
  (req, res) => {
    res.status(200).redirect('http://localhost:8080/landing');
  }
);

//create consumers route is now going to createConsumer
router.post(
  '/createMerchant',
  merchantControllers.createMerchant,
  (req, res) => {
    res.status(200).redirect('http://localhost:8080/loginPage');
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

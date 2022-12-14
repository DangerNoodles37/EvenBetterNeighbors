const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.get('/:email', userControllers.verifyUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

//create consumers route is now going to createConsumer
router.post('/createUser', userControllers.createUser, (req, res) => {
  res.status(200);
});

router.delete('/:_email', userControllers.deleteUser, (req, res) => {
  console.log('hit delete router', req.params);
  res.status(200).json({});
});

router.patch('/:_email', userControllers.updateUser, (req, res) => {
  res.status(200).json({});
});

module.exports = router;

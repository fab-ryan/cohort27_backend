const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get('/users', userController.getAllUsers);

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getSingleUser);

exports = module.exports = router;

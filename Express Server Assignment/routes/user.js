// src/routes/users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsersPage);

module.exports = router;

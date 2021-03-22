const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/', authController.login);    // Login authentication

module.exports = router;
const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/login', authController.login);    // Login authentication
router.post('/', authController.register); // Register 

module.exports = router;
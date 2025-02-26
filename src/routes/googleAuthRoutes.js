const express = require('express');
const router = express.Router();
const googleAuthController = require('../controllers/googleAuthController');

router.post('/signin', googleAuthController.signin);

module.exports = router;

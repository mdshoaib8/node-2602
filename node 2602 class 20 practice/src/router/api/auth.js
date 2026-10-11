const express = require('express');
const { signUpController } = require('../../controllers/auth.controller');
const router = express.Router();


// url: http://localhost:3000/api/auth/signup
router.post('/signup', signUpController);

module.exports = router;
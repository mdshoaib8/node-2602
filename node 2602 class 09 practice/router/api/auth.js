// router/api/auth.js
const express = require('express');
const router = express.Router();

// controllers
const { signup, signin } = require('../../controllers/auth.controllers');

// request method: POST
// url: http://localhost:3000/api/auth/signup
router.post('/signup', signup);

// request method: POST
// url: http://localhost:3000/api/auth/signin
router.post('/signin', signin);

module.exports = router;
// router/api/auth.js
const express = require('express');
const router = express.Router();

// controllers
const { signup, signin, errorHandler } = require('../../controllers/auth.controllers');

// request method: POST
// url: http://localhost:3000/api/auth/signup
router.post('/signup', signup);

// Router-level middleware example:
router.use((req, res, next) => {
    console.log(`Router-level middleware: ${req.method} ${req.url}`);
    next();
});

// request method: POST
// url: http://localhost:3000/api/auth/signin
router.post('/signin', signin);


// request method: POST
// url: http://localhost:3000/api/auth/error
router.post('/error', errorHandler);

module.exports = router;
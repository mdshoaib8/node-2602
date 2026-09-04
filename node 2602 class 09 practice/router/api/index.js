// router/api/index.js
const express = require('express');
const router = express.Router();

// router 'api/index.js' file imports the 'auth' and 'order' files.
const auth = require('./auth');
const order = require('./order');

// middleware to use the imported routers
router.use('/auth', auth);
router.use('/order', order);

// export the router
module.exports = router;
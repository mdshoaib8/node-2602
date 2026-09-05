// router/index.js
const express = require('express');
const router = express.Router();
// const router = require('express').Router();

// router 'index.js' file imports the 'api' folder.
const api = require('./api');

// middleware to use the imported router
router.use('/api', api);

// export the router
module.exports = router;
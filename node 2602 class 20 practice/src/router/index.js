const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

// url: http://localhost:3000/api/
router.use('/api', apiRouter);

module.exports = router;
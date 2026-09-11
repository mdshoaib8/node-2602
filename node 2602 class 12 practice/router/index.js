const express = require('express');
const router = express.Router();
const { createTaskFunction } = require('../controllers/task.controller');

// method: POST
// url: http://localhost:5000/create-task
router.post("/create-task", createTaskFunction);


module.exports = router;
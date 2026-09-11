const express = require('express');
const router = express.Router();
const { createTaskController, readTaskController } = require('../controllers/task.controller');

// method: POST
// url: http://localhost:5000/create-task
router.post("/create-task", createTaskController);

// method: GET
// url: http://localhost:5000/read-task
router.get("/read-task", readTaskController);


module.exports = router;
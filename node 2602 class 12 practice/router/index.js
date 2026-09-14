const express = require('express');
const router = express.Router();
const {
    createTaskController,
    readTaskController,
    updateTaskController,
    deleteTaskController
} = require('../controllers/task.controller');

// method: POST
// url: http://localhost:5000/create-task
router.post("/create-task", createTaskController);

// method: GET
// url: http://localhost:5000/read-task
router.get("/read-task", readTaskController);

// method: PUT
// url: http://localhost:5000/update-task/:id
router.put("/update-task/:id", updateTaskController);

// method: DELETE
// url: http://localhost:5000/delete-task/:id
router.delete("/delete-task/:id", deleteTaskController);




module.exports = router;
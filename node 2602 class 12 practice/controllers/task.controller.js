const taskModel = require("../model/task.model");

const createTaskController = async function(req, res) {
    const createTask = new taskModel(req.body);
    
    await createTask.save();
    res.status(201).json({
        success: true,
        message: "The task is created successfully!",
        data: createTask,
    });
};

const readTaskController = async (req, res) => {
    const readTask = await taskModel.find();
    res.status(200).json({
        success: true,
        message: "The task is read successfully!",
        data: readTask,
    });
};

module.exports = {
    createTaskController,
    readTaskController
};
const taskModel = require("../model/task.model");

const createTaskFunction = async function(req, res) {
    const createTask = new taskModel(req.body);
    
    await createTask.save();
    res.status(201).json({
        success: true,
        message: "The task is created successfully!",
        data: createTask,
    })
}

module.exports = {
    createTaskFunction,
};
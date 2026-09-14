const taskModel = require("../model/task.model");

// CREATE TASK
const createTaskController = async function (req, res) {
    const createTask = new taskModel(req.body);
    await createTask.save();
    res.status(201).json({
        success: true,
        message: "The task is created successfully!",
        data: createTask,
    });
};

// READ TASK
const readTaskController = async (req, res) => {
    const readTask = await taskModel.find();
    res.status(200).json({
        success: true,
        message: "The task is read successfully!",
        data: readTask,
    });
};

// UPDATE TASK
const updateTaskController = async (req, res) => {
    const { id } = req.params;
    const updateTask = await taskModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );
    if (!updateTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found!",
        });
    }
    res.status(200).json({
        success: true,
        message: "The task is updated successfully!",
        data: updateTask,
    });
};

// DELETE TASK
const deleteTaskController = async (req, res) => {
    const { id } = req.params;
    const deleteTask = await taskModel.findByIdAndDelete(id);
    if (!deleteTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found!",
        });
    }
    res.status(200).json({
        success: true,
        message: "The task is deleted successfully!",
        data: deleteTask,
    });
};


module.exports = {
    createTaskController,
    readTaskController,
    updateTaskController,
    deleteTaskController,
};
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        taskTitle: String,
        taskDescription: String,
        status: String,
        dueDate: String,
        isDone: {
            type: Boolean,
            required: true
        },
    },
    {
        // versionKey: true,
        timestamps: true
    }
);

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
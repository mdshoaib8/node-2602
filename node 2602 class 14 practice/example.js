// DATA
const studentInfo = {
    username: "rahim",
    email: "abc@gmail.com",
    password: 12345
};

// SCHEMA
const studentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: Number
});

// Model
const studentModel = mongoose.model("studentInfo", studentSchema);

// Interact
studentModel.create();
studentModel.find();
studentModel.findById();
studentModel.findOne();
studentModel.updateOne();
studentModel.deleteOne();


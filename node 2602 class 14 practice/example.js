const studentInfo = {
    username: "rahim",
    email: "abc@gmail.com",
    password: 12345
};

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:Number,
        required: true
    },
})
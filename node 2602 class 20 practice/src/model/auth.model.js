const mongoose = require('mongoose');

// 1. Define the User Schema blueprint
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            trim: true, // Removes whitespace from both ends
            minlength: [3, 'Username must be at least 3 characters long']
        },
        email: {
            type: String,
            required: [true, 'Email address is required'],
            unique: true,
            lowercase: true, // Automatically converts to lowercase before saving
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters long']
        },
        role: {
            type: String,
            enum: ['user', 'admin', 'moderator'], // Restricts value to this list
            default: 'user'
        },
        age: {
            type: Number,
            min: [18, 'You must be at least 18 years old']
        },
        isActive: {
            type: Boolean,
            default: true
        },
        otp: {
            type: String,
            default: null
        },
    },
    {
        // 2. Options
        timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
        versionKey: false // Disables the `__v` version key
    }
);

// 3. Compile the Schema into a usable Model
const User = mongoose.model('User', userSchema);

// 4. Export the Model for use in other parts of the application
module.exports = User;


// sample input for testing
// {
//     "username": "john_doe",
//     "email": "john.doe@example.com",
//     "password": "123456",
//     "age": 25
// }
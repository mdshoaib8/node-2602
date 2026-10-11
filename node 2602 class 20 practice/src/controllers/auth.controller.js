const apiResponse = require('../utils/apiResponse');
const UserModel = require('../model/auth.model');
const { asyncHandler } = require('../utils/asyncHandler');

const signUpController = asyncHandler(async (req, res) => {

    const { username, email, password, age } = req.body;

    const user = new UserModel({
        username,
        email,
        password,
        age
    });

    await user.save();

    apiResponse(res, 200, true, 'User signed up successfully', { user: req.body });
})

module.exports = { signUpController };
const users = require("../database/user.data");

function userController(req, res) {
    res.status(200).json({ success: true, data: users })
}

module.exports = userController;
// controllers/auth.controllers.js
// Signup route handler
function signup(req, res) {
    res.send('Signup route is working!');
}

// Signin route handler
function signin(req, res) {
    res.send(`Signin route is working!`);
}

// Export the route handlers
module.exports = {
    signup,
    signin
};
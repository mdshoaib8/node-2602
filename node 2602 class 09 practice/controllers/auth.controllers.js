// controllers/auth.controllers.js
// Signup route handler
function signup(req, res) {
    res.send('Signup route is working!');
}

// Signin route handler
function signin(req, res) {
    res.send(`Signin route is working!`);
}

function errorHandler(req, res) {
    throw new Error('Signin route error!'); // Simulate an error for testing
}

// Export the route handlers
module.exports = {
    signup,
    signin,
    errorHandler
};
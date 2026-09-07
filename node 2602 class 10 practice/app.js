// app.js
const express = require('express');
const app = express();

// app.js file imports the 'router' folder and uses it as middleware for the app.
const router = require('./router');

// Importing the 'persons' array from the 'db.js' file.
const { persons, users } = require('./db');


// Built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. This middleware is available in Express v4.16.0 onwards.
app.use(express.json());

// application-level middleware to log the request method and URL for every incoming request. This middleware is applied before the router, so that it logs all requests, including those handled by the router.
app.use((req, res, next) => {
    console.log(`Clock: ${new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })} \nRequest Method: ${req.method} ${req.url}`);
    next();
});

// use the router for all routes starting with '/api'
app.use(router);

// ================================================== //
// Request method: GET
// URL: http://localhost:3000/health
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});

// Request method: POST
// URL: http://localhost:3000/signup
app.post("/signup", (req, res) => {
    const result = users.push(req.body);
    console.log(result);
    res.status(201).json({
        success: true,
        data: req.body
    });
});

// Request method: POST
// URL: http://localhost:3000/signin
app.post("/signin", (req, res) => {
    const validUser = users.find(user => (
        user.email === req.body.email
    ));
    console.log(validUser);
    if (validUser) {
        if (validUser.password === req.body.password) {
            res.status(200).json({
                success: true,
                message: "login is successful"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "invalid password"
            })
        }
    } else {
        res.status(401).json({
            success: false,
            message: "user not found"
        })
    }
})

// Request method: GET
// URL: http://localhost:3000/users
app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    });
});

// Request method: GET
// URL: http://localhost:3000/persons
app.get("/persons", (req, res) => {
    res.status(200).json({
        success: true,
        data: persons
    });
});


// ================================================== //

// Error handling middleware for the auth routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


// export the app
module.exports = app;
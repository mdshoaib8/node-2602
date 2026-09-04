// app.js
const express = require('express');
const app = express();

// app.js file imports the 'router' folder and uses it as middleware for the app.
const router = require('./router');

// middleware to parse incoming JSON requests. note that this middleware is applied before the router, so that the router can access the parsed JSON data in the request body.
app.use(express.json());

// application-level middleware to log the request method and URL for every incoming request. This middleware is applied before the router, so that it logs all requests, including those handled by the router.
app.use((req, res, next) => {
    console.log(`Clock: ${new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })} \nRequest Method: ${req.method} ${req.url}`);
    next();
});

// use the router for all routes starting with '/api'
app.use(router);

// Error handling middleware for the auth routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


// export the app
module.exports = app;
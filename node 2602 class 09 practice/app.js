// app.js
const express = require('express');
const app = express();

// app.js file imports the 'router' folder and uses it as middleware for the app.
const router = require('./router');

// middleware to parse incoming JSON requests. note that this middleware is applied before the router, so that the router can access the parsed JSON data in the request body.
app.use(express.json());

// use the router for all routes starting with '/api'
app.use(router);

// export the app
module.exports = app;
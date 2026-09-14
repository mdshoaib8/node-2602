const express = require('express');
const path = require('path');
const router = require('./router');
const dbConnect = require('./config/db');
const app = express();

// Express JSON Middleware
app.use(express.json());


// Database connection
dbConnect();

// Serve Frontend
app.use(express.static(path.join(__dirname, "view")));


// Routes
app.use("/", router);

module.exports = app;
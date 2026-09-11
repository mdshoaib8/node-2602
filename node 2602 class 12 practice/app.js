const express = require('express');
const router = require('./router');
const dbConnect = require('./config/db');

const app = express();

// Express JSON Middleware
app.use(express.json());

// Database connection
dbConnect();

// Routes
app.use("/", router);

module.exports = app;
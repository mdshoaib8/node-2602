require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbConnect = require("./config/db.js");

// Database connection
dbConnect();

// Middlewares
app.use(express.json());

// API Routes
app.use(require("./router/index.js"));

// Server Health / Welcome Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
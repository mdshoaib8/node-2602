require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const dbConnect = require("./config/db.js");

dbConnect();
app.use(express.json());
app.use("/", require("./router/index.js"));

// url: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
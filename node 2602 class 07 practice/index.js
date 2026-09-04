const express = require('express');
const app = express();
const port = 2000;
const sum = require("./sum.js")

sum(210, 20);

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
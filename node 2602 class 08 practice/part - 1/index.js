const express = require('express');
const userController = require('./controller/user.controller');
const app = express();
const port = 3000;

app.get('/user-data', userController);

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
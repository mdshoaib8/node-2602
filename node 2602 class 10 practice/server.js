// server.js
// server.js file imports the 'app' file and starts the server on port 3000.
const app = require('./app');
const PORT = 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

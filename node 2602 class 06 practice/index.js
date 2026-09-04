const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request is received.");

    res.write('This is res.write().');
    res.end();
});

server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
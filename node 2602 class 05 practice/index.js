// program - 1
/* 
// 1️⃣ Node.js-এর built-in http module import করছি
const http = require('http'); // http একটি object


// 2️⃣ Server কোন port-এ চলবে সেটা নির্ধারণ করছি
const port = 1000; // portRange = 0 - 65,535


// 3️⃣ একটি HTTP server তৈরি করছি
const server = http.createServer((req, res) => {
    // Client থেকে request আসলে এই code চলবে
    console.log('hello, world!');

});


// 4️⃣ Server-কে port 1000-এ চালু করছি
// Server successfully চালু হলে callback function চলবে
server.listen(port, () => {
    // Server চালু হওয়ার confirmation terminal-এ দেখাবে
    console.log(`Server is running at port: ${port}`);
});

 */


// program - 2
/* 
const http = require('http');

const port = 2000;

const server = http.createServer((req, res) => {
    console.log('1 request is received.');
    res.end("This is a response.");
})

server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})
 */


// program - 3
/* 
const http = require('http');
const port = 2000;
const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun</title>
</head>

<body style="height: 100vh;">
    <div
        style="width: 300px; display: flex; justify-content: center; align-items: center; background-color: whitesmoke; border-radius: 5px;">
        <h1 style="">Mohammad Shoaib</h1>
        <p>
            This is Mohammad Shoaib from server.
        </p>
    </div>

</body>

</html>`;
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end(html);
})

server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})
 */

// program - 4
/* 
const http = require('http');
const port = 2000;
const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun</title>
</head>

<body style="height: 100vh;">
    <div
        style="width: 300px; display: flex; justify-content: center; align-items: center; background-color: whitesmoke; border-radius: 5px;">
        <h1 style="">Mohammad Shoaib</h1>
        <p>
            This is Mohammad Shoaib from server.
        </p>
    </div>

</body>

</html>`;
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end(html);
})

server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})
 */


// program - 5

const http = require('http');
const port = 2000;

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home Route")
    } else if (req.url === "/about") {
        res.end("About Route")
    } else if (req.url === "/contact") {
        res.end("Contact Route");
    } else {
        res.end("501 Error!");
    }
})

server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})




// program - 1: (Basename)
/* 
const path = require('path');
const fileLocation = 'E:\\OS X\\OS7 File X (S3, D1, D2)\\S1. TO DO\\2. node 2602 class 03 practice\\index.js';
const fileName = path.basename(fileLocation);

console.log("\n", 'Base Name:', fileName, "\n"); 

// Output: Base Name: index.js
 */



// program - 2: (Getting Directory Name)
/* 
const Path = require('path');

const fileLocation = 'E:\\OS X\\OS7 File X (S3, D1, D2)\\S1. TO DO\\2. node 2602 class 03 practice\\index.js';

const fileName = Path.dirname(fileLocation);

console.log("\n", 'Directory Name:', fileName, "\n"); 

// Output: Directory Name: E:\OS X\OS7 File X (S3, D1, D2)\S1. TO DO\2. node 2602 class 03 practice
 */


// program - 3: (Resolving Path)
/* 
const Path = require('path');

const folderName = '2. node 2602 class 03 practice';
const fileName = 'index.js';
const absolutePath = Path.resolve(folderName, fileName);

console.log("\n", 'Resolved Path:', absolutePath, "\n");

// Output: Resolved Path: E:\OS X\OS7 File X (S3, D1, D2)\S1. TO DO\2. node 2602 class 03 practice\index.js
 */



// program - 4: (Joining Path)
/* 
const Path = require('path');
const fileDirectory = __dirname;
const fileName = 'index.js';
const joinedPath = Path.join(fileDirectory, fileName);

console.log("\n", 'Joined Path:', joinedPath, "\n"); 

// Output: Joined Path: E:\OS X\OS7 File X (S3, D1, D2)\S1. TO DO\2. node 2602 class 03 practice\index.js
 */


// program - 5: (Joining Path)
/* 
const Path = require('path');
const directory = 'E:\\OS X\\OS7 File X (S3, D1, D2)\\S1. TO DO';
const folderName = '2. node 2602 class 03 practice';
const fileName = 'index.js';
const joinedPath = Path.join(directory, folderName, fileName);

console.log("\n", 'Joined Path:', joinedPath, "\n"); 

// Output: Joined Path: E:\OS X\OS7 File X (S3, D1, D2)\S1. TO DO\2. node 2602 class 03 practice\index.js
 */


// program - 6: (Getting Current Directory)

// console.log("\n", 'Current Directory:', __dirname, "\n");

// program - 7: (Getting Current File)

// console.log("\n", 'Current File:', __filename, "\n");


// program - 8: (Getting File Extension)
/* 
const Path = require('path');
const currentFile = __filename;

const fileExtension = Path.extname(currentFile);

console.log("\n", 'File Extension:', fileExtension, "\n");
 */

// program - 9: (Getting File Extension)
/* 
const Path = require('path');
const currentFile = Path.join(__dirname, 'myfile.txt');

const fileExtension = Path.extname(currentFile);

console.log("\n", 'File Extension:', fileExtension, "\n");
 */

// Summary of Path Module Methods Used in the Above Programs:

// 1. path.basename(path) - Returns the last portion of a path (the file name).
// 2. path.dirname(path) - Returns the directory name of a path. 
// 3. path.resolve([...paths]) - Resolves a sequence of paths into an absolute path.
// 4. path.join([...paths]) - Joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
// 5. __dirname - A Node.js global variable that contains the directory name of the current module.
// 6. __filename - A Node.js global variable that contains the file name of the current module.
// 7. path.extname(path) - Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if the first character of it is ., then it returns an empty string.
// 8. path.parse(path) - Returns an object whose properties represent significant elements of the path. The returned object will have the following properties: root, dir, base, ext, name.
// 9. path.format(pathObject) - Returns a path string from an object, the opposite of path.parse(). The object should have the following properties: root, dir, base, ext, name. The dir and base properties are mutually exclusive; if both are provided, dir will be used. If neither is provided, the current working directory will be used as the default for dir.



















// Buffer & Stream in Node.js
/* 
const fileSystem = require('fs');

const inputFile = fileSystem.createReadStream('myfile.txt', { encoding: 'utf8' });

const outputFile = fileSystem.createWriteStream('output.txt', { encoding: 'utf8' });

inputFile.pipe(outputFile);
 */

// program - 10: (Buffer & Stream in Node.js)
/* 
const fileSystem = require('fs');

const fileOne = "fileOne.txt"; // Input file
const fileTwo = "fileTwo.txt"; // Output file
const encoding = { encoding: 'utf8' }; // UTF-8 encoding

const readStream = fileSystem.createReadStream(fileOne, encoding);
const writeStream = fileSystem.createWriteStream(fileTwo);

readStream.pipe(writeStream);
 */

// program - 11: (Buffer & Stream in Node.js)
/* 
const fileSystem = require('fs');

const fileOne = "fileOne.txt"; // Input file
const fileTwo = "fileTwo.txt"; // Output file
const encoding = { encoding: 'utf8' }; // UTF-8 encoding
const highWaterMark = { highWaterMark: 5 }; // 5 bytes

// Create read and write streams with specified encoding and highWaterMark
const readStream = fileSystem.createReadStream(fileOne, {
    ...encoding, 
    ...highWaterMark
});
const writeStream = fileSystem.createWriteStream(fileTwo);

// Listen for 'data' event to read chunks of data from the read stream
readStream.on('data', (chunk) => {
    console.log('Chunk received:', chunk);
    writeStream.write(chunk); // Write the chunk to the write stream
});

// Listen for 'end' event to know when the read stream has finished
readStream.on('end', () => {
    console.log('Read stream ended.');
    writeStream.end();
});

// Listen for 'finish' event to know when the write stream has finished writing
writeStream.on('finish', () => {
    console.log('Write stream finished.');
});

 */



// program - 12: (Buffer & Stream in Node.js)
/* 
const fs = require('fs');
const path = require('path');

// Input file
const fileOne = path.join(__dirname, 'fileOne.txt');

// Output file
const fileTwo = path.join(__dirname, 'fileTwo.txt');

// Read stream with UTF-8 encoding and 5 bytes highWaterMark
const readStream = fs.createReadStream(fileOne, { encoding: 'utf8', highWaterMark: 5 });

// Write stream
const writeStream = fs.createWriteStream(fileTwo);

readStream.on('data', (chunk) => {
    console.log('Chunk received:', chunk);
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('Read stream ended.');
    writeStream.end();
});

writeStream.on('finish', () => {
    console.log('Write stream finished.');
});

 */



// summary of Buffer & Stream in Node.js:

// 1. Buffer: A temporary storage area for data that is being transferred between two locations. In Node.js, buffers are used to handle binary data, such as files or network streams. Buffers are instances of the Buffer class and can be created using the Buffer.from() or Buffer.alloc() methods.

// 2. Stream: A stream is a sequence of data that is read or written over time. In Node.js, streams are used to handle large amounts of data efficiently, such as reading or writing files, or sending data over a network. Streams can be readable, writable, or both (duplex). The most common types of streams in Node.js are Readable streams, Writable streams, Duplex streams, and Transform streams.

// 3. Readable Stream: A readable stream is a stream that can be read from. It emits data events when data is available to be read. In Node.js, readable streams are created using the fs.createReadStream() method for reading files, or the http.IncomingMessage object for reading HTTP requests.

// 4. Writable Stream: A writable stream is a stream that can be written to. It emits drain events when it is ready to accept more data. In Node.js, writable streams are created using the fs.createWriteStream() method for writing files, or the http.ServerResponse object for sending HTTP responses.

// 5. Duplex Stream: A duplex stream is a stream that can be both read from and written to. It is a combination of a readable stream and a writable stream. In Node.js, duplex streams are created using the net.Socket object for TCP connections, or the http.ClientRequest object for sending HTTP requests.

// 6. Transform Stream: A transform stream is a type of duplex stream that can modify or transform the data as it is being read or written. In Node.js, transform streams are created using the stream.Transform class, which allows you to implement custom transformation logic in the _transform() method.

// 7. Pipe: The pipe() method is used to connect a readable stream to a writable stream, allowing data to flow from the readable stream to the writable stream. In Node.js, the pipe() method is commonly used to read data from a file and write it to another file, or to send data over a network connection.


// 8. HighWaterMark: The highWaterMark option is used to specify the maximum number of bytes that can be buffered in a stream before it stops reading or writing data. In Node.js, the highWaterMark option can be set when creating a readable or writable stream, and it can be used to control the flow of data in a stream.


// 9. Encoding: The encoding option is used to specify the character encoding of the data being read or written in a stream. In Node.js, the encoding option can be set when creating a readable or writable stream, and it can be used to convert binary data to text data or vice versa. Common encodings include 'utf8', 'ascii', and 'base64'.

// How client to server to database works in Node.js:

// 1. Client Request: The client sends an HTTP request to the server, which can be initiated by a web browser, mobile app, or any other client application. The request can include parameters, headers, and a body containing data.

// 2. Server Processing: The server receives the request and processes it using a web framework like Express.js. The server can perform various operations, such as validating the request, authenticating the user, and preparing a response. If the request requires data from a database, the server will construct a query to retrieve or manipulate the data.

// 3. Database Interaction: The server interacts with the database using a database driver or an Object-Relational Mapping (ORM) library. The server sends the query to the database, which processes it and returns the requested data or confirmation of the operation performed.

// 4. Server Response: After receiving the data from the database, the server constructs an HTTP response, which can include status codes, headers, and a body containing the requested data or a message indicating the result of the operation. The server then sends the response back to the client.

// Server response token: The server may also include a token in the response, which can be used for authentication and authorization in subsequent requests. This token can be a JSON Web Token (JWT) or any other form of token that the server uses to identify and authenticate the client.

// 5. Client Handling: The client receives the server's response and processes it accordingly. This can involve rendering the data in a user interface, displaying messages to the user, or performing further actions based on the response. The client may also handle errors or unexpected responses from the server.

// 6. Asynchronous Communication: Node.js uses an event-driven, non-blocking I/O model, which allows it to handle multiple client requests concurrently. This means that while the server is waiting for a response from the database, it can continue processing other incoming requests, improving overall performance and scalability.

// 7. Error Handling: Both the server and client should implement error handling mechanisms to manage potential issues, such as network failures, database errors, or invalid requests. This ensures that the application can gracefully recover from errors and provide meaningful feedback to users.

// WHAT IS query?

// A query is a request for data or information from a database. It is typically written in a specific query language, such as SQL (Structured Query Language) for relational databases, and is used to retrieve, insert, update, or delete data stored in the database. Queries can be simple or complex, depending on the requirements of the application and the structure of the database.
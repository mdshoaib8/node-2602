// program - 1
/* 
const EventEmitter = require('events');

const event = new EventEmitter();

function One() {
    console.log("1. One\n");
}

function Two() {
    console.log("2. Two\n");
}

function Three() {
    console.log("3. Three\n");
}

function Four() {
    console.log("4. Four\n");
}

// event.on
event.on('trigger', One);
event.on('trigger', Two);
event.on('trigger', Three);
event.on('trigger', Four);

event.on('action', One);

// event.emit
event.emit('trigger');
event.emit('action');
console.log("trigger Event Count: ", event.listenerCount("trigger"), "\n");

event.removeListener('trigger', One);
// event.removeAllListeners("trigger");

// event.emit
event.emit('trigger');
event.emit('action');
console.log("action Event Count: ", event.listenerCount("action"), "\n");
 */




// program - 2
/* 
const fs = require("fs");

const EventEmitter = require("events");

console.log("fs = ",  typeof fs);
console.log("EventEmitter = ",  typeof EventEmitter);
 */



// program - 3
/* 
const FileSystem = require("fs");

const fileName = "test.txt";

const fileContent = "This is Shoaib.";

function callingBack(error) {
    if (error) {
        console.log("Error: ", error);
    } else {
        console.log("File Created Successfully");
    }
}

FileSystem.writeFile(fileName, fileContent, callingBack);
 */


// program - 4
/* 
const FileSystem = require("fs");
const fileName = "test.txt";
const fileContent = "This is a txt file.";

function callingBack(error) {
    if (error) {
        console.log("Error: ", error);
    } else {
        console.log("Line - 3: File Created Successfully");
    }
}

console.log("Line - 1");
console.log("Line - 2");
FileSystem.writeFile(fileName, fileContent, callingBack);
// const fileData = FileSystem.writeFileSync(fileName, fileContent);
// console.log(fileData, "Line - 3: File Created Successfully");
console.log("Line - 4");
 */



// program - 5
/* 
const FileSystem = require("fs");
const fileName = "test.txt";
const encoding = "utf-8";

function callingBack(error, data) {
    if (error) {
        console.log("Error: ", error);
    } else {
        // console.log("File Read Successfully");
        console.log("\n", "Data: ", data, "\n");
    }
}

// FileSystem.readFile(fileName, encoding, callingBack);
const fileData = FileSystem.readFileSync(fileName, encoding);
console.log("\n", fileData, "\n");
 */


// program - 6
/* 
const FileSystem = require("fs");
const fileName = "test.txt";
const fileContent = "\nThis is a new line.";

function callingBack(error) {
    if (error) {
        console.log("Error: ", error);
    } else {
        console.log("Data Appended Successfully");
    }
}

// FileSystem.appendFile(fileName, fileContent, callingBack);
FileSystem.appendFileSync(fileName, fileContent);
 */


// program - 7
/* 
const FileSystem = require("fs");
const fileName = "test.txt";

function callingBack(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("This file is deleted.");
    }
};

FileSystem.unlink(fileName, callingBack);
 */

// program - 8
/* 
const FileSystem = require("fs");
const oldFileName = "test.txt";
const newFileName = "hello.txt"
const fileContent = "This is line - 1."

function callingBack(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('File is renamed successfully.');
    }
}

// FileSystem.writeFile(oldFileName, fileContent, callingBack);
FileSystem.rename(oldFileName, newFileName, callingBack);
 */

// program - 9
/* 
const FileSystem = require("fs");
const fileName = "myfile.txt";
const fileContent = "This is line - 1."
const encoding = "utf8"

function callingBack(error, data) {
    if (error) {
        console.log("Error reading file: ", error);
        return;
    }
    console.log("File content: ", data);
}

// FileSystem.writeFile(fileName, fileContent, callingBack);
FileSystem.readFile(fileName, encoding, callingBack);
 */




// program - 10
/* 
// synchronous
// asynchronous
// promise

const fileSystem = require("fs").promises;
const fileName = "myfile.txt";
const encoding = "utf8"

async function fileCreate() {
    const result = await fileSystem.readFile(fileName, encoding);
    console.log(result);
}

fileCreate();
 */



// program - 11
/* 
const FileSystem = require('fs');

const folderName = "Folder X";

// create folder
// const createFolder = FileSystem.mkdirSync(folderName);
// console.log(createFolder);

// delete folder
const deleteFolder = FileSystem.rmdirSync(folderName);

console.log(deleteFolder);
 */



// program - 12
/* 
import FileSystem from 'fs';

const folderName = "Folder X";

function callBack() {
    console.log("Folder Created Successfully");
}

const createFolder = FileSystem.mkdir(folderName, callBack);
 */


// program - 13
/* 
import FileSystem from 'fs';

const folderName = "Folder X";

function callBack() {
    console.log("Folder Created Successfully");
}

const createFolder = FileSystem.mkdir(folderName, callBack);
 */

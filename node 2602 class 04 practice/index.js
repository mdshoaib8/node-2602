// program - 1

// Program name: URL Components Extraction

// Description: This program extracts various components from a given URL using the WHATWG URL API in Node.js.

/* 
const { URL } = require('url');

const websiteUrl = 'https://www.google.com/search?q=sex+and+porn&sxsrf=APpeQnuiPghLtl6Hco7sDEqlu8pL_zi2dg%3A1786206900978';
const url = new URL(websiteUrl);

// Displaying the URL object for reference
console.log(`URL Object: ${url}\n\n\n`);

// Extracting components of the URL
const protocol = url.protocol; // 'https:'
const host = url.host; // 'www.google.com'
const hostname = url.hostname; // 'www.google.com'
const port = url.port; // ''
const pathname = url.pathname; // '/search'
const href = url.href; // 'https://www.google.com/search?q=sex+and+porn'
const query = url.searchParams.get('q'); // sex and porn
const search = url.search; // '?q=sex+and+porn&sxsrf=APpeQnuiPghLtl6Hco7sDEqlu8pL_zi2dg%3A1786206900978'

// Displaying the extracted components
console.log(`Protocol: ${protocol}`);
console.log(`Host: ${host}`);
console.log(`Hostname: ${hostname}`);
console.log(`Pathname: ${pathname}`);
console.log(`Href: ${href}`);
console.log(`Query: ${query}`);
console.log(`Search: ${search}`);
console.log(`Port: ${port}`);

// Checking if the URL uses HTTPS
if (protocol === 'https:') {
    console.log('The URL uses HTTPS, which is secure.');
}
 */

// Program flowchart:
// 1. Start
// 2. Import the URL module from Node.js
// 3. Define the website URL to be analyzed
// 4. Create a new URL object using the provided URL
// 5. Extract various components of the URL (protocol, host, hostname, port, pathname, href, query, search)
// 6. Display the extracted components in the console
// 7. Check if the URL uses HTTPS and display a message indicating its security status
// 8. End



// whatwg vs legacy URL API:

// The WHATWG URL API is a modern implementation of the URL interface that follows the specifications set by the Web Hypertext Application Technology Working Group (WHATWG). It provides a more consistent and standardized way to parse, manipulate, and construct URLs in JavaScript. The WHATWG URL API is designed to be more user-friendly and aligns with web standards.

// The legacy URL API, on the other hand, is an older implementation that may not fully adhere to the latest web standards. It may have inconsistencies in behavior and lacks some of the features provided by the WHATWG URL API. Developers are encouraged to use the WHATWG URL API for new projects to ensure better compatibility and maintainability.

// URL explanation:

// The URL is a web address that points to a specific resource on the internet. It consists of several components, including the protocol (e.g., http, https), the domain name (e.g., www.example.com), and optional path and query parameters that specify the exact location of the resource. URLs are used to access websites, download files, and interact with web services.

// Domain name explanation:

// The domain name is a human-readable address that identifies a specific location on the internet. It serves as a unique identifier for websites and is part of the URL. Domain names are registered through domain registrars and can include various top-level domains (TLDs) such as .com, .org, .net, etc. They are essential for navigating the web and accessing online resources.

// Path explanation:

// The path is a component of the URL that specifies the exact location of a resource on the web server. It follows the domain name and can include directories and subdirectories that lead to the desired file or page. The path helps in organizing content on a website and allows users to access specific resources directly.

// http explanation:

// HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It defines how messages are formatted and transmitted between clients (such as web browsers) and servers. HTTP operates as a request-response protocol, where clients send requests to servers, and servers respond with the requested resources. It is a stateless protocol, meaning each request is independent of previous requests. HTTP is widely used for accessing web pages, APIs, and other online services.

// https explanation:

// HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP that provides secure communication over the internet. It uses SSL/TLS encryption to protect data transmitted between clients and servers, ensuring that sensitive information remains confidential and integrity is maintained. HTTPS is commonly used for e-commerce websites, online banking, and other applications where security is paramount.

// SSL/TLS explanation:

// SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols that provide secure communication over a computer network. They encrypt data transmitted between clients and servers, ensuring that sensitive information such as passwords, credit card numbers, and personal data remains private and protected from eavesdropping or tampering. TLS is the successor to SSL and is considered more secure. These protocols are essential for establishing trust and security in online transactions and communications.


// OS module from Node.js:

// The OS module in Node.js provides a way to interact with the operating system and retrieve information about the system's resources, such as CPU, memory, and network interfaces. It allows developers to access system-level information and perform tasks like reading environment variables, getting system uptime, and managing file paths. The OS module is useful for building applications that need to adapt to different operating systems or gather system-related data.

// program - 2

// Program name: OS Information Extraction

// Description: This program extracts various information about the operating system using the OS module in Node.js.

/* 
const os = require('os');

const osName = os.type(); // Get the operating system name
const platform = os.platform(); // Get the operating system platform
const architecture = os.arch(); // Get the CPU architecture
const cpuInfo = os.cpus(); // Get information about the CPU cores
const totalMemory = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2); // Get the total system memory in GB
const freeMemory = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2); // Get the free system memory in GB
const uptime = (os.uptime() / 3600).toFixed(2); // Get the system uptime in hours
const hostname = os.hostname(); // Get the system hostname
const networkInterfaces = os.networkInterfaces(); // Get information about network interfaces
const userInfo = os.userInfo(); // Get information about the current user
const homeDir = os.homedir(); // Get the user's home directory
const tempDir = os.tmpdir(); // Get the system's temporary directory
const release = os.release(); // Get the operating system release version
const cpuCount = os.cpus().length; // Get the number of CPU cores

// Displaying the extracted OS information
console.log(`\nOperating System Name: ${osName}\n`);
console.log(`\n1. Operating System Platform: ${platform}\n`);
console.log(`\n2. CPU Architecture: ${architecture}\n`);
// console.log(`\n3. CPU Info: ${JSON.stringify(cpuInfo, null, 2)}\n`);
console.log(`\n4. Total Memory: ${totalMemory} GB\n`);
console.log(`\n5. Free Memory: ${freeMemory} GB\n`);
console.log(`\n6. System Uptime: ${uptime} hours\n`);
console.log(`\n7. Hostname: ${hostname}\n`);
// console.log(`\n8. Network Interfaces: ${JSON.stringify(networkInterfaces, null, 2)}\n`);
// console.log(`\n9. Current User Info: ${JSON.stringify(userInfo, null, 2)}\n`);
console.log(`\n10. User's Home Directory: ${homeDir}\n`);
console.log(`\n11. System Temporary Directory: ${tempDir}\n`);
console.log(`\n12. Operating System Release: ${release}\n`);
console.log(`\n13. Number of CPU Cores: ${cpuCount}\n`);
 */

// Program flowchart:
// 1. Start
// 2. Import the OS module from Node.js
// 3. Retrieve various information about the operating system (platform, architecture, CPU info, memory, uptime, hostname, network interfaces, user info, home directory, temporary directory, release version, CPU count)
// 4. Display the extracted OS information in the console
// 5. End


// rate limiting & request throttling

// How to prevent user requests who is trying to freeze the server using multiple request at the same time using os module in Node.js:

// To prevent users from freezing the server by sending multiple requests simultaneously, you can implement rate limiting and request throttling in your Node.js application. While the OS module provides system-level information, you can use it in conjunction with other techniques to manage incoming requests effectively. Here are some strategies:




// 

// program - 3
/* 
const dns = require('dns');

const DomainName = 'google.com';

dns.lookup(DomainName, (err, address, family) => {
    if(err) {
        console.error('Lookup error:', err);
        return;
    }
    console.log(`IP address: ${address}`);
    console.log(`IP version: ${family}`);
});
 */


// Readline Module

// program - 4
// Interactive User Information Collector using Node.js readline
// This Node.js program uses the built-in readline module to interact with the user through the terminal.

// Asks the user for their name.
// Displays a greeting using their name.
// Asks the user for their age.
// Calculates how old they will be 5 years from now.
// Displays the calculated age.
// Closes the readline interface.

// ==========================================
// Program: Interactive User Information Collector
// ==========================================
/* 
// Import readline module
const readline = require('readline');

// Create input/output configuration
const sIO = {
    input: process.stdin,
    output: process.stdout
};

// Create readline interface
const readlineInterface = readline.createInterface(sIO);

// First question
const q1 = "What is your name? ";

// Function to handle name
function displayQ1(name) {
    console.log(`Hello, ${name}`);

    // Second question
    const q2 = "How old are you? ";

    // Function to handle age
    function displayQ2(age) {
        console.log(
            `In 5 years, you will be ${parseInt(age) + 5} years old.`
        );

        // Close readline after completing all questions
        readlineInterface.close();
    }

    // Ask second question
    readlineInterface.question(q2, displayQ2);
}

// Ask first question
readlineInterface.question(q1, displayQ1); 
*/
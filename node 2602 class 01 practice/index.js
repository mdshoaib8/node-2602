const EventEmitter = require('events');

const event = new EventEmitter();

const user = {
    name: "Sunflower",
    email: "sunflower@you.com",
    password: "12345"
};

const userInput = {
    email: "sunflower@you.com",
    password: "12345"
};

function userInfo({ email, password }) {
    (email === user.email && password === user.password)
        ? console.log(`\n🟢 Login successful. Welcome back! ${user.name} 🌻.\n`)
        : console.log('\n🔴 Login failed: incorrect email or password.\n');
}

function alert({ email, password }) {
    (email !== user.email || password !== user.password)
        ? console.log('\n❌ Authentication error: please check your credentials and try again.\n')
        : console.log('\n✨ You are already logged in.\n');
}

event.once("login", userInfo);
event.on("login", alert);

event.emit("login", userInput);
event.emit("login", userInput);
event.emit("login", userInput);
event.emit("login", userInput);
event.emit("login", userInput);

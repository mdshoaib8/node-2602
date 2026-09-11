// const dns = require('node:dns');
// dns.setServers(['8.8.8.8', '1.1.1.1']);
require('dotenv').config()
const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})
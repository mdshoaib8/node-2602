require('dotenv').config();
const dns = require('dns');
dns.setServers([
    '8.8.8.8',     // Google Primary
    '8.8.4.4',     // Google Secondary
    '1.1.1.1',     // Cloudflare Primary
    '1.0.0.1'      // Cloudflare Secondary
]);
const dbConfig = require('./config/db');
dbConfig();
const express = require('express');
const app = express();
const router = require('./router');
const apiResponse = require('./utils/apiResponse');

// Middleware
app.use(express.json());
app.use(router);
app.use((err, req, res, next) => {
    console.error(err.stack);
    apiResponse(res, 500, false, 'Internal Server Error', null);
});

module.exports = app;
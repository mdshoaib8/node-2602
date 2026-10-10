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

module.exports = app;
const express = require('express');
const router = express.Router();

const headerRoutes = require('./header'); 
const categoryRoutes = require('./category');

// /api/header 
router.use('/header', headerRoutes);

// /api/category
router.use('/category', categoryRoutes);

module.exports = router;
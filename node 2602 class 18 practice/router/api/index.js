const express = require('express');
const router = express.Router();

const headerRoutes = require('./header'); 
const categoryRoutes = require('./category');
const subcategoryRoutes = require('./subcategory');

// /api/header 
router.use('/header', headerRoutes);

// /api/category
router.use('/category', categoryRoutes);

// /api/subcategory
router.use('/subcategory', subcategoryRoutes);


module.exports = router;
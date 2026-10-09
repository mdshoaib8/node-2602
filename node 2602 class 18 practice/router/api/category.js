const express = require('express');
const router = express.Router();

// কন্ট্রোলার ২ ধাপ পেছনে (../../controllers)
const { createCategoryController } = require('../../controllers/category.controller');

// URL: http://localhost:3000/api/category/create
router.post('/create', createCategoryController);

module.exports = router;
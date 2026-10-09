const express = require('express');
const router = express.Router();

const {
    createCategoryController,
    readAllCategoriesController
} = require('../../controllers/category.controller');

// GET: http://localhost:3000/api/category
router.get('/', readAllCategoriesController);

// POST: http://localhost:3000/api/category/create
router.post('/create', createCategoryController);

module.exports = router;
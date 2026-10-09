const express = require('express');
const router = express.Router();

const { createSubcategoryController, readAllSubcategoriesController } = require('../../controllers/subcategory.controller');

// URL: http://localhost:3000/api/subcategory/create
router.post('/create', createSubcategoryController);

// URL: http://localhost:3000/api/subcategory/
router.get('/', readAllSubcategoriesController);

module.exports = router;
const express = require('express');
const router = express.Router();
const { createHeaderController, updateHeaderController, deleteHeaderController, readHeaderController } = require('../../controllers/header.controller');

// url: http://localhost:3000/api/header/create
router.post('/header/create', createHeaderController);
// url: http://localhost:3000/api/header/update/:id
router.put('/header/update/:id', updateHeaderController);
// url: http://localhost:3000/api/header/delete/:id
router.delete('/header/delete/:id', deleteHeaderController);
// url: http://localhost:3000/api/header/read
router.get('/header/read', readHeaderController);




module.exports = router;
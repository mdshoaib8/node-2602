// router/api/order.js
const express = require('express');
const router = express.Router();

// request method: POST
// url: http://localhost:3000/api/order/place-order
router.post('/place-order', (req, res) => {
    res.send('Order route is working!');
});

module.exports = router;
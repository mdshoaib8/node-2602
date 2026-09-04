const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home Page");
});

router.post("/test", (req, res) => {
    res.send(req.body);
});

module.exports = router;
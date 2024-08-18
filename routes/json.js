const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = "Hello JSON";
    res.json({ 'messgae': data});
});

module.exports = router;

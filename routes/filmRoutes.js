const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');

router.get('/', (req, res) => {
   res.status(200).send("Testing sent"); 
});

module.exports = router;
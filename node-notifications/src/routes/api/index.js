const express = require('express');
const router = express.Router();
const v1 = require('./v1/notification.routes');

// Version 1 de la API
router.use('/v1', v1);

module.exports = router;

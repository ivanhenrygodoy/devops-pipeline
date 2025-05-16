const express = require('express');
const router = express.Router();
const { notifyByEmail } = require('../controllers/notificationController');
const validateNotification = require('../middlewares/validateNotification');

router.post('/email', validateNotification,notifyByEmail);

module.exports = router;

const express = require('express');
const router = express.Router();
const { notifyByEmail } = require('../../../controllers/notificationController');
const validateNotification = require('../../../middlewares/validateNotification');

// Rutas de notificación para v1
router.post('/notify/email', validateNotification, notifyByEmail);

module.exports = router;

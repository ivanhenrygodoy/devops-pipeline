const { sendNotificationEmail } = require('../services/emailService');
const axios = require('axios');

const laravelUrl = process.env.LARAVEL_LOGS_URL;

const notifyByEmail = async (req, res) => {
  const { user, message } = req.body;
  if (!user || !message) return res.status(400).json({ error: 'Missing user or message' });

  try {
    await sendNotificationEmail(user, message);

    // Log acción exitosa al microservicio Laravel
    try {
      const response = await axios.post(`${laravelUrl}/api/logs`, {
        type: 'action',
        message: `Correo enviado desde microservicio de node`,
        meta: { user, message }
      });

      console.log('Respuesta de Laravel:', response.data);

    } catch (logError) {
      console.error('Error enviando log a Laravel:', logError.message);
    }

    res.status(200).json({ success: true, notifiedUser: user });
  } catch (err) {
    console.error(err);

    // Log error al microservicio Laravel
    try {
      await axios.post(`${laravelUrl}/api/logs`, {
        type: 'error',
        message: 'Error enviando correo desde microservicio de node',
        meta: { error: err.message, user, message }
      });
    } catch (logError) {
      console.error('Error enviando log a Laravel:', logError.message);
    }

    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { notifyByEmail };


const axios = require('axios');

async function sendLog(type, message, meta = {}) {
  try {
    await axios.post('http://tu-laravel-api/logs', {
      type,
      message,
      meta,
    });
    console.log('Log enviado correctamente');
  } catch (error) {
    console.error('Error enviando log:', error);
  }
}

// Ejemplo para enviar log de acción:
sendLog('action', 'Correo enviado a usuario', { userId: 123 });

// Ejemplo para enviar log de error:
sendLog('error', 'Error enviando correo', { errorDetails: 'SMTP timeout' });


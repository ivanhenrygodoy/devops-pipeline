const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendNotificationEmail(userEmail, message) {
  const mailOptions = {
    from: `"Notificaciones DevOps" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: 'Notificación desde el Microservicio Nodejs',
    text: message,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
        <header style="text-align: center; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-bottom: 20px;">
          <h1 style="color: #007bff;">Microservicio de Notificaciones</h1>
          <p style="color: #555; font-style: italic;">Servicio automatizado de envío de correos</p>
        </header>

        <section style="font-size: 16px; color: #333;">
          <p>Hola,</p>
          <p>Has recibido una nueva notificación:</p>
          <blockquote style="background: #e7f3ff; border-left: 6px solid #007bff; margin: 20px 0; padding: 15px; color: #0056b3;">
            ${message}
          </blockquote>
          <p>Gracias por usar nuestro servicio.</p>
        </section>

        <footer style="font-size: 12px; color: #999; text-align: center; margin-top: 30px;">
          <p>© 2025 DevOps Microservicios | Notificaciones automatizadas</p>
        </footer>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendNotificationEmail };

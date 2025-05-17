const request = require('supertest');
const express = require('express');
const apiRoutes = require('../src/routes/api');

// creación de una versión simulada de axios
jest.mock('axios');
const axios = require('axios');

// Configuracion de las respuestas 
axios.post.mockResolvedValue({ data: { success: true } });

// Simulación de el servicio de email
jest.mock('../src/services/emailService');
const emailService = require('../src/services/emailService');

// Simulació del servicio de email
emailService.sendNotificationEmail.mockResolvedValue(true);

// Configuración de pruebas
const testEmail = 'test@example.com';
const testMessage = 'Hola, este es un mensaje de prueba';

// Configuración de el servidor de pruebas
describe('API de Notificaciones', () => {
  let server;
  let app;

  // Configuración de la aplicación y el servidor antes de cada prueba
  beforeEach(() => {
    axios.post.mockClear(); // Limpieza de simulaciones

    app = express();
    app.use(express.json());
    app.use('/api', apiRoutes);
    
    // Inicializar el servidor
    return new Promise((resolve) => {
      server = app.listen(0, () => {
        resolve();
      });
    });
  });

  afterEach(() => {
    // Cerrar el servidor después de cada prueba
    return new Promise((resolve) => {
      server.close(resolve);
    });
  });

  // Prueba para campos faltantes
  it('debería retornar 400 cuando faltan campos', async () => {
    const res = await request(app).post('/api/v1/notify/email').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  // Prueba de envío exitoso
  it('debería enviar notificación exitosamente', async () => {
    const res = await request(app).post('/api/v1/notify/email').send({
      user: testEmail,
      message: testMessage
    });
    
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  // Prueba con formato de email inválido
  it('debería rechazar email inválido', async () => {
    const res = await request(app).post('/api/v1/notify/email').send({
      user: 'email-invalido',
      message: testMessage
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toContain('Invalid email format');
  });
});

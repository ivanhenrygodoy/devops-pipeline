// tests/notify.test.js
const request = require('supertest');
const app = require('../src/index'); // exporta app para test

describe('POST /notify', () => {
  it('should return 400 when missing fields', async () => {
    const res = await request(app).post('/notify').send({});
    expect(res.statusCode).toBe(400);
  });

  it('should notify user successfully', async () => {
    const res = await request(app).post('/notify').send({ message: 'Hello', user: 'user1' });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});

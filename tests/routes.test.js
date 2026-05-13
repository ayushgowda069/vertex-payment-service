const request = require('supertest');
const app = require('../src/index');

describe('GET /health', () => {
  it('returns 200 ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('POST /payment/charge - unauthenticated', () => {
  it('returns 401 without token', async () => {
    const res = await request(app).post('/payment/charge').send({ amount: 100, currency: 'USD', cardToken: 'tok_test' });
    expect(res.statusCode).toBe(401);
  });
});

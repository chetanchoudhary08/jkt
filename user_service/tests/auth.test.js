const request = require('supertest');
const app = require('../src/app');

describe('auth', () => {
  it('registers and logs in a user', async () => {
    await request(app).post('/auth/register').send({ username: 'a', password: 'b' });
    const res = await request(app).post('/auth/login').send({ username: 'a', password: 'b' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});

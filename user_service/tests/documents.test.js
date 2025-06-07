const request = require('supertest');
const app = require('../src/app');

describe('documents', () => {
  it('uploads a document', async () => {
    const res = await request(app)
      .post('/documents')
      .attach('file', Buffer.from('hello'), 'hello.txt');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
  });
});

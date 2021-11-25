import supertest from 'supertest';
import app from '../src/app.js';
import '../src/setup.js';

describe('POST /sign-in', () => {
  it('return 200 for valid signIn', async () => {
    const result = await supertest(app).post('/sign-in');

    expect(result.status).toEqual(201);
  });
});

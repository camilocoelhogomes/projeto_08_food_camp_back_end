import supertest from 'supertest';
import app from '../src/app.js';
import '../src/setup.js';
import restaurantFactory from './factory/restaurantFactory.js';
import deleteTables from './repositories/deleteTables.js';

beforeAll(async () => {
  await deleteTables();
});

afterAll(async () => {
  await deleteTables();
});

describe('POST /sign-in', () => {
  const restaurant = restaurantFactory.createFakeRestaurant();
  it('return 200 for valid signIn', async () => {
    const result = await supertest(app).post('/sign-in').send(restaurant);

    expect(result.status).toEqual(200);
    expect(result.body).toHaveProperty('token');
  });
});

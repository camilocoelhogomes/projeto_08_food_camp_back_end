import supertest from 'supertest';
import faker from 'faker';
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

  it('return 401 for invalid password', async () => {
    const result = await supertest(app).post('/sign-in').send({ ...restaurant, restaurantPassword: '' });

    expect(result.status).toEqual(401);
  });

  it('return 401 for invalid email', async () => {
    const result = await supertest(app).post('/sign-in').send({ ...restaurant, restaurantEmail: faker.internet.email() });

    expect(result.status).toEqual(401);
  });

  it('return 401 for invalid body', async () => {
    const result = await supertest(app).post('/sign-in').send({ oi: 'oi' });

    expect(result.status).toEqual(401);
  });
});

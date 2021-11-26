import supertest from 'supertest';
import app from '../src/app.js';
import '../src/setup.js';
import restaurantFactory from './factory/restaurantFactory.js';
import connection from '../src/dbConfig.js';
import deleteTables from './repositories/deleteTables.js';

beforeAll(async () => {
  await deleteTables();
});

afterAll(async () => {
  await deleteTables();
});

describe('POST /sign-up', () => {
  const newRestaurant = restaurantFactory.signUpRestaurant();

  it('returns 201 for everything ok', async () => {
    const initialRestaurants = await connection.query('SELECT * FROM restaurants;');
    const result = await supertest(app)
      .post('/sign-up')
      .send(newRestaurant);
    const finalRestaurants = await connection.query('SELECT * FROM restaurants;');

    expect(result.status).toEqual(201);
    expect(finalRestaurants.rowCount - initialRestaurants.rowCount).toEqual(1);
  });

  it('returns 409 for repeted email ok', async () => {
    const initialRestaurants = await connection.query('SELECT * FROM restaurants;');
    const result = await supertest(app)
      .post('/sign-up')
      .send(newRestaurant);
    const finalRestaurants = await connection.query('SELECT * FROM restaurants;');

    expect(result.status).toEqual(409);
    expect(finalRestaurants.rowCount - initialRestaurants.rowCount).toEqual(0);
  });

  it('returns 400 for invalid bodyes', async () => {
    const initialRestaurants = await connection.query('SELECT * FROM restaurants;');
    const result = await supertest(app)
      .post('/sign-up')
      .send({});
    const finalRestaurants = await connection.query('SELECT * FROM restaurants;');

    expect(result.status).toEqual(400);
    expect(finalRestaurants.rowCount - initialRestaurants.rowCount).toEqual(0);
  });
});

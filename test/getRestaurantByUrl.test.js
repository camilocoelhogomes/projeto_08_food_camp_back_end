import supertest from 'supertest';
import app from '../src/app.js';
import '../src/setup.js';
import restaurantFactory from './factory/restaurantFactory.js';

describe('GET /:restaurantUrl', () => {
  it('shold return 200 and a restaurant object', async () => {
    const restaurant = await restaurantFactory.createFakeRestaurant();
    const result = await supertest(app).get(`/${restaurant.url}`);
    expect(result.status).toEqual(200);
  });
});

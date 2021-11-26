import supertest from 'supertest';
import faker from 'faker';
import app from '../src/app.js';
import '../src/setup.js';
import restaurantFactory from './factory/restaurantFactory.js';

describe('GET /owner-auth/:restaurant', () => {
  const restaurant = restaurantFactory.createFakeRestaurant();
  it('should return 200 for valid restaurant', async () => {
    const result = await supertest(app)
      .get(`/owner-auth/${(await restaurant).url}`)
      .set('Authorization', `Bearer ${(await restaurant).token}`);

    expect(result.status).toEqual(200);
  });

  it('should return 401 for no url restaurant', async () => {
    const result = await supertest(app).get('/owner-auth/');
    expect(result.status).toEqual(401);
  });

  it('should return 401 when the url did not match the cript token', async () => {
    const result = await supertest(app)
      .get(`/owner-auth/${faker.name.firstName()}`)
      .set('Authorization', `Bearer ${(await restaurant).token}`);
    expect(result.status).toEqual(401);
  });
});

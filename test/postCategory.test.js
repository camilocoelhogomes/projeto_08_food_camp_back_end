import supertest from 'supertest';
import app from '../src/app.js';
import '../src/setup.js';
import restaurantFactory from './factory/restaurantFactory.js';

describe('POST /:restaurant/categorie', () => {
  it('return 200 for valid entries', async () => {
    const restaurant = await restaurantFactory();
    const result = await supertest(app)
      .post(`/${restaurant.restaurantUrlName}/categorie`)
      .set('Authorization', restaurant.token);
    expect(result.status).toEqual(201);
  });
});

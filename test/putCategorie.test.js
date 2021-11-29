import supertest from 'supertest';
import faker from 'faker';
import app from '../src/app.js';
import '../src/setup.js';
import restaurantFactory from './factory/restaurantFactory.js';

// eslint-disable-next-line jest/valid-describe-callback
describe('POST /:restaurantUrl/categorie', () => {
  it('201 for created categorie', async () => {
    const restaurant = await restaurantFactory.createFakeRestaurant();
    const result = await supertest(app)
      .put(`/${(await restaurant).url}/categorie`)
      .set('Authorization', `Bearer ${(await restaurant).token}`)
      .send({
        categorieName: faker.name.firstName(),
        categorieId: restaurant.cateorieId,
      });

    expect(result.status).toEqual(200);
  });
});

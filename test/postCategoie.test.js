import supertest from 'supertest';
import faker from 'faker';
import app from '../src/app.js';
import connection from '../src/dbConfig.js';
import '../src/setup.js';
import restaurantFactory from './factory/restaurantFactory.js';

// eslint-disable-next-line jest/valid-describe-callback
describe('POST /:restaurantUrl/categorie', () => {
  it('201 for created categorie', async () => {
    const restaurant = await restaurantFactory.createFakeRestaurant();
    const initialCategories = await connection.query('SELECT * FROM categories;');
    const result = await supertest(app)
      .post(`/${(await restaurant).url}/categorie`)
      .set('Authorization', `Bearer ${(await restaurant).token}`)
      .send({
        categorieName: faker.name.firstName(),
      });
    const finalCategories = await connection.query('SELECT * FROM categories;');

    expect(result.status).toEqual(201);
    expect(finalCategories.rowCount - initialCategories.rowCount).toEqual(1);
  });
});

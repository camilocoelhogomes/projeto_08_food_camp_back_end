import supertest from 'supertest';
import faker from 'faker';
import app from '../src/app.js';
import '../src/setup.js';
import restaurantFactory from './factory/restaurantFactory.js';
import connection from '../src/dbConfig.js';

describe('POST /:restaurantUrl/menu-item', () => {
  it('shold return 201 for created item', async () => {
    const restaurant = await restaurantFactory.createFakeRestaurant();
    const initialMenuItem = await connection.query('SELECT * FROM product;');
    const result = await supertest(app)
      .post(`/${(await restaurant).url}/menu-item`)
      .send({
        categorieId: restaurant.cateorieId,
        productImg: faker.image.imageUrl(),
        productName: faker.name.firstName(),
        productDescription: faker.name.findName(),
        productPrice: faker.commerce.price(),
        productNumber: (Math.random() * 100).toFixed(0),
      });
    const finalMenuItem = await connection.query('SELECT * FROM product;');

    expect(result.status).toEqual(201);
    expect(finalMenuItem.rowCount - initialMenuItem.rowCount).toEqual(1);
  });
});

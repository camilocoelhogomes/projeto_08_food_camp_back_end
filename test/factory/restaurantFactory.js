import faker from 'faker';
import RandExp from 'randexp';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import restaurantRepository from '../../src/repositories/restaurantRepository';

const signUpRestaurant = () => {
  const restaurant = {
    restaurantName: faker.company.companyName(),
    restaurantEmail: faker.internet.email(),
    restaurantPassword: new RandExp(/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}).*$/).gen(),
    restaurantWppNumber: new RandExp(/^[0-9]{11}$/i).gen(),
    restaurantImg: faker.image.imageUrl(),
    restaurantUrlName: faker.name.firstName(),
  };
  return { ...restaurant, restaurantConfirmPassword: restaurant.restaurantPassword };
};

const createFakeRestaurant = async () => {
  const restaurant = signUpRestaurant();
  const restaurantDb = await restaurantRepository
    .createRestaurant(
      {
        ...restaurant,
        restaurantPassword: bcrypt.hashSync(restaurant.restaurantPassword, 10),
      },
    );
  return {
    restaurantEmail: restaurant.restaurantEmail,
    restaurantPassword: restaurant.restaurantPassword,
    token: jwt.sign({ id: restaurantDb.id, url: restaurantDb.url_name }, process.env.JWT_SECRET),
    url: restaurantDb.url_name,
  };
};

const restaurantFactory = {
  signUpRestaurant,
  createFakeRestaurant,
};
export default restaurantFactory;

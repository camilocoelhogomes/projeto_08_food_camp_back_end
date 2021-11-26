import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import restaurantRepository from '../repositories/restaurantRepository';

const createRestaurant = async ({
  restaurantName,
  restaurantUrlName,
  restaurantWppNumber,
  restaurantPassword,
  restaurantImg,
  restaurantEmail,
}) => {
  const cryptPassword = bcrypt.hashSync(restaurantPassword, 10);
  const newRestaurant = await restaurantRepository.createRestaurant({
    restaurantName,
    restaurantUrlName,
    restaurantWppNumber,
    restaurantPassword: cryptPassword,
    restaurantImg,
    restaurantEmail,
  });
  return newRestaurant;
};

const validateRestaurant = async ({ email, password }) => {
  const restaurant = await restaurantRepository.getRestaurantByEmail({ email });
  if (!restaurant) {
    return {
      message: 'Unathorized',
      token: null,
    };
  }

  if (!bcrypt.compareSync(password, restaurant.password)) {
    return {
      message: 'Unathorized',
      token: null,
    };
  }

  return {
    message: 'Authorized',
    token: jwt.sign({ id: restaurant.id, url: restaurant.url_name }, process.env.JWT_SECRET),
  };
};

const restaurantService = {
  createRestaurant,
  validateRestaurant,
};

export default restaurantService;

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
      data: null,
    };
  }

  if (!bcrypt.compareSync(password, restaurant.password)) {
    return {
      message: 'Unathorized',
      data: null,
    };
  }

  return {
    message: 'Authorized',
    data: {
      userToken: jwt.sign({ id: restaurant.id, url: restaurant.url_name }, process.env.JWT_SECRET),
      url: restaurant.url_name,
    },
  };
};

const restaurantService = {
  createRestaurant,
  validateRestaurant,
};

export default restaurantService;

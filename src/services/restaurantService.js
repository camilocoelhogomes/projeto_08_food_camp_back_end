import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import restaurantRepository from '../repositories/restaurantRepository.js';

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

const createRestaurantObject = async ({ url }) => {
  const products = await restaurantRepository.getRestaurantProductsByUrl({ url });
  const restaurant = await restaurantRepository.getRestaurantCategoriesByUrl({ url });
  const restaurantObject = {
    restaurantName: restaurant[0].restaurantName,
    restaurantUrlName: restaurant[0].restaurantUrlName,
    restaurantWppNumber: restaurant[0].restaurantWppNumber,
    restaurantImg: restaurant[0].restaurantImg,
    categories: restaurant.map((item) => (
      {
        categorieId: item.categorieId,
        categorieName: item.categorieName,
        categorieItens: products
          .filter((product) => product.categorieId === item.categorieId)
          .map((product) => ({
            productId: product.productId,
            productImg: product.productImg,
            productName: product.productName,
            productPrice: product.productPrice,
            productDescription: product.productDescription,
            productNumber: product.productNumber,
          })),
      })),
  };
  return restaurantObject;
};

const restaurantService = {
  createRestaurant,
  validateRestaurant,
  createRestaurantObject,
};

export default restaurantService;

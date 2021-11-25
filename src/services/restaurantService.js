import bcrypt from 'bcrypt';
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
  return newRestaurant.rowCount;
};

const restaurantService = {
  createRestaurant,
};

export default restaurantService;

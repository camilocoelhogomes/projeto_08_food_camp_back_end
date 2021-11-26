import restaurantService from '../services/restaurantService.js';
import restaurantValidates from '../validate/restaurantValidates.js';

const signUp = async (req, res) => {
  try {
    const newRestaurant = req.body;
    const reqError = restaurantValidates.validateSignUp(newRestaurant);
    if (reqError) return res.sendStatus(400);
    const restaurant = await restaurantService.createRestaurant({ ...newRestaurant });
    if (!restaurant) return res.sendStatus(409);
    return res.status(201).send();
  } catch (error) {
    return res.sendStatus(500);
  }
};

const restaurantController = {
  signUp,
};

export default restaurantController;

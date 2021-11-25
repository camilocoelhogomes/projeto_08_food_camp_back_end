import restaurantService from '../services/restaurantService.js';
import restaurantValidates from '../validate/restaurantValidates.js';

const signUp = async (req, res) => {
  try {
    const newRestaurant = req.body;
    const reqError = restaurantValidates.validateSignUp(newRestaurant);
    if (reqError) return res.sendStatus(400);
    await restaurantService.createRestaurant({ ...newRestaurant });
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const restaurantController = {
  signUp,
};

export default restaurantController;

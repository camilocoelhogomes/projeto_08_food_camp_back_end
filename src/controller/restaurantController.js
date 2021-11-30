import restaurantService from '../services/restaurantService.js';
import restaurantValidates from '../validate/restaurantValidates.js';

const signUp = async (req, res) => {
  try {
    const newRestaurant = req.body;
    const reqError = restaurantValidates.validateSignUp(newRestaurant);

    if (reqError) {
      return res.sendStatus(400);
    }

    const restaurant = await restaurantService.createRestaurant({ ...newRestaurant });
    if (!restaurant) {
      return res.sendStatus(409);
    }

    return res.status(201).send();
  } catch (error) {
    return res.sendStatus(500);
  }
};

const signIn = async (req, res) => {
  try {
    const restaurant = req.body;
    const reqError = restaurantValidates.validateSignIn(restaurant);
    console.log(reqError);
    if (reqError) {
      return res.sendStatus(401);
    }

    const restaurantDb = await restaurantService
      .validateRestaurant(
        {
          email: restaurant.restaurantEmail,
          password: restaurant.restaurantPassword,
        },
      );

    if (!restaurantDb.data) {
      return res.sendStatus(401);
    }
    return res
      .status(200)
      .send({ ...restaurantDb.data });
  } catch (error) {
    return res.sendStatus(500);
  }
};

const authOwnerVerify = async (req, res) => {
  if (!req.localData.id) {
    return res.sendStatus(401);
  }
  return res.sendStatus(200);
};

const getRestaurantByUrl = async (req, res) => {
  try {
    const { restaurantUrl } = req.params;
    const restaurant = await restaurantService.createRestaurantObject({ url: restaurantUrl });
    return res.status(200).send(restaurant);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};

const restaurantController = {
  signUp,
  signIn,
  authOwnerVerify,
  getRestaurantByUrl,
};

export default restaurantController;

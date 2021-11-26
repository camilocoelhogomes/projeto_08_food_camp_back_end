import jwt from 'jsonwebtoken';

const restaurantAuth = (req, res, next) => {
  const { restaurantUrl } = req.params;
  const restaurantToken = req.headers?.authorization.split('Bearer ')[1];
  if (!restaurantToken || !restaurantUrl) {
    req.localData = {
      id: null,
    };
    return next();
  }
  const decryptedRestaurant = jwt.verify(restaurantToken, process.env.JWT_SECRET);

  if (restaurantUrl !== decryptedRestaurant.url) {
    req.localData = {
      id: null,
    };
    return next();
  }
  req.localData = {
    id: decryptedRestaurant.id,
  };
  return next();
};

export default restaurantAuth;

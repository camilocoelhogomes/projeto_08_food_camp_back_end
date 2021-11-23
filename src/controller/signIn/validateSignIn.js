import Joi from 'joi';

const validateSignIn = ({ signInObject }) => Joi.object({
  restaurantEmail: Joi.string().email().required(),
  restaurantPassword: Joi.string().required().pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/),
}).validate(signInObject).error;

export default validateSignIn;

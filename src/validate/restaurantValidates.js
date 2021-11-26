import Joi from 'joi';

const validateSignUp = (signUpObject) => Joi.object({
  restaurantName: Joi.string().required(),
  restaurantEmail: Joi.string().email().required(),
  restaurantPassword: Joi.string().required().pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/),
  restaurantConfirmPassword: Joi.string().required().valid(Joi.ref('restaurantPassword')),
  restaurantImg: Joi.string().required(),
  restaurantUrlName: Joi.string().required().pattern(/^[a-zA-Z0-9_.-]*$/),
  restaurantWppNumber: Joi.string().required().pattern(/^[0-9]{11}$/i),
}).validate(signUpObject).error;

const validateSignIn = (signInObject) => Joi.object({
  restaurantEmail: Joi.string().email().required(),
  restaurantPassword: Joi.string().required().pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/),
}).validate(signInObject).error;

const restaurantValidates = {
  validateSignUp,
  validateSignIn,
};
export default restaurantValidates;

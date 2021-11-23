import Joi from 'joi';

const validateSignUp = ({ signUpObject }) => Joi.object({
  restaurantName: Joi.string().required(),
  restaurantEmail: Joi.string().email().required(),
  restaurantPassword: Joi.string().required().pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/),
  restaurantConfirmPassword: Joi.string().required().valid(Joi.ref('restaurantPassword')),
  restaurantWppNumber: Joi.string().required().min(11).pattern(/^[0-9]*$/i),
  restaurantImg: Joi.string().required().pattern(/\.(jpe?g|png|gif|bmp)$/i),
  restaurantUrlName: Joi.string().required().pattern(/^[A-Za-z0-9_-]*$/i),
}).validate(signUpObject).error;

export default validateSignUp;

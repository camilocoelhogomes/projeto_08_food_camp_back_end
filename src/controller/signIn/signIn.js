import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import signInFactory from '../../factoryes/dbFactoryes/signInFactory.js';
import validateSignIn from './validateSignIn.js';

const signIn = async (req, res) => {
  const user = req.body;
  const validateError = validateSignIn({ signInObject: user });
  if (validateError) return res.sendStatus(401);
  try {
    const dbUser = await signInFactory(user);
    if (!bcrypt.compareSync(user.restaurantPassword, dbUser.rows[0].password)) {
      return res.sendStatus(401);
    }
    const userObject = {
      url: dbUser.rows[0].url,
      userToken: jwt.sign({
        id: dbUser.rows[0].id,
        url: dbUser.rows[0].url,
      }, process.env.JWT_SECRET),
    };
    return res.status(200).send(userObject);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default signIn;

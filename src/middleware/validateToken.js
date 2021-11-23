import jwt from 'jsonwebtoken';
import connection from '../factoryes/dbConfig.js';

const validateToken = async (req, res, next) => {
  const { restaurant } = req.params;
  try {
    const { authorization } = req.headers;
    const token = authorization.split('Bearer ')[1];
    const id = jwt.verify(token, process.env.JWT_SECRET);
    if (id.url !== restaurant) return res.status(401).send({ errorMessage: 'Invalid Signature' });
    const isUser = await connection.query('SELECT * FROM restaurants WHERE id=($1)', [id.id]);
    if (!isUser.rowCount) return res.status(401).send({ errorMessage: 'Invalid Signature' });
    return next();
  } catch (error) {
    return res.status(401).send({ errorMessage: 'Invalid Signature' });
  }
};

export default validateToken;

import connection from '../dbConfig.js';

const signInFactory = ({
  restaurantEmail,
}) => connection.query(`
SELECT
  restaurants.id,
  restaurants."url_name" AS url,
  password
FROM
  restaurants
WHERE
  email=$1`, [restaurantEmail]);

export default signInFactory;

import connection from '../dbConfig';

const createRestaurant = ({
  restaurantName,
  restaurantUrlName,
  restaurantWppNumber,
  restaurantPassword,
  restaurantImg,
  restaurantEmail,
}) => connection.query(`
INSERT INTO
  restaurants (name, url_name,wpp_number,password,restaurant_img,email)
VALUES
  ($1,$2,$3,$4,$5,$6)
RETURNING
  *;
`, [
  restaurantName,
  restaurantUrlName,
  restaurantWppNumber,
  restaurantPassword,
  restaurantImg,
  restaurantEmail,
]);

const restaurantRepository = {
  createRestaurant,
};

export default restaurantRepository;

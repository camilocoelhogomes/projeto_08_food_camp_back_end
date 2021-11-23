import connection from '../dbConfig.js';

const signUpFactory = ({
  restaurantName,
  restaurantEmail,
  restaurantPassword,
  restaurantWppNumber,
  restaurantImg,
  restaurantUrlName,
}) => connection.query(`
INSERT INTO
  restaurants (name,email,password,wpp_number,restaurant_img,url_name)
VALUES
  ($1,$2,$3,$4,$5,$6)`, [restaurantName,
  restaurantEmail,
  restaurantPassword,
  restaurantWppNumber,
  restaurantImg,
  restaurantUrlName]);

export default signUpFactory;

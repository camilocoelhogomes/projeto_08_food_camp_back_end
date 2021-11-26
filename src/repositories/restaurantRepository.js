import connection from '../dbConfig';

const createRestaurant = async ({
  restaurantName,
  restaurantUrlName,
  restaurantWppNumber,
  restaurantPassword,
  restaurantImg,
  restaurantEmail,
}) => {
  try {
    const newRestaurant = await connection.query(`
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

    return newRestaurant.rows[0];
  } catch (error) {
    return null;
  }
};

const restaurantRepository = {
  createRestaurant,
};

export default restaurantRepository;

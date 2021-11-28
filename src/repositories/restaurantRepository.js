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

const getRestaurantByEmail = async ({
  email,
}) => {
  try {
    const selectedRestaurant = await connection.query(`
  SELECT * from
    restaurants
  WHERE
    restaurants.email = ($1);
  `, [email]);

    if (!selectedRestaurant.rowCount) { return null; }
    return selectedRestaurant.rows[0];
  } catch (error) {
    return null;
  }
};

const getRestaurantCategoriesByUrl = async ({ url }) => {
  try {
    const selectedRestaurant = await connection.query(`
    SELECT
      restaurants."name" AS "restaurantName",
      restaurants."url_name" AS "restaurantUrlName",
      restaurants."wpp_number" AS "restaurantWppNumber",
      restaurants."restaurant_img" AS "restaurantImg",
      categories."id" AS "categorieId",
      categories."categorie_name" AS "categorieName"
    FROM
      restaurants
    JOIN
      categories
    ON
      restaurants."id" = categories."restaurant_id"
    WHERE
      restaurants."url_name" = ($1);
    `, [url]);
    if (!selectedRestaurant.rowCount) { return null; }
    return selectedRestaurant.rows;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const restaurantRepository = {
  createRestaurant,
  getRestaurantByEmail,
  getRestaurantCategoriesByUrl,
};

export default restaurantRepository;

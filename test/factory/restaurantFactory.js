import faker from 'faker';
import RandExp from 'randexp';
import jwt from 'jsonwebtoken';
import connection from '../../src/factoryes/dbConfig';

const restaurantFactory = async () => {
  const dbRestaurant = {
    restaurantName: faker.company.companyName(),
    restaurantEmail: faker.internet.email(),
    restaurantPassword: new RandExp(/^[$]2[abxy]?[$](?:0[4-9]|[12][0-9]|3[01])[$][./0-9a-zA-Z]{53}$/).gen(),
    restaurantWppNumber: new RandExp(/^[0-9]{11}$/i).gen(),
    restaurantImg: faker.image.imageUrl(),
    restaurantUrlName: faker.name.firstName(),
  };
  const id = await connection.query(
    ` 
  INSERT INTO
    restaurants (name,email,password,wpp_number,restaurant_img,url_name)
  VALUES
    ($1,$2,$3,$4,$5,$6)
  RETURNING
    id`,
    [dbRestaurant.restaurantName,
      dbRestaurant.restaurantEmail,
      dbRestaurant.restaurantPassword,
      dbRestaurant.restaurantWppNumber,
      dbRestaurant.restaurantImg,
      dbRestaurant.restaurantUrlName,
    ],
  );

  const token = `Bearer ${jwt.sign({
    id: id.rows[0].id,
    url: dbRestaurant.restaurantUrlName,
  }, process.env.JWT_SECRET)
  }`;

  return { ...dbRestaurant, token };
};

export default restaurantFactory;

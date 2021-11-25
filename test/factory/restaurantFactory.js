import faker from 'faker';
import RandExp from 'randexp';

const signUpRestaurant = () => {
  const restaurant = {
    restaurantName: faker.company.companyName(),
    restaurantEmail: faker.internet.email(),
    restaurantPassword: new RandExp(/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}).*$/).gen(),
    restaurantWppNumber: new RandExp(/^[0-9]{11}$/i).gen(),
    restaurantImg: faker.image.imageUrl(),
    restaurantUrlName: faker.name.firstName(),
  };
  return { ...restaurant, restaurantConfirmPassword: restaurant.restaurantPassword };
};

const restaurantFactory = {
  signUpRestaurant,
};
export default restaurantFactory;

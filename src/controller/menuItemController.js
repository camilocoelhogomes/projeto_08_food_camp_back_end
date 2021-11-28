import menuItemServices from '../services/menuItemServices';
import restaurantService from '../services/restaurantService';

const postMenuItem = async (req, res) => {
  const {
    categorieId,
    productImg,
    productName,
    productDescription,
    productPrice,
    productNumber,
  } = req.body;

  const { restaurantUrl } = req.params;
  try {
    const menuItem = await menuItemServices.createMenuItem({
      categorieId,
      productImg,
      productName,
      productDescription,
      productPrice,
      productNumber,
    });
    if (!menuItem || !menuItem.length) return res.sendStatus(500);
    const restaurantObject = await restaurantService.createRestaurantObject({ url: restaurantUrl });
    return res.status(201).send(restaurantObject);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const menuItemController = {
  postMenuItem,
};

export default menuItemController;

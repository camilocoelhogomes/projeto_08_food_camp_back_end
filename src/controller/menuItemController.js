import menuItemServices from '../services/menuItemServices.js';
import restaurantService from '../services/restaurantService.js';

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
    let menuItem;
    if (req.body.productId) {
      menuItem = await menuItemServices.updateMenuItem({
        categorieId,
        productImg,
        productName,
        productDescription,
        productPrice,
        productNumber,
        productId: req.body.productId,
        restaurantId: req.localData.id,
      });
    } else {
      menuItem = await menuItemServices.createMenuItem({
        categorieId,
        productImg,
        productName,
        productDescription,
        productPrice,
        productNumber,
      });
      if (!menuItem || !menuItem.length) return res.sendStatus(500);
    }
    const restaurantObject = await restaurantService.createRestaurantObject({ url: restaurantUrl });
    return res.status(201).send(restaurantObject);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const { restaurantUrl } = req.params;
    const deletedMenuItem = await menuItemServices.deleteMenuItem({
      productId: req.body.productId,
    });
    if (!deletedMenuItem) {
      return res.sendStatus(500);
    }
    const restaurantObject = await restaurantService.createRestaurantObject({ url: restaurantUrl });
    return res.status(201).send(restaurantObject);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const menuItemController = {
  postMenuItem,
  deleteMenuItem,
};

export default menuItemController;

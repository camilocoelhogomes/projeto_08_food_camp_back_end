import menuItemRepositories from '../repositories/menuItemRepositories.js';

const createMenuItem = async ({
  categorieId,
  productImg,
  productName,
  productDescription,
  productPrice,
  productNumber,
}) => {
  const menuItem = await menuItemRepositories.createMenuItem({
    categorieId,
    productImg,
    productName,
    productDescription,
    productPrice,
    productNumber,
  });
  return menuItem;
};

const updateMenuItem = async ({
  categorieId,
  productImg,
  productName,
  productDescription,
  productPrice,
  productNumber,
  productId,
  restaurantId,
}) => {
  const updatedMenuItem = await menuItemRepositories.updateMenuItem({
    categorieId,
    productImg,
    productName,
    productDescription,
    productPrice,
    productNumber,
    productId,
    restaurantId,
  });
  return updatedMenuItem;
};

const deleteMenuItem = async ({ productId }) => {
  const updatedCategorie = await menuItemRepositories.deleteMenuItem({
    productId,
  });
  return (updatedCategorie);
};

const menuItemServices = {
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
};

export default menuItemServices;

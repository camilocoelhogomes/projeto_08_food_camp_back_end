import menuItemRepositories from '../repositories/menuItemRepositories';

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
const menuItemServices = {
  createMenuItem,
};

export default menuItemServices;

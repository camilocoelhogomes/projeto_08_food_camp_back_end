import connection from '../dbConfig.js';

const createMenuItem = async ({
  categorieId,
  productImg,
  productName,
  productDescription,
  productPrice,
  productNumber,
}) => {
  try {
    const newMenuItem = await connection.query(`
      INSERT INTO
        product (categorie_id,product_img,product_name,product_description,product_price,product_number)
      VALUES
       ($1,$2,$3,$4,$5,$6)
      RETURNING
        *;
    `, [categorieId,
      productImg,
      productName,
      productDescription,
      productPrice,
      productNumber]);
    if (!newMenuItem.rowCount) {
      return null;
    }
    return newMenuItem.rows;
  } catch (error) {
    return null;
  }
};

const menuItemRepositories = {
  createMenuItem,
};

export default menuItemRepositories;

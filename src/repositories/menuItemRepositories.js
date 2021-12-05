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

const updateMenuItem = async ({
  categorieId,
  productImg,
  productName,
  productDescription,
  productPrice,
  productNumber,
  productId,
}) => {
  try {
    const updatedCategorie = await connection.query(`
    UPDATE
      product
    SET
      categorie_id = ($1),
      product_img = ($2),
      product_name = ($3),
      product_description = ($4),
      product_price = ($5),
      product_number = ($6)
    WHERE
      product."id" = ($7)
    RETURNING
      *  
    ;
    `, [categorieId,
      productImg,
      productName,
      productDescription,
      productPrice,
      productNumber,
      productId]);
    if (!updatedCategorie.rowCount) {
      return null;
    }
    return updatedCategorie.rows;
  } catch (error) {
    return null;
  }
};

const deleteMenuItem = async ({ productId }) => {
  try {
    await connection.query(`
    DELETE FROM 
      product
    WHERE
      id = ($1)
    RETURNING
      *  
    ;
    `, [productId]);
    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const menuItemRepositories = {
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
};

export default menuItemRepositories;

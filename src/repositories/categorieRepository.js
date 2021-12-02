import connection from '../dbConfig.js';

const createCategorie = async ({ categorieName, restaurantId }) => {
  try {
    const newCategorie = await connection.query(`
      INSERT INTO
        categories (categorie_name,restaurant_id)
      VALUES
        ($1,$2)
      RETURNING
      *
    `, [categorieName, restaurantId]);
    if (!newCategorie.rowCount) {
      return null;
    }
    return newCategorie.rows;
  } catch (error) {
    return null;
  }
};

const updateCategorie = async ({ restaurantId, categorieId, categorieName }) => {
  try {
    const updatedCategorie = await connection.query(`
    UPDATE
      categories
    SET
      categorie_name = ($3)
    WHERE
      restaurant_id = ($1)
    AND
      id = ($2)
    RETURNING
      *  
    ;
    `, [restaurantId, categorieId, categorieName]);
    return updatedCategorie.rows;
  } catch (error) {
    return null;
  }
};

const categorieRepository = {
  createCategorie,
  updateCategorie,
};

export default categorieRepository;

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

const categorieRepository = {
  createCategorie,
};

export default categorieRepository;

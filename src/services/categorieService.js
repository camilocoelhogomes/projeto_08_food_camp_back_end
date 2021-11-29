import categorieRepository from '../repositories/categorieRepository';

const createCategorie = async ({ restaurantId, categorieName }) => {
  const newCategorie = await categorieRepository.createCategorie({ restaurantId, categorieName });
  if (!newCategorie.length) {
    return null;
  }

  return true;
};

const updateCategorie = async ({ restaurantId, categorieId, newCategorieName }) => {
  console.log({ restaurantId, categorieId, newCategorieName });
};

const categorieService = {
  createCategorie,
  updateCategorie,
};

export default categorieService;

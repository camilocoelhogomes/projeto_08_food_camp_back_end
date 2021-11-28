import categorieRepository from '../repositories/categorieRepository';

const createCategorie = async ({ restaurantId, categorieName }) => {
  const newCategorie = await categorieRepository.createCategorie({ restaurantId, categorieName });
  if (!newCategorie.length) {
    return null;
  }

  return true;
};

const categorieService = {
  createCategorie,
};

export default categorieService;

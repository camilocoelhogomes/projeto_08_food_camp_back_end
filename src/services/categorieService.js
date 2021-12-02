import categorieRepository from '../repositories/categorieRepository.js';

const createCategorie = async ({ restaurantId, categorieName }) => {
  const newCategorie = await categorieRepository.createCategorie({ restaurantId, categorieName });
  if (!newCategorie) {
    return null;
  }

  return true;
};

const updateCategorie = async ({ restaurantId, categorieId, categorieName }) => {
  const updatedCategorie = await categorieRepository.updateCategorie({
    restaurantId,
    categorieId,
    categorieName,
  });
  return (updatedCategorie);
};

const categorieService = {
  createCategorie,
  updateCategorie,
};

export default categorieService;

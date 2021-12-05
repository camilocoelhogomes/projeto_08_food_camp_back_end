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

const deleteCategorie = async ({ restaurantId, categorieId }) => {
  const updatedCategorie = await categorieRepository.deleteCategorie({
    restaurantId,
    categorieId,
  });
  return (updatedCategorie);
};

const categorieService = {
  createCategorie,
  updateCategorie,
  deleteCategorie,
};

export default categorieService;

const createCategorie = async ({ restaurantId, categorieName }) => {
  console.log({ restaurantId, categorieName });
  return true;
};

const categorieService = {
  createCategorie,
};

export default categorieService;

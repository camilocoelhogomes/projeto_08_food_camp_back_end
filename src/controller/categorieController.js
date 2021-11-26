import categorieService from '../services/categorieService';

const postCategorie = async (req, res) => {
  try {
    const newCategorie = categorieService.createCategorie(
      {
        restaurantId: req.localData.id,
        categorieName: req.body.categorie,
      },
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const categorieController = {
  postCategorie,
};

export default categorieController;

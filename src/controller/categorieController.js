import categorieService from '../services/categorieService';
import restaurantService from '../services/restaurantService';

const postCategorie = async (req, res) => {
  const { restaurantUrl } = req.params;
  if (!req.localData.id) {
    return res.sendStatus(401);
  }
  try {
    const newCategorie = await categorieService.createCategorie(
      {
        restaurantId: req.localData.id,
        categorieName: req.body.categorie,
      },
    );
    if (!newCategorie) {
      res.sendStatus(500);
    }
    const restaurantObject = await restaurantService.createRestaurantObject({ url: restaurantUrl });
    return res.status(201).send(restaurantObject);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const categorieController = {
  postCategorie,
};

export default categorieController;

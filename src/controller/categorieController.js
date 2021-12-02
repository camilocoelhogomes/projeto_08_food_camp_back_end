import categorieService from '../services/categorieService.js';
import restaurantService from '../services/restaurantService.js';

const postCategorie = async (req, res) => {
  const { restaurantUrl } = req.params;
  if (!req.localData.id) {
    return res.sendStatus(401);
  }
  try {
    console.log(req.body);
    let newCategorie = null;
    if (req.body.categorieId) {
      newCategorie = await categorieService.updateCategorie({
        categorieId: req.body.categorieId,
        categorieName: req.body.categorieName,
        restaurantId: req.localData.id,
      });
    } else {
      newCategorie = await categorieService.createCategorie(
        {
          restaurantId: req.localData.id,
          categorieName: req.body.categorieName,
        },
      );
    }
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

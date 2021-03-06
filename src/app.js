import './setup.js';
import express from 'express';
import cors from 'cors';
import restaurantController from './controller/restaurantController.js';
import restaurantAuth from './middleware/restaurantAth.js';
import categorieController from './controller/categorieController.js';
import menuItemController from './controller/menuItemController.js';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/is-live', (req, res) => res.status(200).send('Ok'));

app.post('/sign-up', restaurantController.signUp);
app.post('/sign-in', restaurantController.signIn);

app.get('/owner-auth', (req, res) => res.sendStatus(401));
app.get('/:restaurantUrl', restaurantController.getRestaurantByUrl);
app.get('/owner-auth/:restaurantUrl', restaurantAuth, restaurantController.authOwnerVerify);
app.post('/:restaurantUrl/categorie', restaurantAuth, categorieController.postCategorie);
app.post('/:restaurantUrl/categorie/delete', restaurantAuth, categorieController.deleteCategorie);

app.post('/:restaurantUrl/menu-item', restaurantAuth, menuItemController.postMenuItem);
app.post('/:restaurantUrl/menu-item/delete', restaurantAuth, menuItemController.deleteMenuItem);

export default app;

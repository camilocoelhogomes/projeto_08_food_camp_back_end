import './setup.js';
import express from 'express';
import cors from 'cors';
import restaurantController from './controller/restaurantController.js';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/is-live', (req, res) => res.status(200).send('Ok'));

app.post('/sign-up', restaurantController.signUp);
app.post('/sign-in', restaurantController.signIn);
export default app;

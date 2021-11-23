import './setup.js';
import express from 'express';
import cors from 'cors';
import signUp from './controller/signUp/signUp.js';
import signIn from './controller/signIn/signIn.js';
import validateToken from './middleware/validateToken.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/sign-up', signUp);
app.post('/sign-in', signIn);
app.get('/owner-auth/:restaurant', validateToken, (req, res) => res.sendStatus(200));
export default app;

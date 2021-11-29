import './setup.js';
import app from './app.js';

const port = Number(process.env.PORT);

app.listen(port, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

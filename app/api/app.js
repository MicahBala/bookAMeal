import express from 'express';
import bodyParser from 'body-parser';
import meals from './db/meals.db';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to the meal booking app');
});

// get all meals
app.get('/api/v1/meals', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'meals retrieved successfully',
    meals,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

export default app;

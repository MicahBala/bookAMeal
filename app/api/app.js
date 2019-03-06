import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

// Database
import db from './config/dbConnect';
// Test db connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(`Error: ${err}`));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

export default app;

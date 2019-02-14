import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('The API is working GREAT!!!'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

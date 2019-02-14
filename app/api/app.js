import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('The app is working fine');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// module.exports = app;
export default app;

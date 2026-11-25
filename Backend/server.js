import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from 1MoreReps backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
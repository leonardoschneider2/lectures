const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  // const { id } = req.params;
  res.status(200).json({ message: 'Chegou na rota \'/\'. ' });
});

module.exports = app;
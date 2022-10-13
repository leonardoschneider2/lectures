  const express = require('express');
  const activities = require('./routes/activities');
  const bodyParser = require('body-parser');
  const app = require('./app');

const PORT = '3002';

app.use(bodyParser.json());
app.use('/myactivities', activities);

app.listen(PORT, () => {
  console.log(`Servidor aberto na porta ${PORT}`);
});
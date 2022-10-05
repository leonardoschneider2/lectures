const express = require('express');
const { validateName, validateEmail } = require('./middlewares/validation_source.js')

const app = express();

app.use(express.json());

app.post(
  '/profile',
  validateName,
  validateEmail,
  (_req, res, _next) => {
    console.log('ultimo middleware, não fazemos uso do next');
    res.status(200).json({ message: 'Campos de Email e Nome VALIDADOS!' })
    // quando algum parâmetro estiver listado mas não vá ser utilizado
    // coloque um underline na frente do nome
  }
);

app.listen(3001);
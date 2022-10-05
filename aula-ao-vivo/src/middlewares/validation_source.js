const validateName = (req, res, next) => {
  console.log('VALIDATION NAME: ');

  const { name } = req.body;

  if (!name) {
    return res.status(404).json({ message: 'Dados Inválidos' });
  }

  next();
};

const validateEmail = (req, res, next) => {
  console.log('VALIDATION EMAIL: ');

  const { email } = req.body;

  if(!email) {
    res.status(404).json({ message: 'Dados Inválidos'});
  }

  next();
};

module.exports = {
  validateEmail,
  validateName
}
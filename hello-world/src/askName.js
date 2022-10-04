const readline = require('readline-sync');

const askName = () => {
  const name = readline.question('Qual seu nome ?');
  return name;
}

module.exports = askName;
console.log('index.js');

// rode NPM START

const readline = require('readline-sync');
const askName = require('./askName');
const asyncFunction = require('./npmModule');

const name = askName();

asyncFunction(name);


/* const age = readline.question('Qual sua idade ? ');

if (age >= 60) {
  console.log(`CARALHO! ${age} anos é velho pra porra !`);
} else {
  console.log(`Como eu sempre digo, nunca confie em jovens de apenas ${age} anos !`);
} */
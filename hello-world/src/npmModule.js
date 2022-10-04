const fetch = require('node-fetch');

const asyncFunction = async (name) => {
  // const url = 'https://registry.npmjs.org/libquenaoexiste';
  const url = `https://registry.npmjs.org/${name}`;
  
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

module.exports = asyncFunction;

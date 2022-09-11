// Sorry, but that is my resolution.
function cakes(recipe, available) {
  let result;
  const keys = Object.keys(recipe);
  // Here I want to return if some ingredient dont exist in the available
  /* edit 1: this forEach can be change for the first comparator with infinity (poorly solution) or use of || 0 */
  keys.forEach((key) => {if (available[key] === undefined) result = 0});
  if (result === 0) return result;

  // this line is used only because latter I need to compare the keys, and if I want to compare I need to have a numbers

  /* edit 1: this line can be changed with the use of Math.min */
  result = Math.floor(available[keys[0]] / recipe[keys[0]]); 
  

  /* I can make the sense with HOFs */
  for(let counter = 1; counter < keys.length; counter += 1) {
    const compare = Math.floor(available[keys[counter]] / recipe[keys[counter]]);
    console.log(result, ' compare ', compare);
    if (result > compare) result = compare;
  }

  return result;
}

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // result 0
console.log(cakes({flour: 300, sugar: 150, milk: 100}, {sugar: 500, flour: 2000, milk: 2000})); // result 3


// Correct resolution 1:
function resolution1(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}
/* 
  In this first resolution we have find methods that I don't know about, like:
  
  - Infinity value;
  - Math.min(comparation, accurancy);
  - (resolution || 0);
*/

const resolution2 = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)

/* 
  In the second resolution we have find more simple form to resorce the problem.

  he use a Math min with a spread operator of keys.

  making map in in the keys will return the comparetion of recipe and available or if this value is NaN will return 0

  returning all values from spread operator the Math.min will choose the min value. If some time the return 
  was 0, will return 0, else will return the minimal value of comparetion recipe and available
*/

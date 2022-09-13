/*
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
*/


// That is my solution. the array compare the index with the previous index and if have a opposite, remove and come back. Else walk to the next index
function dirReduc(arr){
  let i = 1
  while (i < arr.length) {
    console.log(i, arr);
    const comparator = [arr[i] || '', arr[i - 1] || ''];
    if (
      (comparator.includes('SOUTH') && comparator.includes('NORTH')) 
      || (comparator.includes('EAST') && comparator.includes('WEST'))
    ) {
      arr.splice(i - 1, 2);
      i--;
    } else {
      i++;
    }
  }
  return arr;
}


//dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

/* The next solution was resorced by Code Wars user Balkoth, I like
it because he use REGEX to create an replace information and use an
while to cant back of looping while is not resourced. In  my code,
I can look for array index, but in this case, the code can look
for every parts of the array. */

function dirReduc2(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  console.log(pattern)
  while (pattern.test(str)) str = str.replace(pattern,''); // search about .test function
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[]; // search about .match function
}


dirReduc2(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
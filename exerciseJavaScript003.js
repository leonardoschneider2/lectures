countBits = n => n.toString(2).split('0').join('').length;

console.log(countBits(400000000000));
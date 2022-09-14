function primeFactors(n){
  // This solution is created by code wars user Clamus
  for(var s = '', d = 2;n>1;d++) { // this first looping is to upgrade the prime divisor number
    for (var k = 0;n%d == 0;k++, n/=d) { // this second for is used to repeat the times of the divisor number
      console.log(n/=d);
    }
    s += k ? (k==1 ? `(${d})` : `(${d}**${k})`) : '';
  }
return s
}

console.log(primeFactors(125));
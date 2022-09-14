function alphanumeric(string){
  //your code here
  string = string.split('').map((e) => e.charCodeAt(0));
  const aZ09 = string.some((e) => !((e <= 90 && e >= 65) || (e <= 122 && e >= 97) || (e <= 57 && e >= 48)));
  return (
    string.length > 0
    && !aZ09
  )
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));
function solution(number){
  let result = 0;
  number -= 1;
  for(number; number > 0; --number) {
    if (number % 3 === 0 || number % 5 === 0) {
      result = result + number;
    }
  }
  console.log(result);
  return result;
}
solution(10);
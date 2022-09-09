function solution(s){
  return (s+"_").match(/.{2}/g)
}

console.log(solution('abasdcdef')); // return ['ab', 'cd', 'ef'];
console.log(solution('abcdefw')); // return ['ab', 'cd', 'ef', 'g_'];
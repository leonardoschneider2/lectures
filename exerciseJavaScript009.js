/* 
João e Maria querem viajar entre algumas cidades A, B, C... Maria tem em uma folha de papel uma lista de distâncias entre essas cidades. ls = [50, 55, 57, 58, 60]. John está cansado de dirigir e diz a Mary que não quer dirigir mais t = 174 milese só visitará 3cidades.

Quais distâncias, portanto, quais cidades, eles escolherão para que a soma das distâncias seja a maior possível para agradar Maria e João?

Exemplo:
Com lista lse 3 cidades para visitar podem escolher entre: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

As somas das distâncias são então: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

A maior soma possível levando em conta o limite de 174é então 173e as distâncias das 3 cidades correspondentes são [55, 58, 60].

A função chooseBestSum(ou choose_best_sumou ... dependendo do idioma) terá como parâmetros t(soma máxima das distâncias, inteiro >= 0), k(número de cidades a visitar, k >= 1) e ls(lista de distâncias, todas as distâncias são inteiros positivos ou zero e esta lista tem pelo menos um elemento). A função retorna a "melhor" soma, ou seja, a maior soma possível de kdistâncias menores ou iguais ao limite fornecido t, se essa soma existir, ou caso contrário, nil, null, None, Nothing, dependendo do idioma. Nesse caso, com C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

Exemplos:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

Notas:
tente não modificar a lista de entrada de distânciasls
em algumas linguagens esta "lista" é na verdade uma string (veja os Testes de Amostra).
*/


// if you want to make an array that make sums dinamicly you need to use function under function. 

/* 
ILUSTRED ESTRUCTURE:

function abc () {
  if () {

  } else {
    for ( hsuahusahs ) {
      sum;
      abc();
    }
  }
}
*/

function chooseBestSum(t, k, ls) {
  var biggestCount = 0;
  var recurseTowns = function(townsSoFar, lastIndex) {
    console.log(townsSoFar);
    townsSoFar = townsSoFar || [];
    //base case
    if (townsSoFar.length === k) {
      var sumDistance = townsSoFar.reduce((a,b)=>a+b);
      console.log(townsSoFar, ' = ', sumDistance);
      if (sumDistance <= t && sumDistance > biggestCount) {
        biggestCount = sumDistance;
      }
      return; //EJECT
    }
    //recursive case
    for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
      recurseTowns(townsSoFar.concat(ls[i]), i);
    }
  }
  recurseTowns();
  
  return biggestCount || null;
}

// chooseBestSum(20, 4, [0, 1, 2, 3, 4, 5, 6, 7, 8]);

// I can't resolve 
const apertosTriplo = (array, quantidade) => {
  const arrays = []
  const arrayMaluco = (arrayDeIndex, lastIndex) => {
    arrayDeIndex = arrayDeIndex || [];
    if (arrayDeIndex.length === quantidade) {
      console.log(arrayDeIndex);
    } else {
      for (let i = lastIndex + 1 || 0; i < array.length; i++) {
        arrayMaluco(arrayDeIndex.concat(array[i]), i);
        // Vai percorrer todos os slots em todos os for, mas só vai adicionar quando o array tiver a quantidade de pessoas certa
      }
    }
  }
  arrayMaluco();
}

apertosTriplo([0, 1, 2, 3, 4, 5], 3);
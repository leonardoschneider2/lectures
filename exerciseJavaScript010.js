const maisPessoas = [
  'Carlos',
  'Augusto',
  'Vicenter',
  'Isadora',
  'Pedro',
]; // acrescenta mais 5 pessoas quando descomentar a linha 18;



// Vamos criar uma função que nos entrega o máximo de combinações de apertos (ou juntadas) de mãos.
const pessoasTotais = [
  'Breno',
  'Fernando',
  'Gabriela',
  'Leonardo',
  'Milena',
  ...maisPessoas,
]; // tamanho inicial 5 pessoas

const maosPorAperto = 1;

const quantidadeDeApertos = (pessoas, maosPorAperto) => {
  const combinacoes = []; // vamos empurrar as combinações (push) para dentro desse array

  const superLooping = (arrayDeCombinacao, index) => {
    arrayDeCombinacao = arrayDeCombinacao || [];
    if (arrayDeCombinacao.length !== maosPorAperto) {
      for (let i = index + 1 || 0; i < pessoas.length; i++) { // O i é o numero responsável por falar em qual índice do Array estamos trabalhando
        superLooping(arrayDeCombinacao.concat(pessoas[i]), i);
      }
    } else {
      console.log(arrayDeCombinacao);
      combinacoes.push(arrayDeCombinacao);
    }
  };
  superLooping();

  return combinacoes.length;
}

console.log(quantidadeDeApertos(pessoasTotais, maosPorAperto));

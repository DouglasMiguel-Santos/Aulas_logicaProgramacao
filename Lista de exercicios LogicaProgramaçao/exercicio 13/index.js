/* 
13 - Faça um algoritmo que receba um valor A e B, e troque o valor de A por B 
e o valor de B por A e imprima na tela os valores. */

function troca(A, B) {
  // Retorna um objeto com os valores trocados
  return { novoA: B, novoB: A };
}

const resultado = troca(10, 60);
console.log(resultado);

/*2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o 
número é par ou ímpar,positivo ou negativo. */

function parimp(a) {
  if (a % 2 === 0) {
    console.log(`o numero ${a} é Par`);
  } else {
    console.log(`o numero ${a} é impar`);
  }
}
parimp(8);

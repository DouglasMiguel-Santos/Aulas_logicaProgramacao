/*7 - Faça um algoritmo que leia três valores inteiros diferentes e 
imprima na tela os valores em ordem decrescente. */

function descrecente(num) {
  num.sort(function (a, b) {
    return a - b;
  });
  console.log(num);
}
descrecente([1, 8, 5, 10, 9]);

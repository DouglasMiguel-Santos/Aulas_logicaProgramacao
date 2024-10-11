/*6 - Faça um algoritmo que leia um valor qualquer e
 imprima na tela com um reajuste de 5%. */

function reajuste(a) {
  let porcentagem = (5 / 100) * a;
  let total = a + porcentagem;
  console.log(total);
}
reajuste(100);

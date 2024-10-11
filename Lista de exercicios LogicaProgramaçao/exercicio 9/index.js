/* 9 - Faça um algoritmo que leia três notas obtidas por um aluno, 
e imprima na tela a média das notas. */

function Notas(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  return media.toFixed(1);
}
console.log("sua media é de : ", Notas(10, 5.5, 8.6));

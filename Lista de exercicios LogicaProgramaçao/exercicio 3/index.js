/* 3 - Faça um algoritmo que leia dois valores inteiros A e B, 
se os valores de A e B forem iguais, deverá somar os dois valores, 

caso contrário devera multiplicar A por B. Ao final de qualquer um dos
 cálculos deve-se atribuir o resultado a uma variável C e

imprimir seu valor na tela.*/
let c = 0;
function valores(a, b) {
  if (a === b) {
    c = a + b;
    console.log(
      `os valores sao iguais portanto a soma de ${a} e ${b} é : ${c}`
    );
  } else {
    c = a * b;
    console.log(
      `os valores nao sao iguais portanto a multiplicaçao de ${a} e ${b} é : ${c}`
    );
  }
}
valores(10, 80);

/* 1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a 
soma entre A e B é mostre se a soma é menor que C.*/

function soma(a, b, c) {
  let somar = a + b;
  if (somar < c) {
    console.log(
      `o total da soma entre A e B é: ${somar} sendo menor que o valor de C ${c} `
    );
  } else {
    console.log(`${somar}`);
  }
}
soma(5, 54, 80);

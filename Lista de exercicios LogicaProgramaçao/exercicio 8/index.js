/*8 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa,
 leia o seu peso e sua altura e imprima na tela sua condição 

de acordo com a tabela abaixo:

Fórmula do IMC = peso / (altura) ²

Tabela Condições IMC

  

 Abaixo de 18,5   | Abaixo do peso          

 Entre 18,6 e 24,9 | Peso ideal (parabéns)  

 Entre 25,0 e 29,9 | Levemente acima do peso

 Entre 30,0 e 34,9 | Obesidade grau I 

 Entre 35,0 e 39,9 | Obesidade grau II (severa)

 Maior ou igual a 40 | Obesidade grau III (mórbida)
 */

function IMC(peso, altura) {
  let imc = peso / (altura * 2);
  if (imc < 18.5) {
    return `seu imc é de :  ${imc.toFixed(1)} | Abaixo do peso`;
  }
  if (imc > 18.5 && imc < 24.9) {
    return `seu imc é de :  ${imc.toFixed(1)} | Peso ideal (parabéns)`;
  }
  if (imc > 25 && imc < 29.9) {
    return `seu imc é de :  ${imc.toFixed(1)} | Levemente acima do peso`;
  }
  if (imc > 30 && imc < 34.9) {
    return `seu imc é de :  ${imc.toFixed(1)} | Obesidade grau I `;
  }
  if (imc > 35 && imc < 39.9) {
    return `seu imc é de :  ${imc.toFixed(1)} | Obesidade grau II (severa) `;
  }
  if (imc >= 40) {
    return `seu imc é de :  ${imc.toFixed(1)} | Obesidade grau III (mórbida) `;
  }
}
console.log(IMC(94, 1.81));

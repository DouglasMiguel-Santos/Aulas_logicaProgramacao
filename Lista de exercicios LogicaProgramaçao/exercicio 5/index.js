/* 5 - Faça um algoritmo que leia o valor do salário mínimo e o 
valor do salário de um usuário, calcule quantos salários mínimos esse 

usuário ganha e imprima na tela o resultado. 
(Base para o Salário mínimo R$ 1.293,20)*/

const salarioMinimo = 1293.2;
function salario(a) {
  const numSal = parseFloat(salarioMinimo);
  const media = Number(a / numSal);
  console.log(
    `essa pessoa ganha em media ${media.toFixed(1)} salarios minimos`
  );
}
salario(3000);

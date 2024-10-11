/*  12 - Faça algoritmo que leia o nome e a idade de uma pessoa e 
imprima na tela o nome da pessoa e se ela é maior ou menor de idade.  */

function faxaetaria(nome, idade) {
  if (idade >= 18) {
    return nome + " tem " + idade + " anos. É maior de idade ";
  } else {
    return nome + " tem " + idade + " anos. É menor de idade ";
  }
}
console.log(faxaetaria("Douglas", 33));

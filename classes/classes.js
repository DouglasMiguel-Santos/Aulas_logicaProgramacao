/* Basicamente as classes sao  como fabricas para criar objetos.
pode se dizer que sao funçoes especiais para criaçao de objets.

assim como uma fabrica da vida real precisa das maquinas para construir os objetos, 
as casses no java script usam metodo chamado constructor() para fabricar objetos
*/
class Carro {
  constructor(valor1, valor2, valor3) {
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
  }
  buzina() {
    return this.modelo + "buzinou:  Biiiiiiiii";
  }
}

const uno = new Carro("fiat", "uno", 2001);
console.log(uno);
console.log(uno.ano);
console.log(uno.buzina);

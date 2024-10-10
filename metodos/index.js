const lista = ["arroz", "feijao", "macarrao", "leite"];
const lista2 = ["suco", "refri", "carne"];
const pessoa = ["dimitri", "teixeira", 30];

//document.getElementById("teste").innerHTML = lista.join("-"); //troca o separador  dos itens ao mostrar na tela
document.getElementById("teste").innerHTML = pessoa;
pessoa.pop(); // retirar o ultimo item da lista
pessoa.push("qualqercoisa"); //ADD ITEM A LISTA
pessoa.shift(); // remove o primeiro item da lista
pessoa.unshift("alteraritem"); // altera o item 0 da lista
pessoa.sort(); //deixa em ordem  alfabetica
pessoa.sort(function (a, b) {
  return a - b;
}); // vai retonrar =numeros na ordem numerica
function maiornumero(array) {
  return Math.max.apply(null, array);
} // vai retornar o maior numero
function menornumero(array) {
  return Math.min.apply(null, array);
} // pegar o menor numero de uma matrix

pessoa.reverse(); // inverte a ordem dos itens
pessoa.splice(1, 0, "item adicionado 1", "item adicionado 2"); //campo 1(indica a posiçao que vc qer colocar campo2 ( se vc quer e quantos valores seram deletados ) e depois os itens que vc qer add na array
const pessoasimpostantes = pessoa.slice(2); //o slice vai pegar os itens da posicao selecionada em diante apenas
const superlista = lista.concat(lista2); //junta duas arrays

document.getElementById("teste").innerHTML = superlista;
//----------------------------------------------------------------------

const numeros = [40, 50, 10, 4, 9, 80, 8, 15];
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array) {
  return value > 20;
}

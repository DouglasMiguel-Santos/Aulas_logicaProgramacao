/* Filter (filtrar o array)
- Cria um novo Array filtrando os valores desejados do array Original
-Você tem acesso a 3 dados
   -Item por item do array
   -posição atual do array
   -Array Completo
*/

const produtos = [
  {
    id: 1,
    nome: "Smartphone Galaxy S21",
    preco: 3999.99,
    temDesconto: true,
    quantidade: 5,
  },
  {
    id: 2,
    nome: "Notebook Dell Inspiron",
    preco: 4599.9,
    temDesconto: false,
    quantidade: 3,
  },
  {
    id: 3,
    nome: "Tablet Samsung Galaxy Tab",
    preco: 1899.99,
    temDesconto: true,
    quantidade: 10,
  },
  {
    id: 4,
    nome: "Smartwatch Apple Watch",
    preco: 2899.9,
    temDesconto: false,
    quantidade: 2,
  },
  {
    id: 5,
    nome: "Fone de Ouvido JBL",
    preco: 299.99,
    temDesconto: true,
    quantidade: 15,
  },
  {
    id: 6,
    nome: "Monitor LG 24''",
    preco: 849.9,
    temDesconto: true,
    quantidade: 7,
  },
  {
    id: 7,
    nome: "Teclado Mecânico Logitech",
    preco: 499.9,
    temDesconto: false,
    quantidade: 12,
  },
  {
    id: 8,
    nome: "Mouse Gamer Razer",
    preco: 349.9,
    temDesconto: true,
    quantidade: 9,
  },
  {
    id: 9,
    nome: "Cadeira Gamer DXRacer",
    preco: 1299.99,
    temDesconto: false,
    quantidade: 4,
  },
  {
    id: 10,
    nome: "SSD Kingston 480GB",
    preco: 399.9,
    temDesconto: true,
    quantidade: 20,
  },
];

//EXEMPLO SIMPLES
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((numero) => {
  return numero % 2 === 0; // retorna todos os numeros pares
  // return numero >6 // vai retornar so os numeros maiores que 6
});
// console.log(pares);

//FILTRAR SOMENTO OS PRODUTOS EM PROMOÇAO

const promocao = produtos.filter((produto) => produto.temDesconto);
/* filter sempre vai retornar oque é verdadeiro ou seja vai me retornar  
todos os produtos que o campo 'temDesconto' esta como true.
Se eu colocar ' !produto.temDesconto ' (!) <-- operaor de inverso.
Ele mostraria os que estao como false
*/
console.log(promocao);

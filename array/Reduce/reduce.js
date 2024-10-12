/*
Reduce(reduzir o Array a um unico valor)
   -Reduz um array inteiro a um ÚNICO valor
      -Item por item do array
      -Valor Atual
      -Posição atual
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
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, atual) => {
  const total = acumulador + atual;

  return total;
}, 10 /* <-- Faz o acumulador comecar em 10  na contagem se nao por nada vai comecar em zero */);

//QUAL SERA O FATURAMENTO, SE VENDERMOS TODO O ESTOQUE

const totalVendas = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco * produto.quantidade;
}, 0);
console.log(
  totalVendas.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

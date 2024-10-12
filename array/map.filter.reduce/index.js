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

//adicionar + 10 em cada produto (map)
// filtrar so os em promoçao   (filter)
// saber qual é o faturamento se vendermos todos em promoçao (reduce)

const faturamentoTotal = produtos
  .map((produto) => {
    return {
      ...produto,
      quantidade: produto.quantidade + 10,
    };
  })
  .filter((produto) => produto.temDesconto)
  .reduce(
    (acumulador, produto) => acumulador + produto.quantidade * produto.preco,
    0
  );

console.log(
  faturamentoTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
);

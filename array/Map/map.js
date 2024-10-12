/*
MAP(Mapear item por item do array)
- Criar um novo array com a mesma quantidade de itens do array original 
- O novo arrray voce pode alterar o que quiser em relaçao ao array original
-Voce tem acesso a 3 dados:
   -Item por item do array = (numero)
   -Posiçao atual do array = (index)
   -Array Completo         = (arrayCompletop)
 */

const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map((numero, index, arrayCompleto) => {
  // return numero * 2; // pega numero por numero dentro do array e faz ele multiplicado por 2
  // console.log(numero);
  // console.log(index);
  // console.log(arrayCompleto);
});

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

//console.log(produtos);

//CRIAR UM NOVO ARRAY FORMATANDO A MOEDA E DANDO DESCONTO AOS CLIENTES
const novosProdutos = produtos.map((Produto) => {
  //Ternario = IF/else  ? = if / : = else
  const novoPreco = Produto.temDesconto ? Produto.preco * 0.9 : Produto.preco;
  // para dar 10% de desconto multiplica o valor por 0.9
  return {
    id: Produto.id,
    nome: Produto.nome,
    preco: novoPreco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    quantidade: Produto.quantidade,
  };
});
console.log(novosProdutos);

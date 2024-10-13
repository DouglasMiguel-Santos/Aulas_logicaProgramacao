/*
ForEach (item, index, array)
item) - Dados/informaçoes contidos na posiçao atual do array
index) - Numero da posicao. Sempre começando em 0
array) - retorna o array completo

*/
const users = [
  {
    nome: "João Silva",
    email: "joao.silva@email.com",
    idade: 28,
    ativo: true,
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    idade: 34,
    ativo: false,
  },
  {
    nome: "Pedro Santos",
    email: "pedro.santos@email.com",
    idade: 22,
    ativo: true,
  },
  {
    nome: "Ana Costa",
    email: "ana.costa@email.com",
    idade: 45,
    ativo: true,
  },
  {
    nome: "Lucas Pereira",
    email: "lucas.pereira@email.com",
    idade: 19,
    ativo: false,
  },
];

console.log(users);

users.forEach(function (item, index, array) {
  console.log(item);
  console.log(index);
  console.log(array);

  if (item.idade < 18) {
    console.log(`O cliente ${item.nome} é menor de idade `);
  }
});

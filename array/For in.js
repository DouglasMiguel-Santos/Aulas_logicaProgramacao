/*
Estrutura de Repetiçao - LOOP
      - FOR IN
      - Usado para iterar Objetos
*/

const user = {
  name: "rodolfo",
  age: 33,
  stret: "rua dos bobos",
};

for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}

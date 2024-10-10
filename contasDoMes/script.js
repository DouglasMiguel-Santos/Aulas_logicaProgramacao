/*let btnSalario = document.querySelector(".btn-salario");
let btnDivida = document.querySelector(".btn-dividas");

let textDividas = document.querySelector("#valorDivida");

btnSalario.addEventListener("click", function () {
  let textSalario = document.querySelector("#valorSalario");
  const salario = parseFloat(document.querySelector("#inputSalario").value);
  textSalario.innerHTML = `${salario.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
});

btnDivida.addEventListener("click", function () {
  const Descricao = document.querySelector("#descricao").value;
  const divida = parseFloat(document.querySelector("#inputDividas").value);
  const soma = [];
  soma.push(divida);
  const textDividas = document.querySelector("#valorDivida");
  textDividas.innerHTML += `${Descricao}: ${divida.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })} <br>`;

  console.log(soma);
  let totalDividas = soma.reduce((total, valor) => total + valor, 0);
  function somarDividas() {
    //for(let valores = 0;valores < soma.length;valores ++){
    // soma[0].value
    // }
  }
});
*/

let salario = 3500;

let contas = {
  aluguel: 700,
  mercado: 1000,
  academia: 55,
  "gastos gerais": 500,
};

const total = Object.values(contas).reduce((a, b) => a + b);
console.log(
  `  salario R$${salario} 
  total de gastos: R$${total} 
  restante: R$${salario - total}`
);

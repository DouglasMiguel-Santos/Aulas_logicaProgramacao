/*function realparadolar(real, cotacaodolar) {
  return real * cotacaodolar;
}

var total = realparadolar(10, 5.08);
 alert(`${real} e ${total}`);*/

//nao funciona do jeito a cima
//--------------------------------------------------------------------------
/* function realparadolar(real, cotacaodolar) {
  return real * cotacaodolar;
}

var real = 10; // Define the value of 'real'
var cotacaodolar = 5.08; // Define the value of 'cotacaodolar'

var total = realparadolar(real, cotacaodolar);
alert(`${real} reais equivale a ${total} dólares`);

// objetos-----------------------------------------------------------------------

const carro = {
  marca: "ford",
  modelo: "ka",
  ano: "2015",
  placa: "abc-1234",
  buzina: function () {
    alert("biiii");
  },
  completo: function () {
    return alert("a marca é " + this.marca + " e o modelo é " + this.modelo);
  },
}; //objeto literal

console.log(carro.ano); // vai mostrar o campo selecionado dentro do objeto carro
carro.completo;
carro.buzina(); // para chamar a funçao dentro o do objeto
console.log(carro.completo());   */
//EVENTOS------------------------------------------------------------------------------

function ficavermelho() {
  let eventos = document.getElementById("eventosdemouse");
  eventos.style.backgroundColor = "red";
}

function ficaazul() {
  let eventos = document.getElementById("eventosdemouse");
  eventos.style.backgroundColor = "blue";
}

function addtexto() {
  let texto = document.getElementById("texto");
  //texto.append(" voce moveu o mouse "); // vai adicionar dentro do paragrafo sempre q mover
  texto.innerHTML = "voce moveu"; // vai adicionar apenas uma vez o texto
}

function limpatexto() {
  document.getElementById("campotexto").value = "";
}

function mudou() {
  let texto = document.getElementById("texto");
  texto.innerHTML = "o onteudo mudou";
}

function onclik() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

function pressionada() {
  let campotexto = document.getElementById("campotexto").value;
  console.log(campotexto);
}

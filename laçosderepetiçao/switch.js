var ano = new Date().getFullYear();

for (let i = ano; i > 1950; i--) {
  document.getElementById("ano").innerHTML +=
    "<option value '" + i + "'>" + i + "</option>";
}

let a = document.getElementById("ano").value;
alert = a.value;

const carros = ["gol", "brasilia", "parati", "onix"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
  document.getElementById("teste").innerHTML += carros[i] + " - ";
}

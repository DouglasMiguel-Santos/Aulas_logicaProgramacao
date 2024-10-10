//OBJETO CARRO

const carro = {
  marca: "fiat",
  modelo: "uno",
  ano: 2001,
};

//converteu para texto JSON
let texto = JSON.stringify(carro);

//colocou o texto no html
document.getElementById("area").innerHTML = texto;

//converter texto em objeto
let obj = JSON.parse(texto);
//pegamos um valor desse objeto
console.log(obj.modelo);

//na pratica

/*const ajax = new XMLHttpRequest();
ajax.open("GET", "https://viacep.com.br/ws/01001000/json/");
ajax.send();

ajax.onload = function () {
  document.getElementById("area").innerHTML = this.responseText;
  let obj = JSON.parse(this.responseText);
  alert(obj.ddd);
};*/

function buscarCEP() {
  let input = document.getElementById("CEP").value;
  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://viacep.com.br/ws/" + input + "/json/");
  ajax.send();

  ajax.onload = function () {
    //document.getElementById("texto").innerHTML = this.responseText;
    //transformei o texto em objeto
    let obj = JSON.parse(this.responseText);
    //peguei os valores que quer que mostre na tela
    let logradouro = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;
    document.getElementById("texto").innerHTML =
      "logradouro:" +
      logradouro +
      "<br> Cidade:" +
      cidade +
      "<br> Estado: " +
      estado;
  };
}

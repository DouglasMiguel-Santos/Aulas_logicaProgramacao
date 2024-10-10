/*Switch
É usado para realizar diferentes açoes
 com base em diferentess condiçoes no mesmo 
 bloco de verificaçao
\caso a condiçao nao seja 
compativel nao sera executada e o valor padrao 
sera adicionado


multi escolhas pre-definidas 
 */

function verificacor() {
  let cor = document.getElementById("cor").value;
  cor = cor.toLowerCase(); // deixa tudo oque eu digitar com letras minusculas

  switch (cor) {
    case "azul":
      //oque acontece
      document.body.style.backgroundColor = "blue";
      break;
    case "vermelho":
      //o que acontece
      document.body.style.backgroundColor = "red";
      break;
    case "amarelo":
      //oque aconece
      document.body.style.backgroundColor = "yellow";
      break;
    default:
      //oque acontece
      document.getElementById("teste").innerHTML =
        "nenhuma cor disponivel para: " + cor;
  }
}

function diadasemana() {
  let dia = new Date();
  let diasem = dia.getDay();
  console.log(dia);
  switch (diasem) {
    case 0:
      //oque acontece
      document.getElementById("teste").innerHTML = "domingo";
      break;
    case 1:
      //oqueacontece
      document.getElementById("teste").innerHTML = "segunda";
      break;
    case 2:
      //oqueacontece
      document.getElementById("teste").innerHTML = "terça";

      break;
    case 3:
      //oque acontece
      document.getElementById("teste").innerHTML = "quarta";

      break;
    case 4:
      //oque aocntece
      document.getElementById("teste").innerHTML = "quinta";

      break;
    case 5:
      //oque acontece
      document.getElementById("teste").innerHTML = "sexta";

      break;
    case 6:
      //oque acontece
      document.getElementById("teste").innerHTML = "sabado";

      break;
    default:
    //oque acontece
  }
}

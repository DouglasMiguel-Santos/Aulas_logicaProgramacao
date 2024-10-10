const key = "1bd5d7ea239061e152104bae95c5eb14";

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";

  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;

  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";

  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
}

async function buscarcidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  console.log(dados);
  colocarDadosNaTela(dados);
}

function botaobusca() {
  const cidade = document.querySelector(".input-cidade").value;
  buscarcidade(cidade);
}

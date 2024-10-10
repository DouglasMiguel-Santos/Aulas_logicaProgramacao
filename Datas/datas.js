/**manipular datas em javascript */

//comando basico para pegar a data
let data = new Date();

let ano = data.getFullYear(); //para pegar o ano atual 4 digitos
let mes = data.getMonth(); // para pegar o mes atual com numeros de 0 ate 11 sendo 0 janeiro e 11 dezembro
//mostrar o mes no formato escrito
const mesesDoAno = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "desembro",
];
let mesEscrito = mesesDoAno[data.getMonth()];
//pegar o dia do mes-1 ate 31

let diaMes = data.getDate();

//dia da semana
let diaSemana = data.getDay();
const diasemana = [
  "domigo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];
let semanaescrita = diasemana[data.getDay()];

//pegar a hora 0 ate 23

let hora = data.getHours();

//pegar os minutos
let minutos = data.getMinutes();

//para pegar os segundos 0 ate 59
let segundos = data.getSeconds();

//para pegar os milisegundos 0 ate 999

let milisegundos = data.getMilliseconds();

//pegar a data no ádrao brasileiro dia-mes-ano

let dataBR = data.toLocaleString("pt-BR", { dateStyle: "short" });

//comparar datas - maior ou menor. ex: vencimentos

var hoje = new Date();
var vencimento = new Date(2022, 0, 15);
if (hoje > vencimento) {
  console.log("sua conta esta vencida");
} else {
  console.log("ainda nao venceu");
}
//diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);
var diferençaTempo = dataInicial.getTime() - dataFinal.getTime();
//                    CEIL(ARRENDONDAR)        HR   MIN  SEG  MILISEG
var diferençaDias = Math.ceil(diferençaTempo / (24 * 60 * 60 * 1000));
console.log(diferençaDias + " dias");

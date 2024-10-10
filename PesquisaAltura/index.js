// criar um objeto com a altura de cada um em centimentros
// fazer um for para passar em cada campo pegando o valor da maior altura
// pegar tmb o valor da menor altura
// fazer a media das alturas ( soma das alturas'reduce' e divide pelo numero de pessoas''length )
// e depois pegar quantas pessoas tem com a altura menor doque essa media

const pessoas = {
  ana: 1.55,
  joao: 1.8,
  clara: 1.62,
  carlos: 1.75,
  maria: 1.68,
  lucas: 1.82,
  julia: 1.6,
  pedro: 1.78,
  aline: 1.63,
  gabriel: 1.85,
  sofia: 1.56,
  marcos: 1.7,
  laura: 1.65,
  felipe: 1.88,
  isabela: 1.59,
  gustavo: 1.9,
  alice: 1.61,
  miguel: 1.83,
  leticia: 1.57,
  vinicius: 1.76,
  camila: 1.64,
  leonardo: 1.87,
  beatriz: 1.66,
  rafael: 1.72,
  sara: 1.6,
  tiago: 1.81,
  paula: 1.69,
  roberto: 1.74,
  fernanda: 1.58,
  eduardo: 1.79,
  carolina: 1.67,
  andre: 1.73,
  juliana: 1.62,
  ricardo: 1.77,
  bruna: 1.55,
  diego: 1.89,
  monica: 1.63,
  ivan: 1.84,
  melissa: 1.61,
  renato: 1.75,
  debora: 1.58,
  hugo: 1.82,
  patricia: 1.66,
  adriano: 1.8,
  flavia: 1.65,
  daniel: 1.85,
  natalia: 1.6,
  thiago: 1.78,
  raquel: 1.7,
  alexandre: 1.87,
  gabriela: 1.56,
  bruno: 1.83,
  aline: 1.67,
  henrique: 1.88,
  elisa: 1.57,
  joana: 1.72,
  francisco: 1.74,
  solange: 1.64,
  ivone: 1.68,
  sergio: 1.71,
  cassio: 1.85,
  regina: 1.63,
  nicolas: 1.79,
  edna: 1.59,
  beto: 1.82,
  sandra: 1.61,
  arthur: 1.9,
  amanda: 1.55,
  cleber: 1.77,
  tatiana: 1.62,
  antonio: 1.84,
  yara: 1.58,
  fabricio: 1.86,
  vanessa: 1.6,
  paulo: 1.81,
  rosa: 1.65,
  otavio: 1.78,
  valeria: 1.66,
  rodrigo: 1.75,
  eliane: 1.64,
  caio: 1.8,
  lilian: 1.59,
  osvaldo: 1.88,
  simone: 1.62,
  denis: 1.84,
  marcia: 1.57,
  jefferson: 1.89,
  veronica: 1.65,
  samuel: 1.76,
  viviane: 1.56,
  evandro: 1.83,
  priscila: 1.6,
  gustavo: 1.87,
  mayara: 1.63,
  luiz: 1.74,
  jaqueline: 1.58,
  eduarda: 1.66,
};

const SomaAltura = Object.values(pessoas).reduce((a, b) => a + b);
const Media = SomaAltura / Object.keys(pessoas).length;
const alturas = Object.values(pessoas);
const menorAltura = Math.min(...alturas);
const maiorAltura = Math.max(...alturas);
var baixinhos = 0;
for (let index = 0; index < alturas.length; index += 1) {
  if (alturas[index] < Media) {
    baixinhos += 1;
  }
}

console.log(`
  maior altura: ${maiorAltura} 
  Menor altura: ${menorAltura}
  Media das alturas: ${Media}
  quntas pessoas estao abaixo da media: ${baixinhos} pessoas`);

//SOLUÇAO DO VIDEO____________________________________________________________________________________________________________________

7;

let alturas1 = [];
function criaPessoa(num) {
  for (let index = 0; index < num; index += 1) {
    alturas1.push((Math.random() * (2.5 - 1.3) + 1.3).toFixed(2));
  }
}
criaPessoa(10);
/*A função Math.random() em JavaScript é uma 
função que gera um número pseudoaleatório 
entre 0 (inclusivo) e 1 (exclusivo). 
Isso significa que o valor retornado pode ser 0, 
mas nunca atingirá 1.*/

let soma1 = 0;
alturas1.forEach((altura) => (soma1 += altura));
/*O método forEach é uma função de array em JavaScript que executa 
uma determinada função em cada elemento de um array. Ele é usado para
 iterar sobre os elementos de um array e permite que você aplique alguma 
 lógica a cada item sem precisar usar um loop for tradicional.*/

const media1 = (soma1 / alturas1.length).toFixed(2); // .toFixed(2) e para mostrar apenas 2 numeros depois do ponto

//para descobrir quantas pessoas estao abaixo da media
let menorMedia = 0;
alturas1.forEach((altura) => {
  if (altura < media1) menorMedia += 1;
});

console.log(media1);
console.log(menorMedia);
console.log(`menor altura ${alturas1.sort()[0]}`); // 'sort'organiza os valores de forma crescente '[]' pega a posiçao que eu quero q mostre
console.log(`maior altura ${alturas1.sort((a, b) => b - a)[0]}`);

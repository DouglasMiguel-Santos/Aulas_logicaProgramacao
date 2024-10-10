//arrays

function arraysimples(ar) {
  let soma = 0;
  for (let index = 0; index < ar.length; index++) {
    soma = soma + ar[index];
  }
  return soma;
}
console.log(arraysimples([1, 2, 3]));

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] > b[index]) {
      alice += 1;
    } else if (a[index] < b[index]) {
      bob += 1;
    }
  }
  return [alice, bob];
}

console.log(compareTriplets([17, 28, 30], [99, 19, 50]));

// faça uma soma da quantidade de um item de um array, idependente da quantidade de elementos dentro do array

function arraysoma(ar) {
  let soma = 0;
  for (let index = 0; index < ar.length; index += 1) {
    soma = soma + ar[index];
  }
  return soma;
}
console.log(arraysoma([5, 5, 5]));

//

function diagonalDiference(arr) {
  let esquerda = 0;
  let direita = 0;
  for (let index = 0; index < arr.length; index += 1) {
    esquerda += arr[index][index];
    direita += arr[index][arr.length - 1 - index];
  }
  return Math.abs([esquerda - direita]);
}
console.log(
  diagonalDiference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9],
  ])
);
//----------------------------------------------------------------------------------------
function criarescada(n) {
  let inputline = "";
  let symbol = "#";
  let inputPosition = n - 1;
  for (
    let indexline = 0;
    indexline < n;
    indexline += 1 // garantindo q vai passar por todas as linhas
  ) {
    for (
      let indexcolum = 0;
      indexcolum < n;
      indexcolum += 1 //garatindo que vai passar em todas as colunas
    ) {
      if (indexcolum < inputPosition) {
        inputline += " ";
      } else {
        inputline += symbol;
      }
    }
    console.log(inputline);
    inputline = "";
    inputPosition -= 1;
  }
}
criarescada(8);

function escadaria(m) {
  let lineinput = "";
  let inputsymbol = "#";
  let inputPosition = m - 1;

  for (let indexline = 0; indexline < m; indexline++) {
    for (let indexcolum = 0; indexcolum < m; indexcolum++) {
      if (indexcolum < inputPosition) {
        lineinput += "";
      } else {
        lineinput += inputsymbol;
      }
    }
    lineinput = "";
    inputPosition -= 1;
  }
}

function escada(vlr) {
  let linhas = "";
  let simbulo = "#";
  let posicao = vlr - 1;
  for (let linharecebe = 0; linharecebe < vlr; linharecebe++) {
    for (colunarecebe = 0; colunarecebe < vlr; colunarecebe++) {
      if (colunarecebe < posicao) {
        linhas = "";
      } else {
        linhas = simbulo;
      }
    }
    linhas = "";
    posicao -= 1;
  }
}

function caçarato(x, y, z) {
  let totalA = Math.abs([x - y]);
  let totalb = Math.abs([y - z]);

  if (totalA < totalb) {
    return "gato A ganhou";
  } else if (totalb < totalA) {
    return "gato B ganhou";
  } else {
    return "rato ganhou";
  }
}

console.log(caçarato(1, 0, 7));

//--------------------------------------------------------------------------------------
//qual id mais se repete e qual tem o menor valor
function migratoryBirds(arri) {
  let counts = {}; // para saber os valores que se repetem

  // forEach = vai fazer uma funçao para cada item dentro do objeto
  //obs: funciona da mesma forma que quando eu  crio a funçao de clik atravez de um id no html;
  arri.forEach((count) => {
    counts[count] = (counts[count] || 0) + 1;
  }); // ele esta pegando cada valor e contanto quantas vezes  esse mesmo valor tem dentro do objeto.
  //podendo usar sempre pra quanod quiser saber quantas vees um valor se repete dentro de um objeto

  const Maxvalue = Math.max(...Object.values(counts));
  const num = Object.keys(counts).find((key) => counts[key] === Maxvalue);

  return num;
}
console.log(migratoryBirds([2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 5]));

//--------------------------------------------------------------------------------------------------------------

//informe se é par ou impar

function parimp(n) {
  if (n % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}
console.log(parimp(4));

//-------------------------------------------------------------------------

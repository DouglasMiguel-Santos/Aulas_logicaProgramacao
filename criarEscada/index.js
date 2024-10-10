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

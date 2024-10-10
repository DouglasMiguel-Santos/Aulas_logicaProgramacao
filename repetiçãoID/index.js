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

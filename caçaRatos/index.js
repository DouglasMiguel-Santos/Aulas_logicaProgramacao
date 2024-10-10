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

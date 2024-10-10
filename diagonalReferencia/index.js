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

function bonAppetit(bill, k, b) {
  let Sum = 0;
  let final = 0;
  bill.forEach((price) => (Sum += price)); // esta fazendo Sum receber todos os valor somados do array bill
  Sum = Sum - bill[k];
  final = Sum / 2;

  if (final != b) {
    console.log(b - final);
  } else {
    console.log(" bon Appetit");
  }
}

bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288);
//5

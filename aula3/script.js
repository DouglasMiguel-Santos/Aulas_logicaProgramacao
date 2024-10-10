calcular.addEventListener("click", () => {
  let notaFiscal = document.getElementById("notafiscal");
  const preco = Number(document.getElementById("preço").value);

  let parcelas = document.getElementById("PinPad");
  let parcela = parcelas.options[parcelas.selectedIndex].value;
  let total = 0;
  console.log(parcelas);
  if (parcela === "a vista") {
    total = preco - [(10 / 100) * preco];
  } else if (parcela === "2x") {
    total = preco / 2;
    console.log(total);
  } else if (parcela === "3x") {
    total = preco / 3;
    console.log(total);
  }

  notaFiscal.innerHTML = `R$:${preco} <br> ${parcela} :R$${total} `;
});

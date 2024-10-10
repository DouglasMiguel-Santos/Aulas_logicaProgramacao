function calc() {
  let janta = Number(document.getElementById("jantar").value);
  let taxa = Number(document.getElementById("taxa").value);
  let tax = (taxa / 100) * janta;
  let total = janta + (taxa / 100) * janta;
  document.getElementById(
    "resultado"
  ).innerHTML = `valor do jantar R$:${janta}<br>taxa do garçom R$:${tax} <br> total: : R$${total}<br> `;
}

let res = document.getElementById("selecao");
let resulta = res.options[res.selectedIndex].value;

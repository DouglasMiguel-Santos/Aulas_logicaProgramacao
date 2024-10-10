function verificar() {
  let pesoideal = 0;
  let res = document.getElementById("pesoIdeal");

  let Genero = document.getElementById("genero");
  let Gen = Genero.options[Genero.selectedIndex].value;

  let altura = Number(document.getElementById("altura").value);
  if (Gen === "homem") {
    pesoideal = 22 * altura * 2;
  } else {
    pesoideal = 21 * Math.pow(altura, 2);
  }
  console.log(pesoideal);
  res.innerHTML = `seu peso ideal é:${pesoideal.toFixed(3)}Kg`;
}

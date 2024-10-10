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

//----------------------------------------------------------------------------------------

// calculando o horario da frança pelo horario do brasil, sabendo que é uma diferença de 5 horas

function horario() {
  let dat = new Date();
  //let hrAtual = dat.getHours();
  let hora = 23;
  let minutos = dat.getMinutes();
  let franca = hora + 5;
  if (franca >= 24) {
    franca -= 24;
  }
  document.getElementById(
    "horaAtual"
  ).innerText = `horario do Brasil ${hora}:${minutos} Horas, e a hora na frança ${franca}:${minutos} horas`;
}

horario();

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

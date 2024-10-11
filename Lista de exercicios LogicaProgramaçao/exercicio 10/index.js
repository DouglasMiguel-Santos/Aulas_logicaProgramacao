/* 10 - Faça um algoritmo que leia quatro notas obtidas por um aluno,
calcule a média das nota obtidas,imprima na tela o nome do aluno e 
se o aluno foi aprovado ou reprovado. Para o aluno ser 
considerado aprovado sua média final deve ser maior ou igual a 7. */

let Aluno = {
  nome: "joaquin",
  matematica: 9.5,
  portugues: 6.5,
  geografia: 7,
  historia: 5.3,
};

function media(notas) {
  let Media =
    (Aluno.matematica + Aluno.historia + Aluno.geografia + Aluno.portugues) / 4;
  //Object.length[Aluno];
  //pesquisar como obter o numero de campos q tem dentro de um objeto, no array se o usa o length
  if (Media >= 7) {
    console.log(
      " O aluno " +
        Aluno.nome +
        " teve uma media de " +
        Media.toFixed(1) +
        " e foi aprovado, Parabens! "
    );
  } else {
    console.log(
      "O aluno " +
        Aluno.nome +
        " teve uma media de " +
        Media.toFixed(1) +
        " e foi reprovado!"
    );
  }
}
media(Aluno);

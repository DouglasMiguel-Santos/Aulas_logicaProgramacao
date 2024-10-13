/*
Estrutura de repetição - LOOP
   - FOR
        1) INICIALIZAÇÃO - Criar uma variavel e colocar 
                           um valor inicial pra ela

        2) CONDIÇÃO - Enquanto for true, o laço continuara iterando.
                      Ele ira verificar anes de cada interação
        3) ESPRESSÃO FINAL -o que irá ocorrer a cada vez que o nosso laço der uma volta
        
        
for ([inicialização/variavel];[condição];[expressão final]){
  seu codigo aqui 
}
    
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["maria", "aline", "joao"]; // length(tamanho do array) =3)

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

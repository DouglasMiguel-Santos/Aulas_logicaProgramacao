/*
Um **array** em JavaScript (e em muitas outras linguagens de 
programação) é uma estrutura de dados que armazena uma coleção
 de valores em uma única variável. Esses valores podem ser de 
 qualquer tipo de dado, como números, strings, objetos ou até 
 outros arrays. Os arrays são especialmente úteis quando você 
 precisa armazenar e manipular múltiplos valores relacionados.

### Características dos Arrays:
1. **Indexado por zero**: O primeiro elemento de um array tem o 
índice `0`, o segundo tem o índice `1`, e assim por diante.
2. **Tamanho dinâmico**: Em JavaScript, os arrays podem crescer
 ou diminuir conforme necessário. Você pode adicionar ou remover 
 elementos livremente.
3. **Heterogêneo**: Arrays podem conter valores de diferentes tipos 
(números, strings, booleanos, objetos, etc.) no mesmo array.
4. **Propriedade `length`**: Arrays possuem a propriedade `length`
 que indica o número de elementos no array.

### Declaração de Arrays
Você pode declarar um array de duas formas principais:

1. **Usando colchetes (`[]`)**:
   ```javascript
   let frutas = ["maçã", "banana", "laranja"];
   ```
2. **Usando o construtor `Array`**:
   ```javascript
   let numeros = new Array(1, 2, 3, 4, 5);
   ```

### Acessando Elementos do Array
Os elementos de um array são acessados usando seu índice. 
Lembre-se de que os índices começam em `0`.

```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // Saída: maçã
console.log(frutas[2]); // Saída: laranja
```

### Modificando Elementos
Você pode alterar os elementos de um array atribuindo novos 
valores a índices específicos.

```javascript
frutas[1] = "uva";
console.log(frutas); // Saída: ["maçã", "uva", "laranja"]
```

### Propriedade `length`
A propriedade `length` retorna o número de elementos de um array.


```javascript
let numeros = [1, 2, 3, 4];
console.log(numeros.length); // Saída: 4
```

### Métodos Comuns de Arrays

1. **`push()`**: Adiciona um ou mais elementos ao final do array.
   ```javascript
   frutas.push("abacaxi");
   console.log(frutas); // ["maçã", "uva", "laranja", "abacaxi"]
   ```

2. **`pop()`**: Remove o último elemento do array e retorna 
o valor removido.
   ```javascript
   let ultimaFruta = frutas.pop();
   console.log(ultimaFruta); // "abacaxi"
   console.log(frutas);      // ["maçã", "uva", "laranja"]
   ```

3. **`shift()`**: Remove o primeiro elemento do array e 
retorna o valor removido.
   ```javascript
   let primeiraFruta = frutas.shift();
   console.log(primeiraFruta); // "maçã"
   console.log(frutas);        // ["uva", "laranja"]
   ```

4. **`unshift()`**: Adiciona um ou mais elementos ao início do 
array.
   ```javascript
   frutas.unshift("morango");
   console.log(frutas); // ["morango", "uva", "laranja"]
   ```

5. **`slice()`**: Retorna uma cópia de uma parte do array sem 
modificar o array original.
   ```javascript
   let algumasFrutas = frutas.slice(1, 3);
   console.log(algumasFrutas); // ["uva", "laranja"]
   ```

6. **`splice()`**: Pode adicionar ou remover elementos do array, 
modificando o array original.
   ```javascript
   frutas.splice(1, 1, "kiwi"); // Remove 1 elemento no índice 1 
   e adiciona "kiwi"
   console.log(frutas); // ["morango", "kiwi", "laranja"]
   ```

7. **`forEach()`**: Executa uma função para cada elemento do array.
   ```javascript
   frutas.forEach(function(fruta) {
       console.log(fruta);
   });
   ```

8. **`map()`**: Cria um novo array com os resultados de chamar 
uma função em cada elemento.
   ```javascript
   let frutasEmMaiusculo = frutas.map(function(fruta) {
       return fruta.toUpperCase();
   });
   console.log(frutasEmMaiusculo); // ["MORANGO", "KIWI", "LARANJA"]

   ```

### Arrays Multidimensionais (Arrays dentro de Arrays)
Um array pode conter outros arrays, criando o que chamamos de 
arrays multidimensionais.

```javascript
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz[1][2]); // Saída: 6
```

### Diferença entre Arrays e Objetos
Embora arrays sejam tecnicamente objetos em JavaScript, 
eles são especialmente projetados para armazenar listas 
ordenadas de dados. Objetos, por outro lado, são usados para 
armazenar pares chave-valor.

### Exemplo Completo:
```javascript
let carros = ["Ferrari", "Tesla", "BMW"];

// Acessar o primeiro carro
console.log(carros[0]); // Saída: Ferrari

// Adicionar um carro ao final
carros.push("Audi");
console.log(carros); // ["Ferrari", "Tesla", "BMW", "Audi"]

// Remover o último carro
carros.pop();
console.log(carros); // ["Ferrari", "Tesla", "BMW"]

// Verificar o tamanho do array
console.log(carros.length); // Saída: 3
```

### Conclusão:
Arrays são uma parte essencial de JavaScript, 
permitindo armazenar e manipular coleções de dados de forma 
eficiente. Além disso, oferecem uma série de métodos úteis para 
modificar e percorrer os dados.
 */

const lista = ["arroz", "feijao", "macarrao", "leite"];

const lista2 = [];
lista2[0] = "arroz";
lista2[1] = "feijao";
lista2[2] = "macarrao";
lista2[3] = "leite";

const lista3 = new Array("arroz", "feijao", "macarrao", "leite");

// para pegar um valor especifico

let x = lista[3];

// alterar o valor da matriz

lista[0] = "cafe";

const pessoa = ["dimitri", "teixeira", 30]; //array
const pessoa2 = { nome: "dimitri", sobrenome: "teixeira", idade: 30 }; //objeto

pessoa[0]; //para ver o campo com o nome no array
pessoa.nome; // para ver o campo nome com objeto

pessoa.length; //me retorna quantos itens tem dentro da matriz

alert(pessoa[pessoa.length - 1]); // me mostra o ultimo item

pessoa.push("brasileiro"); // acrescenta o item 'brasileiro' na lista o'
pessoa[pessoa.length] = "casado";

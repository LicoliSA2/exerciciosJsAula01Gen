//importanto biblioteca para entrada de dados
const leia = require('readline-sync');  

// Criando um vetor vazio para armazenar os numeros digitados pelo usuario
let vetor = [];   

// Lendo 10 números
for (let i = 0; i < 10; i++) {
  let numero = parseInt(leia.question(`Digite o ${i + 1} numero: `));
  vetor.push(numero);
}
// Mostrando elementos nos índices ímpares
console.log("\nElementos nos indices impares:");
for (let i = 1; i < vetor.length; i += 2) {
  console.log(vetor[i]);
}

// Mostrando elementos pares
console.log("\nElementos pares:");
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    console.log(vetor[i]);
  }
}

// Calculando soma e média
let soma = 0;
for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}
let media = soma / vetor.length;

// Exibindo resultados
console.log(`\nSoma: ${soma}`);
console.log(`Media: ${media.toFixed(2)}`);
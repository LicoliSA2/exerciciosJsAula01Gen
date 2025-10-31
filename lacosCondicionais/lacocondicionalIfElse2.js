// Acessando biblioteca
const leia = require("readline-sync");

// Variaveis 
let Nome, Idade, PrimeiraDoacao;

// Inserindo os dados
nome = leia.question("Digite seu nome: ");
idade = leia.questionInt("Digite sua idade: ");
PrimeiraDoacao = leia.question("Sua primeira doacao? (sim/nao): ");

// Laço condicional If/ Else / Verificando se a pessoa pode doar sangue
const apto = (idade >= 18 && idade <= 59) || (idade >= 60 && idade <= 69 && !primeiraDoacao);

// Saida de dados
if (apto) {
    console.log(`${nome} está apto(a) para doar sangue!`);
} else {
    console.log(`${nome} não está apto(a) para doar sangue!`);
}
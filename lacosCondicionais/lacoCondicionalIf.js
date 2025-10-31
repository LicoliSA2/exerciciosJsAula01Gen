// Impoortado 
const leia = require("readline-sync");

// Variáveis
let N1, N2, N3, soma;

// Lendo os números / chamando cada váriavel para inserção no console
N1 = leia.questionInt("Digite N1:");
N2 = leia.questionInt("Digite N2: ");
N3 = leia.questionInt("Digite N3: ");

//Soma dos números
soma = (N1 + N2);

//Laço condicional If/ Else / Se a soma de N1 + N2 for > < ou = a N3

if (soma > N3) {
    console.log("Soma é maior que N3.");
} else if (soma < N3) {
    console.log("Soma é menor que N3.");
} else {
    console.log("Soma é igual a N3.");
}





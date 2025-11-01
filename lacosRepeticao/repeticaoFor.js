// Importando a biblioteca para ler entrada do usuário
const leia = require('readline-sync');

// Entrada de dados pelo usuário
let num1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
let num2 = leia.questionInt("Digite o ultimo numero do intervalo: ");

// Verificando se o intervalo é válido / uso de if else
if (num1 >= num2) {
    console.log("Intervalo invalido!");
} else {
    console.log(`No intervalo entre ${num1} e ${num2}:`);

    // Estrutura de repetição FOR
    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} e multiplo de 3 e 5`);
        }
    }
}
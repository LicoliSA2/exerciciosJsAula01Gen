// importanto biblioteca para entrada de dados
const leia = require('readline-sync');

// Variaveis para armazenar os numeros do intervalo
let idade = 0;
let menores21 = 0;
let maiores50 = 0;

// Estrutura de repetição WHILE
// // Continua lendo até que o usuário digite uma idade negativa
while (true) 
    {
    idade = leia.questionInt("Digite uma idade: ");
    
// Se a idade for negativa, o laço WHILE é encerrado
    if (idade < 0) {
        break;
    }
// condição para contar menores de 21 anos
    if (idade < 21) {
        menores21++;
    } else if (idade > 50) { // condição para contar maiores de 50 anos    
        maiores50++;
    }
}   

// Exibindo os resultados 
console.log(`\nTotal de pessoas menores de 21 anos: ${menores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`);


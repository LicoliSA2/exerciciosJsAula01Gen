// Importando a biblioteca
const leia = require('readline-sync');

// Lista de cargos e códigos
console.log("=== TABELA DE CARGOS ===");
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Técnico de TI");
console.log("=========================\n");

// Entrada de dados / solicita as informações do funcionário
const nome = leia.question("Digite o nome do colaborador: ");
const codigo = leia.questionInt("Digite o codigo do cargo (1 a 6): ");

// Lê o salário e converte vírgula para ponto
let salarioStr = leia.question("Digite o salario atual: ");
salarioStr = salarioStr.replace(".", "").replace(",", "."); // Remove milhar e ajusta decimal
let salario = parseFloat(salarioStr);

// Variáveis
let cargo, percentual;

// Estrutura condicional switch para determinar o percentual do funcionário
switch (codigo) {
    case 1:
        cargo = "Gerente";
        percentual = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentual = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentual = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentual = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentual = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentual = 0.08;
        break;
    default:
        console.log("\nCódigo inválido! Digite um número entre 1 e 6.");
        cargo = "Cargo inexistente";
        percentual = 0;
}

// Calculando novo salário 
let novoSalario = salario + (percentual * salario); // Adicionado 'let'

// Mensagem de saída / informando ao funcionário sobre o reajuste
console.log("\n=== REAJUSTE SALARIAL ===");
console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário atual: R$ ${salario.toFixed(2).replace('.', ',')}`);
console.log(`Percentual de reajuste: ${(percentual * 100).toFixed(0)}%`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2).replace('.', ',')}`);

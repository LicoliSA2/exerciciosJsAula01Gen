// Importando a biblioteca
const leia = require('readline-sync');

// Variáveis
let nome, valor, valorTotal;

// Exibindo o cardápio no console para o cliente 
console.log("=== CARDÁPIO ===");
console.log("1 - Pão de Queijo (R$ 6,00)");
console.log("2 - Misto Quente (R$ 9,50)");
console.log("3 - Hambúrguer Artesanal (R$ 17,00)");
console.log("4 - Salada Tropical (R$ 14,00)");
console.log("5 - Café Expresso (R$ 5,00)");
console.log("6 - Suco Natural (R$ 10,00)");
console.log("=================\n");

// Entrada de dados, seleção do cliente
const codigo = leia.questionInt("Digite o codigo do produto: ");
const quantidade = leia.questionInt("Digite a quantidade: ");

// Aplicação do Switch case para selecionar o item do cardápio
switch (codigo) {
    case 1:
        nome = "Pão de Queijo";
        valor = 6.0;
        break;
    case 2:
        nome = "Misto Quente";
        valor = 9.5;
        break;
    case 3:
        nome = "Hambúrguer Artesanal";
        valor = 17.0;
        break;
    case 4:
        nome = "Salada Tropical";
        valor = 14.0;
        break;
    case 5:
        nome = "Café Expresso";
        valor = 5.0;
        break;
    case 6:
        nome = "Suco Natural";
        valor = 10.0;
        break;
    default:
        console.log("\nCódigo inválido! Digite um opção de 1 a 6.");
        nome = "Produto inexistente";
        valor = 0;
        break;
}

// Cauculando valor total
valorTotal = valor * quantidade;

// Comando do Cliente
console.log(`\nProduto: ${nome}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
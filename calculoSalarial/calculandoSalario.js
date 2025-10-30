// Importando a biblioteca
const leia = require('readline-sync')

// Variaveis
let salario, abono, novoSalario

// Entrada de dados
salario = parseFloat(leia.question('\nDigite o salario do funcionario: R$ '))
abono = parseFloat(leia.question('\nDigite o valor do abono: R$ '))

// Processamento
novoSalario = salario + abono

// Saida de dados
console.log(`\nNovo salario R$:${novoSalario.toFixed(3)}\n`)
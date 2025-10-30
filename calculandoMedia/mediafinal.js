// Importando biblioteca
const prompt = require('prompt-sync')()

// variaveis | Entrada de dados
let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let nota4 = parseFloat(prompt("Digite a quarta nota: "))

// Processamento
mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4

// Saida de dados
console.log(`\nA media final é: ${mediaFinal.toFixed(1)}\n`)
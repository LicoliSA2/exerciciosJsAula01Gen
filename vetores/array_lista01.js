// === LISTA 01: ARRAYS ===

// Exercício 1: Array de cores - entrada do usuário
console.log("--- Exercício 1: Array de Cores ---\n");

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cores = [];
let coraAtual = 0;

const adicionarCor = () => {
  if (coraAtual < 5) {
    rl.question(`Digite a cor ${coraAtual + 1}: `, (cor) => {
      cores.push(cor);
      coraAtual++;
      adicionarCor();
    });
  } else {
    // Exibir cores adicionadas
    console.log("\nListar todas as cores:");
    cores.forEach(cor => console.log(cor));

    // Ordenar e listar
    console.log("\nOrdenar as cores:");
    const coresOrdenadas = [...cores].sort();
    coresOrdenadas.forEach(cor => console.log(cor));

    // Exercício 2
    exercicio2();
  }
};

const exercicio2 = () => {
  console.log("\n--- Exercício 2: Buscar Número no Array ---\n");
  const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

  // Exibir índices
  console.log("Índices:");
  for (let i = 0; i < numeros.length; i++) {
    console.log(i);
  }

  // Exibir array
  console.log("\nArray:");
  numeros.forEach(num => console.log(num));

  rl.question("\nDigite o número que você deseja encontrar: ", (input) => {
    const numeroBuscado = parseInt(input);
    const posicao = numeros.indexOf(numeroBuscado);

    if (posicao !== -1) {
      console.log(`\nO número ${numeroBuscado} está localizado na posição: ${posicao}`);
    } else {
      console.log(`\nO número ${numeroBuscado} não foi encontrado!`);
    }

    rl.close();
  });
};

adicionarCor();

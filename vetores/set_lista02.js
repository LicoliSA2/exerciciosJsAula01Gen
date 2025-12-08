// === LISTA 02: SETS ===

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Exercício 1: Set com 10 números (entrada do usuário, sem repetição)
console.log("--- Exercício 1: Set de Números (Entrada do Usuário) ---\n");

const set1 = new Set();
let numeroAtual = 0;

const adicionarNumero = () => {
  if (numeroAtual < 10) {
    rl.question(`Digite o número ${numeroAtual + 1}: `, (input) => {
      const numero = parseInt(input);
      set1.add(numero);
      numeroAtual++;
      adicionarNumero();
    });
  } else {
    // Listar dados do Set
    console.log("\nListar dados do Set:");
    set1.forEach(num => console.log(num));

    // Exercício 2
    exercicio2();
  }
};

const exercicio2 = () => {
  console.log("\n--- Exercício 2: Buscar Número no Set (Inicializado) ---\n");
  
  // Set pré-inicializado
  const set2 = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

  // Exibir Set
  console.log("Set:");
  set2.forEach(num => console.log(num));

  rl.question("\nDigite o número que você deseja encontrar: ", (input) => {
    const numeroBuscado = parseInt(input);

    if (set2.has(numeroBuscado)) {
      console.log(`\nO número ${numeroBuscado} foi encontrado!`);
    } else {
      console.log(`\nO número ${numeroBuscado} não foi encontrado!`);
    }

    rl.close();
  });
};

adicionarNumero();

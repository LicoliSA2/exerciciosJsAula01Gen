// importando  biblioteca e aqruivo Queue.ts
import { Queue } from "./Queue";
import leia = require("readline-sync");

// Cria uma nova fila (Queue) que vai guardar nomes (string)
const fila = new Queue<string>();
//declaração de variaveis
let opcao: number; // vai armazenar a opção do úsuario
let nome: string; // vai armazenar o nome do cliente

// Bloco de processamento e exibição  

// Loop do menu / laço do ...while
// mantém o menu aparecendo até o usuário digitar 0
do {
  console.log("==========================================");
  console.log("                  MENU");
  console.log("==========================================");
  console.log("1 - Adicionar cliente na fila");
  console.log("2 - Listar todos os clientes");
  console.log("3 - Retirar cliente da fila");
  console.log("0 - Sair");
  console.log("==========================================");

// Mostra a pergunta no console ao úsuario  
// Guarda o número digitado pelo usuário em "opcao"
  opcao = leia.questionInt("Escolha uma opção: ");

// Limpa a tela do console 
  console.clear();

   // Se o usuário escolher 1 → Adiciona cliente na fila
  if (opcao === 1) {
    // Pede o nome do cliente e guarda na variável "nome"
    nome = leia.question("Digite o nome do cliente: ");
    // Processa a opção escolhida - adiciona o nome na fila
    fila.enqueue(nome);
    console.log("Cliente adicionado com sucesso!");
  
  // Se o usuário escolher 2 → Mostra todos os nomes na fila
} else if (opcao === 2) {
    // Verifica se a fila está vazia antes de exibir
    if (fila.isEmpty()) {
      console.log("A fila está vazia.");
    } else {
      console.log("Clientes na fila:");
      fila.printQueue(); // Exibe todos os nomes da fila
    }

    // Se o usuário escolher 3 → Remove o primeiro cliente da fila
  } else if (opcao === 3) {
    // Verifica se tem alguém na fila
    if (fila.isEmpty()) {
      console.log("A fila está vazia, ninguém para remover.");
    } else {
            
    // Remove o primeiro cliente e guarda o nome em "removido"
      const removido = fila.dequeue();
      console.log("Cliente removido:", removido);
    }
  // Se o usuário escolher 0 → Finaliza o programa  
  } else if (opcao === 0) {
    console.log("Programa finalizado.");
  
// Se o usuário digitar qualquer outra coisa
} else {
    console.log("Opção inválida! Tente novamente.");
  }
// O menu vai repetir enquanto a opção valida diferente de 0
} while (opcao !== 0);

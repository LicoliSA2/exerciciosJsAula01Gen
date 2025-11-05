// Importa Stack do arquivo "Stack.ts"
import { Stack } from "./Stack";

// Importa a biblioteca
import leia = require("readline-sync");

//declarando variaveis
// Cria uma nova pilha que vai guardar nomes de livros (tipo string)
const pilha = new Stack<string>();

// Variáveis para guardar a opção do menu e o nome do livro
let numero: number;
let livro: string;

// laço"do while" faz o menu repetir até o usuário escolher a opção 0
do { 
    // Mostra o menu principal na tela
    console.log ("\n**************************************************************************");
    console.log("                                    MENU");
    console.log ("**************************************************************************");
    console.log("                     1 - Adicionar um novo livro na pilha");
    console.log("                     2 - Listar todos os livros da pilha");
    console.log("                     3 - Retirar um livro da pilha");
    console.log("                     0 - Sair");
    console.log ("**************************************************************************");
    console.log ("**************************************************************************");

    // pergunta ao usuário qual opção ele deseja 
    console.log("\nEntre com a opção desejada: ");
    numero = leia.questionInt();

    // Limpa a tela no consoe
    console.clear();

    // Estrutura de decisão (switch): executa conforme a opção escolhida
    switch (numero) {

        // Opção 1 → Adicionar um novo livro na pilha
        case 1:
            console.log("Digite o nome do livro: ");
            livro = leia.question(); // lê o nome digitado
            pilha.push(livro);       // adiciona o livro no topo da pilha
            console.clear();
            console.log("Pilha atual:");
            pilha.printStack();      // mostra todos os livros da pilha
            console.log("Livro adicionado!");
            break;

        // Opção 2 → Mostrar todos os livros da pilha
        case 2:
            // Verifica se a pilha está vazia
            if (pilha.isEmpty()) {
                console.log("\nA pilha está vazia!");
            } else {
                console.log("Lista de livros na pilha:");
                pilha.printStack();  // mostra todos os livros empilhados
            }                
            break;

        // Opção 3 → Retirar um livro da pilha
        case 3:
            // Se estiver vazia, avisa o usuário
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia! Nenhum livro para retirar.");
            } else {
                // Mostra os livros antes de remover
                console.log("Pilha antes da remoção:");
                pilha.printStack();
                // Retira o livro que está no topo
                const removido = pilha.pop();
                console.log("\nLivro retirado:", removido);
                console.log("\nPilha atualizada:");
                pilha.printStack();
            }
            break;

        // Opção 0 → Finalizar o programa
        case 0:
            console.log("Programa finalizado!");
            break;

        // Caso o usuário digite um número inválido
        default:
            console.log("Opção inválida! Escolha uma das opções do menu.");
    }

// O menu vai repetir enquanto o número for diferente de 0
} while (numero !== 0);
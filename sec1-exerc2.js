// Seção 1: Estruturas de Controle Avançadas
// Exercício 2 - Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

function jogoAdivinhacao() {
    // Gerar número aleatório entre 1 e 100
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    let tentativas = 0;
    let acertou = false;
    let palpite;

    console.log("=== JOGO DE ADIVINHAÇÃO ===");
    console.log("Tente adivinhar o número entre 1 e 100");
    
    while (!acertou) {
        // Ler palpite do usuário
        palpite = parseInt(prompt('Qual é o seu palpite? '));
        tentativas++;
        
        // Verificar se a entrada é válida
        if (isNaN(palpite)) {
            console.log("Por favor, digite um número válido.");
            tentativas--; // Não contar tentativas inválidas
            continue;
        }
        
        // Comparar palpite com número secreto
        if (palpite === numeroSecreto) {
            acertou = true;
        } else if (palpite < numeroSecreto) {
            console.log("Mais alto!");
        } else {
            console.log("Mais baixo!");
        }
    }

    if (tentativas === 1) {
        console.log(`Parabéns! Acertou de primeira! O número era ${numeroSecreto}.`);
    } else {
        console.log(`Parabéns! Acertou em ${tentativas} tentativas. O número era ${numeroSecreto}.`);
    }
}

jogoAdivinhacao();
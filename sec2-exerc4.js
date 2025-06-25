// Seção 2: Funções e Recursão
// Exercício 4 - Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n) {
    // Caso n seja negativo, exibir erro
    if (n < 0) {
        throw new Error("Não existe fatorial de número negativo");
    }
    
    // Caso base: fatorial de 0 é 1
    if (n === 0) {
        return 1;
    }
    
    // Caso recursivo: n! = n * (n-1)!
    return n * fatorial(n - 1);
}

function testarFatorial() {
    const prompt = require('prompt-sync')();
    
    console.log("=== CALCULADORA DE FATORIAL ===");
    
    try {
        const numero = parseInt(prompt("Digite um número inteiro não-negativo: "));
        
        // Verificar se é um número válido
        if (isNaN(numero)) {
            console.log("Entrada inválida. Por favor, digite um número inteiro.");
            return;
        }
        
        const resultado = fatorial(numero);
        console.log(`Fatorial de ${numero} é: ${resultado}`);
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

testarFatorial();
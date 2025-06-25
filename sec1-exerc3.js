// Seção 1: Estruturas de Controle Avançadas
// Exercício 3 - Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')();

function extrairPalavrasUnicas(texto) {
    // Dividir a string em palavras
    const todasPalavras = texto.toLowerCase().split(' ');
    
    // Array para armazenar as palavras únicas
    const palavrasUnicas = [];
    
    // Percorrer todas as palavras
    for (let i = 0; i < todasPalavras.length; i++) {
        const palavraAtual = todasPalavras[i];
        
        // Verificar se a palavra não está vazia (espaços extras)
        if (palavraAtual.trim() !== '') {
            // Verificar se a palavra já existe no array
            let palavraExiste = false;
            
            // Verificar se a palavra já foi adicionada
            for (let j = 0; j < palavrasUnicas.length; j++) {
                if (palavrasUnicas[j] === palavraAtual) {
                    palavraExiste = true;
                    break;
                }
            }
            
            // Se a palavra não existir no array, adiciona
            if (!palavraExiste) {
                palavrasUnicas.push(palavraAtual);
            }
        }
    }
    
    return palavrasUnicas;
}

function main() {
    console.log("=== EXTRATOR DE PALAVRAS ÚNICAS ===");
    const texto = prompt("Digite uma frase: ");
    
    const palavrasUnicas = extrairPalavrasUnicas(texto);
    
    console.log("\nPalavras únicas encontradas:");
    console.log(palavrasUnicas);
    console.log(`Total de palavras únicas: ${palavrasUnicas.length}`);
}

main();
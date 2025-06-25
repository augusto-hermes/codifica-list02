// Seção 1: Estruturas de Controle Avançadas
//
// Exercício 1 - Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const prompt = require('prompt-sync')()

// Função que verifica se uma data é válida
function ehDataValida(dia, mes, ano) {
    // Verificações básicas
    if (mes < 1 || mes > 12) return false;  // Mês inválido
    if (dia < 1) return false;  // Dia inválido (menor que 1)
    if (ano < 0) return false;  // Não aceito anos negativos
    
    let dias;
    
    // Meses com 31 dias: janeiro, março, maio, julho, agosto, outubro e dezembro
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || 
        mes == 8 || mes == 10 || mes == 12) {
        dias = 31;
    }
    // Meses com 30 dias: abril, junho, setembro e novembro
    else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        dias = 30;
    }
    // Fevereiro é um caso especial
    else {
        let bissexto = false;
        
        // Divisível por 4 e não por 100, ou divisível por 400
        if (ano % 4 == 0 && ano % 100 != 0) {
            bissexto = true;
        } else if (ano % 400 == 0) {
            bissexto = true;
        }
        
        // Fevereiro tem 29 dias em ano bissexto e 28 nos demais
        dias = bissexto ? 29 : 28;
    }
    
    // Verifica se o dia está dentro do limite para o mês
    return dia <= dias;
}

function main() {
    // Coletando informações
    console.log("Validação de datas");
    console.log("-----------------");
    const dia = parseInt(prompt('Dia: '));
    const mes = parseInt(prompt('Mês: '));
    const ano = parseInt(prompt('Ano: '));
    
    // Adicionando zero à esquerda, se necessário
    const diaDisplay = dia < 10 ? '0' + dia : dia;
    const mesDisplay = mes < 10 ? '0' + mes : mes;
    
    // Verificando se a data é válida
    if (ehDataValida(dia, mes, ano)) {
        console.log(`A data ${diaDisplay}/${mesDisplay}/${ano} é válida!`);
    } else {
        console.log(`Erro: ${diaDisplay}/${mesDisplay}/${ano} não é uma data válida!`);
    }
}

main();
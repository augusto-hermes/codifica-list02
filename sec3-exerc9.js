// Seção 3: Arrays e Objetos Complexos
// 9. Conversão Entre Formatos
// Escreva duas funções:
// - paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// - objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(pares) {
  const resultado = {};
  
  for (const [chave, valor] of pares) {
    resultado[chave] = valor;
  }
  
  return resultado;
}

function objetoParaPares(obj) {
  const pares = [];
  
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  
  return pares;
}

const pares = [
  ["nome", "Sandro Silva"],
  ["idade", 25],
  ["profissao", "Engenheiro"]
];

console.log("Array de pares original:");
console.log(pares);

const objeto = paresParaObjeto(pares);
console.log("\nConvertido para objeto:");
console.log(objeto);

const novoPares = objetoParaPares(objeto);
console.log("\nConvertido de volta para array de pares:");
console.log(novoPares);
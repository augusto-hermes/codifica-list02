// Seção 2: Funções e Recursão
// Exercício 6 - Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  // Cache para armazenar resultados anteriores
  const cache = {};
  
  // Retorna a função memoizada
  return function(...args) {
    // Cria uma chave única baseada nos argumentos
    const key = JSON.stringify(args);
    
    // Verifica se o resultado já está em cache
    if (!(key in cache)) {
      console.log(`Calculando resultado para ${args}...`);
      // Executa a função original e armazena o resultado
      cache[key] = fn.apply(this, args);
    } else {
      console.log(`Usando resultado em cache para ${args}`);
    }
    
    return cache[key];
  };
}

// Função que simula um cálculo demorado
function calcularQuadrado(num) {
  console.log(`Realizando cálculo demorado para ${num}...`);
  
  // Simulando uma operação que leva tempo
  const inicio = Date.now();
  while (Date.now() - inicio < 100) {} // Espera 100ms
  
  return num * num;
}

// Versão memoizada da função
const calcularQuadradoMemoizado = memoize(calcularQuadrado);

console.log("=== DEMONSTRAÇÃO DE MEMOIZAÇÃO ===\n");

console.log("1. Primeira chamada para calcularQuadradoMemoizado(5):");
console.time("Primeira chamada");
let resultado = calcularQuadradoMemoizado(5);
console.timeEnd("Primeira chamada");
console.log(`Resultado: ${resultado}\n`);

console.log("2. Segunda chamada para calcularQuadradoMemoizado(5):");
console.time("Segunda chamada");
resultado = calcularQuadradoMemoizado(5);
console.timeEnd("Segunda chamada");
console.log(`Resultado: ${resultado}\n`);

console.log("3. Chamada com argumento diferente calcularQuadradoMemoizado(10):");
console.time("Nova chamada");
resultado = calcularQuadradoMemoizado(10);
console.timeEnd("Nova chamada");
console.log(`Resultado: ${resultado}\n`);

console.log("4. Repetindo calcularQuadradoMemoizado(10):");
console.time("Chamada repetida");
resultado = calcularQuadradoMemoizado(10);
console.timeEnd("Chamada repetida");
console.log(`Resultado: ${resultado}`);
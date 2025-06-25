// Seção 2: Funções e Recursão
// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

function buscarDados(termo) {
  console.log(`[${new Date().toLocaleTimeString()}] Buscando: "${termo}"`);
}

const buscarComDebounce = debounce(buscarDados, 500);

// Simulação de usuário digitando rapidamente
console.log("Simulando digitação rápida (apenas a última busca será executada):");
buscarComDebounce("p");
buscarComDebounce("pr");
buscarComDebounce("pro");
buscarComDebounce("prog");
buscarComDebounce("progr");
buscarComDebounce("progra");
buscarComDebounce("program");
buscarComDebounce("programa");
buscarComDebounce("programaç");
buscarComDebounce("programação");

// Demonstra execução após pausa
setTimeout(() => {
  console.log("\nSimulando nova busca após pausa:");
  buscarComDebounce("javascript");
}, 8000);
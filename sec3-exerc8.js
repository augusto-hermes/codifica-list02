// Seção 3: Arrays e Objetos Complexos
// Exercício 8 - Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    // Se o cliente já existe no acumulador, soma o total
    if (acumulador[venda.cliente]) {
      acumulador[venda.cliente] += venda.total;
    } 
    // Se não existe, cria uma nova entrada
    else {
      acumulador[venda.cliente] = venda.total;
    }
    
    return acumulador;
  }, {}); // Inicia com um objeto vazio
}

const vendas = [
  { cliente: "João", total: 150 },
  { cliente: "Maria", total: 200 },
  { cliente: "João", total: 100 },
  { cliente: "Ana", total: 300 },
  { cliente: "Maria", total: 150 },
  { cliente: "Ana", total: 50 }
];

console.log("Array original de vendas:");
console.log(vendas);

console.log("\nVendas agrupadas por cliente:");
const vendasAgrupadas = agruparVendasPorCliente(vendas);
console.log(vendasAgrupadas);

console.log("\nResumo de vendas por cliente:");
for (const cliente in vendasAgrupadas) {
  console.log(`${cliente}: R$ ${vendasAgrupadas[cliente].toFixed(2)}`);
}
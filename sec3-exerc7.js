// Seção 3: Arrays e Objetos Complexos
// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function ordenarProdutosPorPreco(produtos) {
  // Ordenando o array por preço crescente
  const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
  
  // Mapeando para obter os nomes dos produtos formatados com seus preços
  const produtosFormatados = produtosOrdenados.map(
    produto => `${produto.nome}: R$ ${produto.preco.toFixed(2)}`
  );
  
  return produtosFormatados;
}

const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Fone de Ouvido", preco: 150 }
];

console.log("Array original de produtos:");
console.log(produtos);

console.log("\nProdutos ordenados por preço em ordem crescente:");
const produtosOrdenados = ordenarProdutosPorPreco(produtos);
console.log(produtosOrdenados);
// Variáveis para carrinho e contador
let carrinho = [];
let quantidadeItens = 0;

// Função para atualizar o contador do carrinho
function atualizarCarrinho() {
    document.getElementById("quantidadeItens").innerText = quantidadeItens;
}

// Adicionar produtos ao carrinho
document.querySelectorAll('.adicionarCarrinho').forEach(button => {
    button.addEventListener('click', function() {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));

        // Verifica se o produto já está no carrinho
        const itemExistente = carrinho.find(item => item.nome === nome);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ nome, preco, quantidade: 1 });
        }

        // Atualiza o contador de itens no carrinho
        quantidadeItens++;
        atualizarCarrinho();
    });
});

// Função para pesquisar produtos
document.getElementById('pesquisa').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const nomeProduto = produto.getAttribute('data-nome').toLowerCase();
        if (nomeProduto.includes(termoPesquisa)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});

// Mostrar carrinho (exemplo simples)
document.getElementById('abrirCarrinho').addEventListener('click', function() {
    alert("Carrinho de compras:\n" + carrinho.map(item => `${item.nome} - R$${item.preco} x ${item.quantidade}`).join('\n'));
});


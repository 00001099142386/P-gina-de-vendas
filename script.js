// Variáveis para carrinho e contador
let carrinho = [];
let quantidadeItens = 0;
let favoritos = [];

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

// Variável para favoritos
let favoritos = [];

// Função para adicionar aos favoritos
document.querySelectorAll('.favoritar').forEach(button => {
    button.addEventListener('click', function() {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));

        // Verifica se o produto já está nos favoritos
        const favoritoExistente = favoritos.find(item => item.nome === nome);
        if (!favoritoExistente) {
            favoritos.push({ nome, preco });
            alert(`${nome} foi adicionado aos favoritos!`);
        } else {
            alert(`${nome} já está nos favoritos.`);
        }
    });
});

// Abrir lista de favoritos
document.getElementById('abrirFavoritos').addEventListener('click', function() {
    if (favoritos.length === 0) {
        alert("Nenhum item nos favoritos.");
    } else {
        alert("Favoritos:\n" + favoritos.map(item => `${item.nome} - R$${item.preco}`).join('\n'));
    }
});

// Comprar agora
document.querySelectorAll('.comprarAgora').forEach(button => {
    button.addEventListener('click', function() {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));
        alert(`Você comprou ${nome} por R$${preco.toFixed(2)}!`);
    });
});



